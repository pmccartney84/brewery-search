import React from 'react';
import { render } from '@testing-library/react';
import {
  BasicInputText,
  ErrorInputText,
  ErrorInputTextWithMessage,
  SuccessInputText,
  DisabledInputText,
  InputTextWithImage,
} from './input-text.composition';

describe('InputText component', () => {
  it('should render input correctly', () => {
    const { getByTestId } = render(<BasicInputText />);
    const rendered = getByTestId('test-input');

    expect(rendered).toBeInTheDocument();
    expect(rendered.tagName).toBe('INPUT');
  });

  it('should not have error or success styles', () => {
    const { getByTestId } = render(<BasicInputText />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('success')).toBeFalsy();
    expect(rendered.classList.contains('error')).toBeFalsy();
  });

  it('should have error class', () => {
    const { getByTestId } = render(<ErrorInputText />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('error')).toBeTruthy();
  });

  it('should have success class', () => {
    const { getByTestId } = render(<SuccessInputText />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('success')).toBeTruthy();
  });

  it('should have disabled attribute', () => {
    const { getByTestId } = render(<DisabledInputText />);
    const rendered = getByTestId('test-input');

    expect(rendered.getAttribute('disabled')).toBe('');
  });

  it('should display error message', () => {
    const { container } = render(<ErrorInputTextWithMessage />);

    const rendered = container.getElementsByTagName('div')[1];
    expect(rendered.textContent?.includes('error to be displayed under the input'));
  });
});

describe('InputText component with icon', () => {
  it('should have img tag', () => {
    const { container } = render(<InputTextWithImage />);

    expect(container.querySelector('img')).toBeInTheDocument();
  });
});
