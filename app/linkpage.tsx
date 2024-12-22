"use client"
import React from 'react';
import LinkTree from './components/LinkTree';
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#007AFF',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LinkTree />
      <Analytics/>
    </ThemeProvider>
  );
}