import { ScreenContainer } from '@/components/ScreenContainer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { DateData, Theme } from 'react-native-calendars/src/types';
import styled, { useTheme } from 'styled-components/native';

import { ptBR } from '@/utils/localeConfigCalendar';
import { Text } from 'react-native';

LocaleConfig.locales['pt-br'] = ptBR;

LocaleConfig.defaultLocale = 'pt-br';

export default function TabTwoScreen() {
  const theme = useTheme();

  const [day, setDay] = useState<DateData>({
    dateString: new Date().toLocaleDateString().replace(/\//g, '-').split('-').reverse().join('-'),
    day: new Date().getDate(),
    month: new Date().getMonth(),
    timestamp: new Date().getTime(),
    year: new Date().getFullYear(),
  });

  const calendarTheme: Theme = {
    calendarBackground: 'transparent',
    dayTextColor: theme.onPrimaryFixedVariant,
    textMonthFontFamily: 'Montserrat-SemiBold',
    textDayHeaderFontSize: 12,
    monthTextColor: theme.onBackground,
    arrowColor: theme.onBackground,
    todayTextColor: theme.secondary,
    selectedDayBackgroundColor: theme.secondary,
    selectedDayTextColor: theme.onSecondary,
    arrowStyle: {
      margin: 0,
      padding: 0,
    },
  };

  return (
    <ScreenContainer>
      <CustomCalendar
        theme={calendarTheme}
        renderArrow={(direction: 'right' | 'left') => {
          return (
            <MaterialCommunityIcons
              name={`chevron-${direction}`}
              size={24}
              color={theme.onBackground}
            />
          );
        }}
        onDayPress={setDay}
        markedDates={
          day && {
            [day.dateString]: {
              selected: true,
            },
          }
        }
        hideExtraDays
      />
      <Text style={{ color: theme.onBackground }}>
        {ptBR.dayNames[new Date(day?.timestamp!).getUTCDay()!]} -{' '}
        {day?.day.toString().padStart(2, '0')} de{' '}
        {ptBR.monthNames[new Date(day?.timestamp!).getUTCMonth()!]} de {day?.year}
      </Text>
    </ScreenContainer>
  );
}

const CustomCalendar = styled(Calendar)`
  font-family: 'Montserrat-Regular';
  width: 100%;
  background-color: transparent;
  padding: 0;
`;
