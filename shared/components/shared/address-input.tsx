'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="92171fda8d3a3f277961ed0098ccef2abcbe9fd7"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};