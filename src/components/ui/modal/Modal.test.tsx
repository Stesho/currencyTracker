import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Modal } from '@/components/ui/modal/Modal';

describe('Modal', () => {
  it('should invoke onClose function when close button clicked', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal id='modal' onClose={onClose}>
        Content
      </Modal>,
    );

    const closeButton = getByTestId('modalCloseButton');

    fireEvent.click(closeButton);

    expect(onClose).toBeCalledTimes(1);
  });
});
