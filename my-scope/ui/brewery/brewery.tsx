import React, { ReactNode } from 'react';

export type BreweryProps = {
  breweryName?: string;
  breweryStreetAddress?: string;
  breweryState?: string;
  breweryPostalCode?: string;
  breweryCity?: string;
};

export function Brewery(props: BreweryProps) {
  return (
    <>
    <tr>
      <td>{props.breweryName}</td>
      <td>{props.breweryStreetAddress}</td>
      <td>{props.breweryCity}</td>
      <td>{props.breweryState}</td>
      <td>{props.breweryPostalCode}</td>
    </tr>
    </>
)}
