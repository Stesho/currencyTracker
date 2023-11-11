import { ReactNode,useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = (containerId: string) => {
  const [container] = useState(() => {
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', containerId);
    return newContainer;
  });

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  // useEffect(() => {
  //   const oldContainer = document.getElementById(id);
  //   const newContainer = document.createElement('div');
  //   newContainer.setAttribute('id', id);
  //
  //   mountNode.appendChild(oldContainer || newContainer);
  //   setContainer(oldContainer || newContainer);
  // }, [id]);

  return ({ children }: { children: ReactNode }) =>
    container ? createPortal(children, container) : null;
};
