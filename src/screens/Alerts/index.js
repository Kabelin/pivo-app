import React from 'react';
import {Background} from '../../styles';
import {
  Container,
  Title,
  AlertsContainer,
  AlertCell,
  Info,
  AlertTitle,
  AlertDetail,
  AlertDate,
} from './styles';

const formatDate = (date) => {
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth()}`.slice(-2);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const formatHour = (date) => {
  const hour = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hour}:${minutes}`;
};

const data = [
  {
    id: 1,
    title: 'Combustível abaixo de 30%!',
    details: `Último abastecimento em ${formatDate(
      new Date('2020-04-21T01:00:00'),
    )}. Reabasteça novamente o quanto antes possível!`,
    date: `${formatDate(new Date('2020-04-21T01:00:00'))}, ${formatHour(
      new Date('2020-04-21T01:00:00'),
    )}`,
  },
  {
    id: 2,
    title: 'Cíclo de irrigação finalizado!',
    details: `Cíclo iniciado em "data/horário" finalizado às "data/horário" com sucesso!`,
    date: `${formatDate(new Date('2020-04-21T01:00:00'))}, ${formatHour(
      new Date('2020-04-21T01:00:00'),
    )}`,
  },
  {
    id: 3,
    title: 'Cíclo de irrigação interrompido!',
    details: `Mangueira do setor X com defeito. Faça a manutenção e tente novamente mais tarde.`,
    date: `${formatDate(new Date('2020-04-20T12:00:00'))}, ${formatHour(
      new Date('2020-04-20T12:00:00'),
    )}`,
  },
  {
    id: 4,
    title: 'Cíclo de irrigação não inicializado!',
    details: `Nível de combustível atual muito baixo. Reabasteça e tente novamente mais tarde.`,
    date: `${formatDate(new Date('2020-04-20T06:00:00'))}, ${formatHour(
      new Date('2020-04-20T01:00:00'),
    )}`,
  },
];

const Alerts = () => {
  return (
    <Background>
      <Container>
        <Title>Últimos alertas</Title>
        <AlertsContainer
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <AlertCell elevation={3}>
              <Info>
                <AlertTitle>{item.title}</AlertTitle>
              </Info>
              <Info>
                <AlertDetail>{item.details}</AlertDetail>
              </Info>
              <Info>
                <AlertDate>{item.date}</AlertDate>
              </Info>
            </AlertCell>
          )}
        />
      </Container>
    </Background>
  );
};

export default Alerts;
