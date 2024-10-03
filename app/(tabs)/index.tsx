import { Filter } from '@/components/Filter';
import { Input } from '@/components/Input';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Select } from '@/components/Select';
import { Task } from '@/components/Task';
import { tasks } from '@/utils/data';
import { useState } from 'react';
import { View } from 'react-native';

export default function TabOneScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  const handleFilterOption = (option: string) => {
    let newTasks = [...tasks];

    if (option === 'Ordem crescente') {
      newTasks = newTasks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === 'Ordem decrescente') {
      newTasks = newTasks.sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === 'Em aberto') {
      newTasks = newTasks.filter((task) => !task.done);
    } else if (option === 'Concluídas') {
      newTasks = newTasks.filter((task) => task.done);
    }

    setFilteredTasks(newTasks);
  };

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
        <Filter onFilter={handleFilterOption} />
      </View>
      <Task title="Tarefa 1" date="2024-08-16" time="18:00" done />
    </ScreenContainer>
  );
}
