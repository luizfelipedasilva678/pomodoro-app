import styled from 'styled-components';

const Button = styled.button`
  border: none;
  margin: 0px;
  border-radius: 4px;
  font-size: 16px;
  background: transparent;
  padding: 2px 12px;
  height: 28px;
  cursor: pointer;
  box-shadow: none;
  color: white;
  opacity: 1;
  margin-right: 10px;
  font-weight: bold;
  font-family: inherit;

  &:hover {
    background: none rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 640px) {
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export default Button;
