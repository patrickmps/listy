import { Tag } from '@/components/Tag';
import { Row, Container, ContainerTaskDetail, TaskDetail } from './styles';
import { FloatingButton } from '@/components/FloatingButton';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTaskContext } from '@/contexts/TaskContext';
import { Task } from '@/@types/task';
import { Stack } from 'expo-router';

export default function Details() {
  const { taskId } = useLocalSearchParams();
  const { taskById } = useTaskContext();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (taskId) {
      const foundTask = taskById(taskId as string);
      setTask(foundTask || null);
    }
  }, [taskId, taskById]);

  if (!task) {
    return null;
  }

  return (
    <Container>
      <Stack.Screen options={{ title: task.title }} />
      <Row>
        <Tag
          iconName="tag-outline"
          title={task.tag || 'Sem categoria'}
          isDisable={true}
          rotateIcon={true}
        />
        <Tag
          iconName="calendar-month"
          title={task.date || 'Sem data'}
          isDisable={true}
          rotateIcon={false}
        />
        <Tag
          iconName="clock-outline"
          title={task.time || 'Sem horário'}
          isDisable={true}
          rotateIcon={false}
        />
      </Row>
      <ContainerTaskDetail>
        <TaskDetail>{task.description || 'Sem descrição'}</TaskDetail>
      </ContainerTaskDetail>
      <FloatingButton />
    </Container>
  );
}
