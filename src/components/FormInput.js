import styled from 'styled-components';
import { PRIMARY_FONT } from '../styles/fonts';

const FormInput = styled.input`
  font-family: ${PRIMARY_FONT};
  font-size: 14px;
  background-color: rgba(0,0,0,0.05);
  border-radius: 10px;
  border: none;
  outline: none;
  margin-top: 10px;
  padding: 10px 20px 10px 20px;
  width: calc(100% - 40px);
  font-weight: bold;
`;

export default FormInput;
