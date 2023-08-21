import { Link } from '@remix-run/react';

interface PageNavProps {
  links?: { text: string; to: string }[];
}

export function PageNav({ links = [] }: PageNavProps) {
  if (!links.length) {
    return null;
  }

  return (
    <nav className="h-12 px-6 border-b border-b-slate-200 bg-white">
      <ul className="h-full flex flex-row items-center text-sm">
        {links.map((link, index) => (
          <li key={link.to} className="mr-4">
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
