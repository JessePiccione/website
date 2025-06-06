import { POST } from '@/app/api/assistant/route'
import getAssistantResponse from '@/components/api/getAssistantResponse'

jest.mock('@/components/api/getAssistantResponse')

describe('assistant API route', () => {
  it('returns response from getAssistantResponse', async () => {
    getAssistantResponse.mockResolvedValue('hi there')
    const request = { json: async () => ({ message: 'hello' }) }
    const response = await POST(request)
    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ reply: 'hi there' })
  })
})
