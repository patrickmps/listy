import { ScreenContainer } from '@/components/ScreenContainer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { DateData, Theme } from 'react-native-calendars/src/types';
import styled, { useTheme } from 'styled-components/native';

import { ptBR } from '@/utils/localeConfigCalendar';

LocaleConfig.locales['pt-br'] = ptBR;

LocaleConfig.defaultLocale = 'pt-br';

export default function TabTwoScreen() {
  const theme = useTheme();
  const [day, setDay] = useState<DateData>();

  const calendarTheme: Theme = {
    calendarBackground: 'transparent',
    dayTextColor: theme.onPrimaryFixedVariant,
    textMonthFontSize: 14,
    textMonthFontFamily: 'Montserrat-SemiBold',
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
    </ScreenContainer>
  );
}

const CustomCalendar = styled(Calendar)`
  font-family: 'Montserrat-Regular';
  width: 100%;
  margin-top: 60px;
  background-color: transparent;
  padding: 0;
`;
