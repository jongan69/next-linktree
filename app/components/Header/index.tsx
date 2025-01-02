import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  width: 100%;
`;

export const Picture = styled.div<{ background: string }>`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  height: 140px;
  width: 140px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Subtitle = styled.p`
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0;
  white-space: pre-line;
`;


export default function Header({ picture, title, subtitle }: { picture: string, title: string, subtitle: string }) {
  return (
    <Container>
      <Picture background={picture} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
