import { type LoaderArgs } from '@vercel/remix';
import { getCurrentUserOrSignInRedirect } from '../helpers/getCurrentUserOrSignInRedirect';
import { Page } from '~/components/Page/Page';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '~/components/ui/card';

export async function loader(args: LoaderArgs) {
  const { userId, signInRedirect } = await getCurrentUserOrSignInRedirect(args);

  if (!userId) {
    return signInRedirect;
  }

  return null;
}

export default function App() {
  return (
    <Page
      headerLinks={[{ text: 'Header link example' }]}
      navLinks={[{ text: 'Nav link  example', to: '#' }]}
    >
      <Card>
        <CardHeader>
          <CardTitle>Hello, World!</CardTitle>

          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>

        <CardContent>Hello, World!</CardContent>
      </Card>
    </Page>
  );
}
