import type { HTMLAttributes } from 'react';

export const Container = ({
  children,
  className = '',
  style
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={`mx-auto w-full max-w-7xl px-4 ${className}`} style={style}>
    {children}
  </div>
);
