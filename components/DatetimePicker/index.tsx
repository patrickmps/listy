import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Tag } from '../Tag';

type DatetimePickerProps = {
  mode: 'time' | 'date';
  handleData: (data: string) => void;
};

export function DatetimePicker({ mode, handleData }: DatetimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date: Date) => {
    const dataFormatted =
      mode === 'date'
        ? date.toLocaleDateString()
        : date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

    setSelectedDate(dataFormatted);
    handleData(dataFormatted);
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
          title={selectedDate ? selectedDate : mode === 'date' ? 'Sem data' : 'Sem horário'}
          iconName={mode === 'date' ? 'calendar-month' : 'clock-outline'}
          rotateIcon={false}
        />
        <DateTimePickerModal
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
