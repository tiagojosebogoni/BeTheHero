import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  background: #e02441;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(80%);
  }
`;
