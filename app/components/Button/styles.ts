import styled from 'styled-components';

interface StyledButtonProps {
  $backgroundcolor: string;
}

export const StyledButton = styled.a<StyledButtonProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 100%;
  max-width: 480px;
  background-color: ${props => props.$backgroundcolor};
  border-radius: 10px;
  margin-bottom: 10px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const Name = styled.span`
  padding: 10px;
  color: white;
`;