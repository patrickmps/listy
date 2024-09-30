import { FormEvent } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Btn, Container, Row, TextBtn } from './styles';
import { DatetimePicker } from '@/components/DatetimePicker';

const validationSchema = Yup.object().shape({
  date: Yup.string(),
  time: Yup.string(),
  tag: Yup.string(),
  description: Yup.string(),
  // title: Yup.string().required('Campo obrigatório'),
});

export default function NewTask() {
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
      {({ handleChange, handleSubmit, values }) => (
        <Container>
          <Row>
            <DatetimePicker mode="date" handleData={handleChange('date')} />
            <DatetimePicker mode="time" handleData={handleChange('time')} />
          </Row>

          <Btn onPress={(e) => handleSubmit(e as unknown as FormEvent<HTMLFormElement>)}>
            <TextBtn> Salvar tarefa</TextBtn>
          </Btn>
        </Container>
      )}
    </Formik>
  );
}
