import { Link } from '@remix-run/react';
import { appRoute, signInRoute } from '../../helpers/routes';
import { UserButton } from '@clerk/remix';
import { Logo } from '../Logo';

interface HeaderProps {
  links?: { text: string; to?: string }[];
}

export function PageHeader({ links = [] }: HeaderProps) {
  const headerLinks = [...defaultLinks, ...links];

  return (
    <header className="flex h-16 flex-row items-center justify-between px-6 border-b border-b-slate-200 bg-white">
      <div className="flex items-center grow">
        <Link to={appRoute()} className="grow-0 mr-4">
          <Logo className="h-8" />
        </Link>

        <ul className="flex flex-row items-center text-sm font-medium">
          {headerLinks.map((link, index) => (
            <li key={`${link.to}-${index}`} className={liClassName}>
              {link.to && <Link to={link.to}>{link.text}</Link>}
              {!link.to && <span>{link.text}</span>}
            </li>
          ))}
        </ul>
      </div>

      <UserButton afterSignOutUrl={signInRoute()} />
    </header>
  );
}

const defaultLinks: { text: string; to?: string }[] = [];

const slashAfterClassName =
  "after:ml-4 after:pb-1 after:text-lg after:font-normal after:leading-none after:content-['/'] after:last:hidden after:text-gray-300";

const slashBeforeClassName =
  "first:before:mr-4 first:before:pb-1 first:before:text-xl first:before:font-normal first:before:leading-none first:before:content-['/'] first:before:text-gray-300";

const liClassName = `mr-4 flex items-center leading-none ${slashAfterClassName} ${slashBeforeClassName}`;
