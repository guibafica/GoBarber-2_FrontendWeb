import React from 'react';
import { FiAlertOctagon, FiXOctagon } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => (
  <Container>
    <Toast hasDescription>
      <FiAlertOctagon size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
        <p>Não foi possível fazer login na aplicação</p>
      </div>

      <button type="button">
        <FiXOctagon size={18} />
      </button>
    </Toast>

    <Toast type="success" hasDescription={false}>
      <FiAlertOctagon size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
      </div>

      <button type="button">
        <FiXOctagon size={18} />
      </button>
    </Toast>

    <Toast type="error" hasDescription>
      <FiAlertOctagon size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
        <p>Não foi possível fazer login na aplicação</p>
      </div>

      <button type="button">
        <FiXOctagon size={18} />
      </button>
    </Toast>
  </Container>
);

export default ToastContainer;
