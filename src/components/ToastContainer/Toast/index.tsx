import React, { useEffect } from 'react';
import {
  FiAlertOctagon,
  FiCheckSquare,
  FiInfo,
  FiXOctagon,
} from 'react-icons/fi';

import { setTimeout } from 'timers';
import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertOctagon size={24} />,
  success: <FiCheckSquare size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 4000);

    // Se retorna uma função dentro do useEffect, esta função é automaticamente
    // executado assim que o componente deixar de existir.
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXOctagon size={18} />
      </button>
    </Container>
  );
};

export default Toast;
