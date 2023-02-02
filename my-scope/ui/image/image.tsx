import React, { ReactNode } from 'react';

export type ImageProps = {
src: string;
alt?: string;
width?: string;
height?: string;

};

export function Image(props:ImageProps) {
  return (
    <>
     <img src={props.src} alt={props.alt} width={props.width} height={props.height}/>
    </>
  );
}
