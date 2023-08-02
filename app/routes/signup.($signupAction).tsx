import { SignUp } from '@clerk/remix';
import { signInRoute, signUpRoute } from '~/helpers/routes';

export default function SignUpRoute() {
  return (
    <div className="flex min-h-screen justify-center pt-20">
      <SignUp routing="path" path={signUpRoute()} signInUrl={signInRoute()} />
    </div>
  );
}
