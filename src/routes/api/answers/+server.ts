import type { RequestHandler } from '@sveltejs/kit';
import { db } from '../../../../db';
import { answers } from '../../../../src/lib/schema';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const { q1, q2 } = data;

  try {
    await db.insert(answers).values({ q1, q2 });
    return new Response('Saved', { status: 200 });
  } catch (err) {
    return new Response('Error saving', { status: 500 });
  }
};