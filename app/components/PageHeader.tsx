import { Link } from '@remix-run/react';
import { appRoute, signInRoute } from '../helpers/routes';
import { UserButton } from '@clerk/remix';

interface HeaderProps {
  links?: { text: string; to?: string }[];
}

export function PageHeader({ links = [] }: HeaderProps) {
  const headerLinks = [...defaultLinks, ...links];

  return (
    <header className="flex h-16 flex-row items-center justify-between px-6 border-b border-b-slate-200">
      <ul className="flex h-full flex-row items-center text-sm font-medium">
        {headerLinks.map((link, index) => (
          <li key={`${link.to}-${index}`} className={liClassName}>
            {link.to && <Link to={link.to}>{link.text}</Link>}
            {!link.to && <span>{link.text}</span>}
          </li>
        ))}
      </ul>

      <UserButton afterSignOutUrl={signInRoute()} />
    </header>
  );
}

const defaultLinks = [{ text: 'Application Name', to: appRoute() }];

const liClassName =
  "mr-4 flex items-center leading-none after:ml-4 after:pb-1 after:text-xl after:font-normal after:leading-none after:opacity-30 after:content-['/'] after:last:hidden";
