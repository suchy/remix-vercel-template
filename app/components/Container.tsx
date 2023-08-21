import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  wide?: boolean;
}

export const Container = ({
  children,
  className = '',
  style,
  wide
}: ContainerProps) => {
  const sizeClassName = wide ? 'max-w-7xl' : 'max-w-4xl';

  return (
    <div
      className={`mx-auto w-full px-4 ${sizeClassName} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
