import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px auto;
  max-width: var(--max-width);
  width: 90%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SectionHeader = styled.h3`
  margin-bottom: 16px;
  font-size: 1.2em;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
`;
