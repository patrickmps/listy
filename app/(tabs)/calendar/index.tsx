import { ScreenContainer } from '@/components/ScreenContainer';

import { useState } from 'react';
import { LocaleConfig } from 'react-native-calendars';
import { DateData } from 'react-native-calendars/src/types';

import { ptBR } from '@/utils/localeConfigCalendar';
import { FlatList, View } from 'react-native';
import { DayTitle, EmptyListText } from './styles';
import { Task } from '@/components/Task';
import { CustomCalendar } from '@/components/CustomCalendar';
import { tasks } from '@/utils/data';

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
