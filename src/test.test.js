import { describe, expect, it, vi } from 'vitest';

import { loopCalculator } from './index';

describe('loopCalculator', () => {
  const mock = vi.fn();
  // eslint-disable-next-line no-undef
  global.prompt = mock;

  it('.getInput()', () => {
    mock
      .mockReturnValueOnce('1')
      .mockReturnValueOnce('2')
      .mockReturnValueOnce('3')
      .mockReturnValueOnce('4')
      .mockReturnValueOnce('incorrect')
      .mockReturnValueOnce('stop');
    loopCalculator.getInput();
    expect(loopCalculator.getSum()).toBe(10);
    expect(loopCalculator.getMultiplication()).toBe(24);
    loopCalculator.clearData();
    expect(loopCalculator.getSum()).toBe(0);

    mock
      .mockReturnValueOnce('1')
      .mockReturnValueOnce('2')
      .mockReturnValueOnce('3')
      .mockReturnValueOnce('4')
      .mockReturnValueOnce('incorrect')
      .mockReturnValueOnce('stop');
    loopCalculator.getInput();
    expect(loopCalculator.getMin()).toBe(1);
    expect(loopCalculator.getMax()).toBe(4);
  });
});
