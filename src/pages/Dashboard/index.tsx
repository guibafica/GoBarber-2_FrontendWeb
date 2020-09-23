import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';

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
    </Container>
  )
};

export default Dashboard;
