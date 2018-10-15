import styled from 'styled-components';
import { PRIMARY_FONT } from '../styles/fonts';
import { PRIMARY_COLOR } from '../styles/colours';

const Button = styled.button`
  font-family: ${PRIMARY_FONT};
  color: white;
  background-color: ${PRIMARY_COLOR};
  border: none;
  padding: 10px;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
  box-shadow: rgba(0,0,0,0.1) 3px 3px 10px;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
`;

export default Button;
