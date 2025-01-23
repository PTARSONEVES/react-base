import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
  }

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/users');
      const { data } = response;
      console.log(data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Title>
        Login<small>Testando</small>
      </Title>
      <Paragrafo>Loren lnerjhgmsççgjj</Paragrafo>
      <button type='button' onClick={handleClick}>Enviar</button>
    </Container>
  );
}
