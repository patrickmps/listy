import { Pressable } from 'react-native';
import { CheckBox } from '../CheckBox';
import { useState } from 'react';
import { Column, Row, Icon, Tag, TaskTitle, Time } from './styles';
import { ConfirmDialog } from '../ConfirmDialog';

type TaskProps = {
  title: string;
  date: string;
  time: string;
  showTime?: boolean;
};

export const Task = ({ title, date, time, showTime = false }: TaskProps) => {
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Row>
      <CheckBox onChange={() => setChecked(!checked)} checked={checked} />
      <Column>
        <TaskTitle checked={checked}>{title}</TaskTitle>
        <Row>
          {date &&
            new Date(date).setUTCHours(0, 0, 0, 0) === new Date().setUTCHours(0, 0, 0, 0) && (
              <Tag>hoje</Tag>
            )}
          {showTime && <Time>18:00</Time>}
        </Row>
      </Column>
      <ConfirmDialog
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        onAction={() => console.log('Excluir Tarefa')}
      />
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Icon name="trash-can-outline" />
      </Pressable>
    </Row>
  );
};
