import { Input } from '@/components/Input';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Select } from '@/components/Select';
import { Task } from '@/components/Task';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function TabOneScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <ScreenContainer>
      <Input />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 32,
          alignItems: 'center',
          gap: 10,
        }}>
        <Select
          labelField="name"
          valueField="value"
          data={[
            { name: 'categoria 1', value: 'categoria 1' },
            { name: 'categoria 2', value: 'categoria 2' },
            { name: 'categoria 3', value: 'categoria 3' },
            { name: 'categoria 4', value: 'categoria 4' },
            { name: 'categoria 5', value: 'categoria 5' },
            { name: 'categoria 6', value: 'categoria 6' },
            { name: 'categoria 7', value: 'categoria 7' },
            { name: 'categoria 8', value: 'categoria 8' },
            { name: 'categoria 9', value: 'categoria 9' },
            { name: 'categoria 10', value: 'categoria 10' },
          ]}
          value={selectedCategory}
          onChange={(item) => setSelectedCategory(item.value)}
        />
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#176684',
            borderRadius: 10,
          }}>
          <MaterialCommunityIcons name="filter-variant" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Task title="Tarefa 1" date="2024-08-16" time="18:00" />
    </ScreenContainer>
  );
}
