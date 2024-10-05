import { DatetimePicker } from '@/components/DatetimePicker';
import { useTaskContext } from '@/contexts/TaskContext';
import { Formik } from 'formik';
import { FormEvent } from 'react';
import * as Yup from 'yup';
import { Btn, Container, Row, TextBtn } from './styles';

const validationSchema = Yup.object().shape({
  date: Yup.string(),
  time: Yup.string(),
  tag: Yup.string(),
  description: Yup.string(),
  // title: Yup.string().required('Campo obrigatório'),
});

export default function NewTask() {
  const { addTask } = useTaskContext();
  const initialValues = {
    date: '',
    time: '18:00',
    tag: '',
    description: '',
    title: '',
    done: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => addTask(values)}>
      {({ handleChange, handleSubmit, values }) => (
        <Container>
          <Row>
            <DatetimePicker mode="date" value={values.date} handleData={handleChange('date')} />
            <DatetimePicker mode="time" value={values.time} handleData={handleChange('time')} />
          </Row>

          <Btn onPress={(e) => handleSubmit(e as unknown as FormEvent<HTMLFormElement>)}>
            <TextBtn> Salvar tarefa</TextBtn>
          </Btn>
        </Container>
      )}
    </Formik>
  );
}
