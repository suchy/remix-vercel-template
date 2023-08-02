import { type LoaderArgs } from '@vercel/remix';
import { getCurrentUserOrSignInRedirect } from '../helpers/getCurrentUserOrSignInRedirect';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { PageNav } from '~/components/PageNav';

export async function loader(args: LoaderArgs) {
  const { userId, signInRedirect } = await getCurrentUserOrSignInRedirect(args);

  if (!userId) {
    return signInRedirect;
  }

  return null;
}

export default function App() {
  return (
    <>
      <PageHeader links={[{ text: 'Header link example' }]} />
      <PageNav links={[{ text: 'Nav link  example', to: '#' }]} />

      <Container className="py-6">Hello, World!</Container>
    </>
  );
}
