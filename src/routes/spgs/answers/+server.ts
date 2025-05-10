import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/db';
import { answers } from '$lib/schema';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();

  const { q1, q2 } = data;

  try {
    await db.insert(answers).values({ q1, q2 });
    return new Response('Saved', { status: 200 });
  } catch (err) {
    console.error('DB error:', err);
    return new Response('Error saving', { status: 500 });
  }
};