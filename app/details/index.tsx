import { TaskProps } from '@/@types/task';
import { FloatingButton } from '@/components/FloatingButton';
import { Tag } from '@/components/Tag';
import { useTaskContext } from '@/hooks/useTaskContext';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Container, ContainerTaskDetail, Row, TaskDetail } from './styles';

export default function Details() {
  const { taskId } = useLocalSearchParams();
  const { taskById } = useTaskContext();
  const [task, setTask] = useState<TaskProps | null>(null);

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
          title={task.category || 'Sem categoria'}
          isDisable={true}
          rotateIcon={true}
        />
        <Tag
          iconName="calendar-month"
          title={task.date.split('-').reverse().join('/') || 'Sem data'}
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
