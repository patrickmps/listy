import { FormEvent } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Btn, Container, Row, TextBtn, TextArea, TextTitle } from './styles';
import { DatetimePicker } from '@/components/DatetimePicker';
import { Stack, useLocalSearchParams } from 'expo-router';
const validationSchema = Yup.object().shape({
  date: Yup.string(),
  time: Yup.string(),
  tag: Yup.string(),
  description: Yup.string(),
  title: Yup.string().required('Campo obrigatório'),
});

export default function NewTask() {
  const params = useLocalSearchParams();

  const initialValues = {
    date: '',
    time: '',
    tag: '',
    description: '',
    title: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}>
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
