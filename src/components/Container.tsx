import React from 'react';

export default function Container({ children }: React.PropsWithChildren) {
  return <div className='container mx-auto p-4'>{children}</div>;
}
