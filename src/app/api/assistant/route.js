import { NextResponse } from 'next/server'
import getAssistantResponse from '@/components/api/getAssistantResponse'

export async function POST(request) {
  try {
    const { message } = await request.json();
    const reply = await getAssistantResponse(message);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ reply: 'Sorry, something went wrong.' }, { status: 500 });
  }
}
