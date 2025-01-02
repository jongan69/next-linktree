"use client"
import React from 'react';
import { StyledButton, Name } from './styles';

export default function Button({ icon, name, backgroundcolor, link }: { icon: React.ReactNode, name: string, backgroundcolor: string, link: string }) {
  return (
    <StyledButton $backgroundcolor={backgroundcolor ?? 'black'} href={link} target='_blank'>
      <div className="rainbowIcon" style={{ padding: 10 }}>{icon}</div>     
      <Name>{name}</Name>
    </StyledButton>
  );
}
