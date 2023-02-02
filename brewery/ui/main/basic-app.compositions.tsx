import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { BasicAppApp } from './app';

export const BasicAppBasic = () => {
  return (
    <MemoryRouter>
      <BasicAppApp />
    </MemoryRouter>
  );
};
