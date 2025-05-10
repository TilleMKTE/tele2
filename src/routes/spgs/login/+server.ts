import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { username, password } = await request.json();

  if (username === 'demo' && password === '1234') {
    cookies.set('auth', 'yes', {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24
    });
    return new Response('OK');
  }

  return new Response('Unauthorized', { status: 401 });
};

