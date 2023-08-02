import { getAuth } from '@clerk/remix/ssr.server';
import type { LoaderArgs } from '@vercel/remix';
import { redirect } from '@vercel/remix';

export async function getCurrentUserOrSignInRedirect(args: LoaderArgs) {
  const { userId } = await getAuth(args);

  const { request } = args;

  const url = new URL(request.url);

  return {
    userId,
    signInRedirect: redirect('/signin?redirect=' + url.pathname)
  };
}
