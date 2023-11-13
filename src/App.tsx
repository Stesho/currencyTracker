import React, { ReactNode } from 'react';

import '@/styles/index.scss';

interface AppProps {
  children: ReactNode;
}

export function App({ children }: AppProps) {
  return children;
}
