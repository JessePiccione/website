const fs = require('fs');
const { Configuration, OpenAIApi } = require('openai');
const puppeteer = require('puppeteer');

const TASK_IMAGE = process.env.TASK_IMAGE || 'task.png';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function sendImageToModel(path) {
  const configuration = new Configuration({ apiKey: OPENAI_API_KEY });
  const openai = new OpenAIApi(configuration);
  const image = fs.readFileSync(path, { encoding: 'base64' });
  const response = await openai.createChatCompletion({
    model: 'gpt-4-vision-preview',
    messages: [
      { role: 'system', content: 'You are a browser assistant.' },
      { role: 'user', content: [{ type: 'image_url', image_url: `data:image/png;base64,${image}` }] }
    ]
  });
  return response.data.choices[0].message.content;
}

async function executeCommands(commands, browser) {
  const page = await browser.newPage();
  for (const cmd of commands) {
    if (cmd.action === 'goto') {
      await page.goto(cmd.url);
    } else if (cmd.action === 'click') {
      await page.click(cmd.selector);
    } else if (cmd.action === 'fill') {
      await page.type(cmd.selector, cmd.text);
    }
  }
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const instructions = await sendImageToModel(TASK_IMAGE);
  await executeCommands(instructions, browser);
  await browser.close();
})();
