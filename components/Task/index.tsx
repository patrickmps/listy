import { useState } from 'react';
import { CheckBox } from '../CheckBox';
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
import { Pressable } from 'react-native';
import { ConfirmDialog } from '../ConfirmDialog';
import { router } from 'expo-router';
import { useTaskContext } from '@/contexts/TaskContext';

type TaskProps = {
  id: string;
  title: string;
  date: string;
  time?: string;
  showTime?: boolean;
  done: boolean;
};

export const Task = ({ id, title, date, time, showTime = false, done }: TaskProps) => {
  const { deleteTask } = useTaskContext();
  const [checked, setChecked] = useState(done);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    deleteTask(id);
    setModalVisible(false);
  };

  return (
    <Wrapper>
      <CheckBox checked={checked} onChange={() => setChecked(!checked)} />

      <WrapperTask onPress={() => router.push(`/details?taskId=${id}`)}>
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
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Icon name="trash-can-outline" />
        </Pressable>
      </WrapperTask>
    </Wrapper>
  );
};
