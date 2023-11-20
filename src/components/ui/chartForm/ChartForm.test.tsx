import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { ChartForm } from '@/components/ui/chartForm/ChartForm';

const chartData = [
  ['Day', '', '', '', ''],
  ['1', 20, 28, 38, 45],
  ['2', 31, 38, 55, 66],
  ['3', 50, 55, 77, 80],
];

describe('Chart form', () => {
  it('should correctly render form', () => {
    const { container } = render(<ChartForm onSubmit={jest.fn} />);

    expect(container).not.toBeNull();
  });

  it('should render default amount of inputs if initial data is not passed', () => {
    const { getAllByTestId } = render(<ChartForm onSubmit={jest.fn} />);

    const numberInputs = getAllByTestId('numberInput');

    expect(numberInputs.length).toBe(61);
  });

  it('should render default amount of inputs if initial data passed', () => {
    const { getAllByTestId } = render(
      <ChartForm onSubmit={jest.fn} initialChartData={chartData} />,
    );

    const numberInputs = getAllByTestId('numberInput');

    expect(numberInputs.length).toBe(13);
  });

  it('should change rows count if days count changes', () => {
    const { getAllByTestId } = render(<ChartForm onSubmit={jest.fn} />);

    const daysInput = getAllByTestId('numberInput')[0];
    fireEvent.change(daysInput, { target: { value: 5 } });

    const numberInputs = getAllByTestId('numberInput');

    expect(numberInputs.length).toBe(21);
  });

  it('should invoke onSubmit function when button clicked', () => {
    const onSubmit = jest.fn();
    const { getAllByTestId } = render(<ChartForm onSubmit={onSubmit} />);

    const submitButton = getAllByTestId('button')[0];
    fireEvent.click(submitButton);

    expect(onSubmit).toBeCalledTimes(1);
  });
});
