import { Container } from '../Container';
import { PageHeader } from './PageHeader';
import { PageNav } from './PageNav';
import type { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  headerLinks?: { text: string; to?: string }[];
  navLinks?: { text: string; to: string }[];
}

export function Page({ children, headerLinks, navLinks }: PageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader links={headerLinks} />

      <PageNav links={navLinks} />

      <Container className="py-6">{children}</Container>
    </div>
  );
}
