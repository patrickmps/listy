import { useTheme } from 'styled-components/native';
import { StyledCalendar } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DateData, Theme } from 'react-native-calendars/src/types';
import { Task } from '@/@types/task';

type CustomCalendarProps = {
  day: DateData;
  setDay: (day: DateData) => void;
  tasks: Task[];
};

export const CustomCalendar = ({ day, setDay, tasks }: CustomCalendarProps) => {
  const theme = useTheme();
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
    <StyledCalendar
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
          ...tasks.reduce(
            (acc, task) => {
              acc[task.date] = {
                selected: task.date === day.dateString,
                marked: true,
                dotColor: task.date === day.dateString ? theme.onSecondary : theme.secondary,
              };
              return acc;
            },
            {} as Record<string, { selected: boolean; marked: boolean; dotColor: string }>,
          ),
        }
      }
      hideExtraDays
    />
  );
};
