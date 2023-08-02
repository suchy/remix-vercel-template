import type { V2_MetaFunction } from '@vercel/remix';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ];
};

export default function Index() {
  return (
    <div>
      Landing page. <a href="/app">Go to app</a>.
    </div>
  );
}
