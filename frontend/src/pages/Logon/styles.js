import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  a {
    display: flex;

    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    :hover {
      opacity: 0.8;
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const FormInput = styled(Form)`
  margin-top: 100px;
`;
