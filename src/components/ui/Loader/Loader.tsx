import React, { ReactElement } from 'react';

import { LoadingSpinner } from './LoadingSpinner/LoadingSpinner';

interface LoaderProps {
  children: ReactElement;
  isLoading: boolean;
  loaderClassName?: string;
  spinnerClassName?: string;
}

export const Loader = ({
  children,
  isLoading,
  loaderClassName = '',
  spinnerClassName = '',
}: LoaderProps) => isLoading ? (
    <LoadingSpinner
      loaderClassName={loaderClassName}
      spinnerClassName={spinnerClassName}
    />
  ) : (
    children
  );
