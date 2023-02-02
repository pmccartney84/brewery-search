import React, { ReactNode } from 'react';
import { Image } from '@my-scope/pmccartney.brewery.ui.image';
import { Heading } from '@teambit/base-ui.text.heading';
export type HeadProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Head({ children }: HeadProps) {
  return (
    <div>
      <Heading>Find Your Local Brewery<Image src="https://img.icons8.com/officel/512/bavarian-beer-mug.png" width='50px' height='50px'/></Heading>
    </div>
  );
}
