import React, { ReactNode } from 'react';

export type ParagraphProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return (
    <p>
      {children}
    </p>
  );
}
