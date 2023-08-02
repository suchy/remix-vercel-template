import { SignIn } from '@clerk/remix';
import { useLocation } from '@remix-run/react';
import { signInRoute, signUpRoute } from '~/helpers/routes';

export default function SignInRoute() {
  const location = useLocation();

  const search = new URLSearchParams(location.search);

  const afterSignInUrl = search.get('redirect');

  return (
    <div className="flex min-h-screen justify-center pt-20">
      <SignIn
        path={signInRoute()}
        routing="path"
        signUpUrl={signUpRoute()}
        afterSignInUrl={afterSignInUrl}
      />
    </div>
  );
}
