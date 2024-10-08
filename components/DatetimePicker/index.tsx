import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Tag } from '../Tag';

type DatetimePickerProps = {
  mode: 'time' | 'date';
  handleData: (data: string) => void;
  value?: string;
};

export function DatetimePicker({ mode, handleData, value }: DatetimePickerProps) {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value
      ? mode === 'date'
        ? new Date(`${value} 00:00`)
        : new Date(`2024-10-02 ${value}`)
      : undefined,
  );

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const dateToString = (date: Date, mode: 'time' | 'date') => {
    if (mode === 'date') return date.toLocaleDateString('pt-BR');

    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = date.toLocaleDateString().split('/').reverse().join('-');
    const formattedTime = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    setSelectedDate(date);
    handleData(mode === 'date' ? formattedDate : formattedTime);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Tag
          onPress={showDatePicker}
          title={
            selectedDate
              ? dateToString(selectedDate, mode)
              : mode === 'date'
                ? value?.split('-').reverse().join('/') || 'Sem data'
                : value || 'Sem horário'
          }
          iconName={mode === 'date' ? 'calendar-month' : 'clock-outline'}
          rotateIcon={false}
        />
        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode={mode}
          is24Hour
          display="inline"
          locale="pt_BR"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </SafeAreaView>
  );
}
