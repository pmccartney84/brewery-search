import React from 'react';
import { darkMode } from '@teambit/base-ui.theme.dark-theme';
import { Icon } from '@teambit/design.elements.icon';
import { InputText } from './input-text';

export const BasicInputText = () => <InputText placeholder="enter text..." data-testid="test-input" />;

export const InputTextWithoutLabel = () => (
  <InputText placeholder="enter text..." activeLabel={false} data-testid="test-input" />
);

export const FilledInputText = () => <InputText value="some text" filled data-testid="test-input" />;

export const ErrorInputText = () => <InputText placeholder="placeholder" error data-testid="test-input" />;

export const ErrorInputTextWithMessage = () => (
  <InputText placeholder="placeholder" error data-testid="test-input" message="error to be displayed under the input" />
);

export const SuccessInputText = () => <InputText placeholder="placeholder" success data-testid="test-input" />;

export const DisabledInputText = () => {
  return <InputText placeholder="placeholder..." disabled data-testid="test-input" />;
};

export const SmallInputText = () => (
  <InputText style={{ fontSize: 12 }} placeholder="enter text..." data-testid="test-input" />
);

export const BigInputText = () => (
  <InputText style={{ fontSize: 24 }} placeholder="enter text..." data-testid="test-input" />
);

export const SmallInputTextWithIcon = () => (
  <InputText
    style={{ fontSize: 12 }}
    placeholder="enter text..."
    data-testid="test-input"
    icon={<Icon of="discovery" style={{ cursor: 'pointer' }} onClick={() => alert('on icon click')} />}
  />
);

export const BigInputTextWithIcon = () => (
  <InputText
    style={{ fontSize: 24 }}
    placeholder="enter text..."
    data-testid="test-input"
    icon={<Icon of="discovery" style={{ cursor: 'pointer' }} onClick={() => alert('on icon click')} />}
  />
);

export const InputTextDarkMode = () => (
  <div className={darkMode} style={{ padding: '20px 40px', backgroundColor: '#0c0c0c' }}>
    <InputText placeholder="enter text..." data-testid="test-input" />
  </div>
);

export const InputTextWithIcon = () => (
  <InputText
    placeholder="search..."
    icon={<Icon of="discovery" style={{ cursor: 'pointer' }} onClick={() => alert('on icon click')} />}
  />
);

export const InputTextWithImage = () => (
  <InputText
    placeholder="search..."
    icon={
      <img
        src="https://static.bit.dev/bit-icons/filter.svg"
        style={{ cursor: 'pointer' }}
        onClick={() => alert('on icon click')}
      />
    }
  />
);
