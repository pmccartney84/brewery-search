import React, { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  label: string;
};

export function Button(props: ButtonProps) {
  return (
    <>
      <button type="submit" style={{padding: "10px", margin: "10px"}} >{props.label}</button>
    </>
  );
}
