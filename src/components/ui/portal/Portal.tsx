import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  id: string;
  children: ReactNode;
  mountNode?: HTMLElement;
};

export function Portal({
  id,
  children,
  mountNode = document.body,
}: PortalProps) {
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    const oldContainer = document.getElementById(id);
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', id);

    mountNode.appendChild(oldContainer || newContainer);
    setContainer(oldContainer || newContainer);
  }, [id]);

  return container ? createPortal(children, container) : null;
}
