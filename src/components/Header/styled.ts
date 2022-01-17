import styled, { StyledComponent } from 'styled-components';

const HeaderContainer: StyledComponent<'header', any | never> = styled.header`
  padding: 20px;
  display: flex;
  font-size: 3em;
  align-items: center;
  justify-content: center;
  color: #fff;
  letter-spacing: 3px;
  font-weight: bold;
`;

export default HeaderContainer;
