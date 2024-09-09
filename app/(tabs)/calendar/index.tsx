import { ScreenContainer } from '@/components/ScreenContainer';

import { useState } from 'react';
import { LocaleConfig } from 'react-native-calendars';
import { DateData } from 'react-native-calendars/src/types';

import { ptBR } from '@/utils/localeConfigCalendar';
import { FlatList, View } from 'react-native';
import { DayTitle, EmptyListText } from './styles';
import { Task } from '@/components/Task';
import { CustomCalendar } from '@/components/CustomCalendar';

LocaleConfig.locales['pt-br'] = ptBR;

LocaleConfig.defaultLocale = 'pt-br';

export default function TabTwoScreen() {
  const today = new Date();

  const [day, setDay] = useState<DateData>({
    dateString: today.toLocaleDateString().replace(/\//g, '-').split('-').reverse().join('-'),
    day: today.getDate(),
    month: today.getMonth(),
    timestamp: today.getTime(),
    year: today.getFullYear(),
  });

  return (
    <ScreenContainer>
      <CustomCalendar day={day} setDay={setDay} tasks={tasks} />
      <DayTitle>
        {ptBR.dayNames[new Date(day?.timestamp!).getUTCDay()!]} -{' '}
        {day?.day.toString().padStart(2, '0')} de{' '}
        {ptBR.monthNames[new Date(day?.timestamp!).getUTCMonth()!]} de {day?.year}
      </DayTitle>
      <FlatList
        data={tasks.filter((task) => task.date === day.dateString)}
        style={{ flexShrink: 0, marginBottom: 250 }}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ gap: 24 }}
        renderItem={({ item }) => <Task {...item} time={item.time || ''} showTime />}
        ListFooterComponent={() => <View style={{ height: 40 }}></View>}
        ListEmptyComponent={<EmptyListText>Nenhuma tarefa para este dia</EmptyListText>}
      />
    </ScreenContainer>
  );
}

const tasks = [
  {
    title: 'Fazer comida',
    date: '2024-09-09',
    time: '11:30',
    tag: 'Casa',
    description: 'Preparar macarrão à bolonhesa',
    done: false,
  },
  {
    title: 'Estudar JavaScript',
    date: '2024-09-08',
    time: '15:00',
    tag: 'Estudo',
    description: 'Revisar closures e promises',
    done: false,
  },
  {
    title: 'Estudar Redux',
    date: '2024-09-08',
    time: '19:00',
    tag: 'Estudo',
    description: 'Revisar closures e promises',
    done: false,
  },
  {
    title: 'Tomar Café',
    date: '2024-09-08',
    time: '18:00',
    tag: 'Estudo',
    description: 'Revisar closures e promises',
    done: false,
  },
  {
    title: 'Estudar API',
    date: '2024-09-08',
    time: '20:00',
    tag: 'Estudo',
    description: 'Revisar closures e promises',
    done: false,
  },
  {
    title: 'Ler livro',
    date: '2024-09-08',
    time: '21:30',
    tag: 'Estudo',
    description: 'Revisar closures e promises',
    done: false,
  },
  {
    title: 'Comprar mantimentos',
    date: '2024-09-10',
    time: '09:00',
    tag: 'Compras',
    description: 'Comprar arroz, feijão e frutas',
    done: true,
  },
  {
    title: 'Reunião com a equipe',
    date: '2024-09-26',
    time: '14:00',
    tag: 'Trabalho',
    description: 'Revisar o progresso do projeto',
    done: false,
  },
  {
    title: 'Exercícios físicos',
    date: '2024-09-08',
    tag: 'Saúde',
    description: 'Correr no parque',
    done: true,
  },
  {
    title: 'Estudar React Native',
    date: '2024-09-08',
    time: '15:00',
    tag: 'Estudo',
    description: 'Revisar hooks e context API',
    done: false,
  },
  {
    title: 'Comprar ração para o cachorro',
    date: '2024-09-10',
    time: '09:00',
    tag: 'Compras',
    description: 'Comprar ração e petiscos',
    done: true,
  },
  {
    title: 'Reunião com o cliente',
    date: '2024-10-03',
    time: '14:00',
    tag: 'Trabalho',
    description: 'Apresentar o protótipo do aplicativo',
    done: false,
  },
  {
    title: 'Alongamento',
    date: '2024-09-08',
    tag: 'Saúde',
    description: 'Alongar os músculos',
    done: true,
  },
  {
    title: 'Fazer café da manhã',
    date: '2024-09-09',
    time: '07:30',
    tag: 'Casa',
    description: 'Preparar café e pão com manteiga',
    done: false,
  },
];
