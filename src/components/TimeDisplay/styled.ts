import styled, { StyledComponent } from 'styled-components';

const Main: StyledComponent<'main', any | never> = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const Container: StyledComponent<'div', any | never> = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const ButtonsWrapper: StyledComponent<'div', any | never> = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Button: StyledComponent<'button', any | never> = styled.button`
  cursor: pointer;
  border: none;
  margin: 20px 10px 0px;
  padding: 0px 12px;
  border-radius: 4px;
  box-shadow: rgb(235 235 235) 0px 6px 0px;
  font-family: ArialRounded;
  font-size: 22px;
  height: 55px;
  color: #5a58ea;
  font-weight: bold;
  width: 100px;
  background-color: white;
  transition: color 0.5s ease-in-out 0s;

  &:hover {
    box-shadow: none;
    transition: 0.1s;
  }
`;

export { Button, Container, ButtonsWrapper };
export default Main;
