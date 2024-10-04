import { DatetimePicker } from '@/components/DatetimePicker';
import { useTaskContext } from '@/contexts/TaskContext';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Formik } from 'formik';
import { FormEvent } from 'react';
import * as Yup from 'yup';
import { Btn, Container, Row, TextArea, TextBtn, TextTitle } from './styles';
const validationSchema = Yup.object().shape({
  date: Yup.string(),
  time: Yup.string(),
  tag: Yup.string(),
  description: Yup.string(),
  title: Yup.string().required('Campo obrigatório'),
});

export default function NewTask() {
  const { addTask } = useTaskContext();
  const params = useLocalSearchParams();

  const initialValues = {
    date: '',
    time: '',
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
      {({ handleChange, handleSubmit, values, handleBlur }) => (
        <Container>
          <Stack.Screen options={{ title: (params.name as string) || 'Nova Tarefa' }} />
          <TextTitle
            value={values.title}
            onChangeText={handleChange('title')}
            placeholder="Título da tarefa"
            onBlur={handleBlur('title')}
          />

          <Row>
            <DatetimePicker mode="date" handleData={handleChange('date')} />
            <DatetimePicker mode="time" handleData={handleChange('time')} />
          </Row>
          <TextArea
            value={values.description}
            onChangeText={handleChange('description')}
            placeholder="Descrição da tarefa"
            onBlur={handleBlur('description')}
          />
          <Btn onPress={(e) => handleSubmit(e as unknown as FormEvent<HTMLFormElement>)}>
            <TextBtn> Salvar tarefa</TextBtn>
          </Btn>
        </Container>
      )}
    </Formik>
  );
}
