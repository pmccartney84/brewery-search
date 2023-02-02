import React, { forwardRef, ReactElement } from 'react';
import classNames from 'classnames';
import { useForm } from '@teambit/base-react.forms.form';
import { getAccent, ColorAccentProps } from './color-accent';
import { Message } from './message';
import styles from './input-text.module.scss';

export type InputTextProps = {
  /**
   * An optional Icon element to be render at the end of the input, can be an Image or an Icon.
   */
  icon?: ReactElement;
  /**
   * Override input styles.
   */
  inputClass?: string;
  /**
   * Override message styles.
   */
  messageClass?: string;
  /**
   * Message text.
   */
  message?: string | null | undefined;
  /**
   * Active the label animation from "placeholder" to top position.
   */
  activeLabel?: boolean;
} & ColorAccentProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(function InputTextWithRef(
  {
    className,
    style,
    error,
    success,
    filled,
    icon,
    placeholder,
    inputClass,
    messageClass,
    message,
    activeLabel = true,
    ...rest
  }: InputTextProps,
  ref
) {
  const accent = getAccent({ error, success });
  const { onChange } = useForm();

  return (
    <>
      <div className={classNames(styles.container, icon && styles.inputTextWithIcon, className)} style={style}>
        <input
          ref={ref}
          className={classNames(styles.inputText, filled && styles.filled, accent, inputClass)}
          {...rest}
          placeholder={activeLabel ? ' ' : placeholder}
          onChange={onChange || rest.onChange}
        />
        {activeLabel && <label>{placeholder}</label>}
        {icon}
      </div>
      <Message message={message} className={messageClass} />
    </>
  );
});
