import { TaskProps } from '@/@types/task';
import { useTaskContext } from '@/contexts/TaskContext';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { CheckBox } from '../CheckBox';
import { ConfirmDialog } from '../ConfirmDialog';
import {
  ContainerInfos,
  ContainerTask,
  Icon,
  Tag,
  TaskTitle,
  Time,
  Wrapper,
  WrapperTask,
} from './styles';

type TaskComponentProps = TaskProps & {
  showTime?: boolean;
};

export const Task = ({ id, title, date, time, showTime = false, done }: TaskComponentProps) => {
  const { deleteTask, updateTask } = useTaskContext();
  const [checked, setChecked] = useState(done);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    deleteTask(id);
    setModalVisible(false);
  };

  const handleUpdate = () => {
    setChecked(!checked);
    updateTask(id, { done: !checked });
  };

  return (
    <Wrapper>
      <CheckBox checked={checked} onChange={handleUpdate} />

      <WrapperTask
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : { opacity: 1 })}
        onPress={() => router.push(`/details?taskId=${id}`)}>
        <ContainerTask>
          <TaskTitle checked={checked}>{title}</TaskTitle>

          <ContainerInfos>
            {date &&
              new Date(date).setUTCHours(0, 0, 0, 0) === new Date().setUTCHours(0, 0, 0, 0) && (
                <Tag>hoje</Tag>
              )}
            {showTime && <Time style={date ? { marginRight: 8 } : { marginRight: 0 }}>{time}</Time>}
          </ContainerInfos>
        </ContainerTask>

        <ConfirmDialog
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
          onAction={handleDelete}
        />
        <Pressable
          style={({ pressed }) => (pressed ? { opacity: 0.5 } : { opacity: 1 })}
          onPress={() => setModalVisible(!modalVisible)}>
          <Icon name="trash-can-outline" />
        </Pressable>
      </WrapperTask>
    </Wrapper>
  );
};
