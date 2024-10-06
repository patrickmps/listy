import { TaskProps } from '@/@types/task';
import { Filter } from '@/components/Filter';
import { Input } from '@/components/Input';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Select } from '@/components/Select';
import { Task } from '@/components/Task';
import { useTaskContext } from '@/hooks/useTaskContext';
import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';

export default function TabOneScreen() {
  const { tasks, getCategories } = useTaskContext();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>([]);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setFilteredTasks(tasks);
    if (selectedCategory && selectedCategory !== 'todas') {
      setFilteredTasks(tasks.filter((task) => task.category === selectedCategory));
    }
    setCategories(getCategories());
  }, [getCategories, tasks, selectedCategory]);

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
    } else {
      newTasks = tasks;
    }

    if (selectedCategory && selectedCategory !== 'todas') {
      newTasks = newTasks.filter((task) => task.category === selectedCategory);
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
          placeholder="Selecionar"
          data={[
            ...categories.map((category) => ({ name: category, value: category })),
            { name: 'Todas as tarefas', value: 'todas' },
          ]}
          value={selectedCategory}
          onChange={(item) => setSelectedCategory(item.value)}
        />
        <Filter onFilter={handleFilterOption} />
      </View>

      <FlatList
        data={filteredTasks}
        style={{ flexShrink: 0 }}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ gap: 5 }}
        ListFooterComponent={() => <View style={{ height: 40 }}></View>}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            title={item.title}
            date={item.date.split('-').reverse().join('/')}
            time={item.time}
            done={item.done}
            showTime={true}
          />
        )}
        ListEmptyComponent={<EmptyListText>Nenhuma tarefa criada</EmptyListText>}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
}

const EmptyListText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  color: ${({ theme }) => theme.onBackground};
  margin: 20px 0;
`;
