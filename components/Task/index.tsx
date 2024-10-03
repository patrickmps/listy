import { useState } from 'react';
import { CheckBox } from '../CheckBox';
import { ContainerInfos, ContainerTask, Icon, Tag, TaskTitle, Time, Wrapper, WrapperTask } from './styles';
import { Pressable } from 'react-native';
import { ConfirmDialog } from '../ConfirmDialog';

type TaskProps = {
  title: string;
  date: string;
  time?: string;
  showTime?: boolean;
  done: boolean;
};

export const Task = ({ title, date, time, showTime = false, done }: TaskProps) => {
  const [checked, setChecked] = useState(done);
  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <Wrapper>
      <CheckBox
        checked={checked}
        onChange={() => setChecked(!checked)}
      />

      <WrapperTask>

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
          onAction={() => console.log('Excluir Tarefa')}
        />
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Icon name="trash-can-outline" />
        </Pressable>
      </WrapperTask>
    </Wrapper>
  );
};
