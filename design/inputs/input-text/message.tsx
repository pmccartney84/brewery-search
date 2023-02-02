import React from 'react';
import classnames from 'classnames';
import styles from './input-text.module.scss';

export type MessageProps = {
  message?: string | null | undefined;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Message({ message, className, ...rest }: MessageProps) {
  if (!message) return null;
  return (
    <div {...rest} className={classnames(styles.errorMessage, className)}>
      {message}
    </div>
  );
}
