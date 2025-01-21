import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

//import axios from '../../services/axios';

export default function Login() {
//  React.useEffect(() => {
//    console.log('Oi');
//  }, []);

  return (
    <Container>
      <Title>
        Login<small>Testando</small>
      </Title>
      <Paragrafo>Loren lnerjhgmsççgjj</Paragrafo>
      <button type='button'>Enviar</button>
    </Container>
  );
}
