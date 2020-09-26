import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
  Section,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
    console.log(month);
  }, []);

  const todayDateAsText = useMemo(
    () =>
      format(new Date(), "'Dia' dd 'de' MMMM", {
        locale: ptBR,
      }),
    [],
  );

  const weekDateAsText = useMemo(
    () =>
      format(new Date(), 'cccc', {
        locale: ptBR,
      }),
    [],
  );

  // Executar sempre que mudar o mês
  /*
    useEffect(() => {
    api.get('', {
      params: {

      }
    }).then(response => {
      set...
    })
  }, [currentMonth]);
  */

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
              <Link to="/profile">
                <strong>Guilherme Bafica</strong>
              </Link>
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
            <span>{todayDateAsText}</span>
            <span>{weekDateAsText}</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt="Cliente"
              />

              <strong>John Doe</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                10:30
              </span>

              <div>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Cliente"
                />

                <strong>Cho Chang</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                11:00
              </span>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU"
                  alt="Cliente"
                />

                <strong>David Dobrik</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                14:00
              </span>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwZgmvIfYnYzEunmqeRX8Q0p2F1FTmBKOi1w&usqp=CAU"
                  alt="Cliente"
                />

                <strong>Rebbeca Fonseca</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
