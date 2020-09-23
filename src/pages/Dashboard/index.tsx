import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar
} from './styles';

import logoImg from '../../assets/logo.svg';
import { FiPower, FiClock } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars3.githubusercontent.com/u/57121069?s=460&u=03ff0ab9bfa21400a455b270f39d30712e54a2a4&v=4"
              alt="avatar"
            />

            <div>
              <span>Bem-vindo,</span>
              <strong>Guilherme Bafica</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower />
            <Link to="/">Sair</Link>
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia {new Date().getDate()}</span>
            {/* <span>{new Date().toUTCString().split(`, ${new Date().getDate()}`)}</span> */}
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img 
                src="https://avatars3.githubusercontent.com/u/57121069?s=460&u=03ff0ab9bfa21400a455b270f39d30712e54a2a4&v=4" 
                alt="Cliente"
              />

              <strong>Guilherme Bafica</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  )
};

export default Dashboard;
