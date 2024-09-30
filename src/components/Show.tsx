import React from 'react';

interface ShowProps {
  when: boolean | null;
  fallback: React.ReactNode;
}

export default function Show({
  children,
  when,
  fallback,
}: React.PropsWithChildren<ShowProps>): JSX.Element {
  if (when) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <React.Fragment>{fallback}</React.Fragment>;
}
