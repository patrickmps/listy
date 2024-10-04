import { DatetimePicker } from '@/components/DatetimePicker';
import { Select } from '@/components/Select';
import { useTaskContext } from '@/contexts/TaskContext';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Formik } from 'formik';
import { FormEvent, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Btn, Container, ErrorMessage, Row, TextArea, TextBtn, TextTitle } from './styles';

const validationSchema = Yup.object().shape({
  date: Yup.string(),
  time: Yup.string(),
  category: Yup.string(),
  description: Yup.string(),
  title: Yup.string().required('Campo obrigatório'),
});

export default function NewTask() {
  const { addTask, updateTask, taskById } = useTaskContext();
  const params = useLocalSearchParams();
  const taskId = params.taskId as string;

  const [initialValues, setInitialValues] = useState({
    date: '',
    time: '',
    category: '',
    description: '',
    title: '',
    done: false,
  });

  useEffect(() => {
    if (taskId) {
      const task = taskById(taskId);
      if (task) {
        setInitialValues({
          date: task.date || '',
          time: task.time || '',
          category: task.category || '',
          description: task.description || '',
          title: task.title || '',
          done: task.done || false,
        });
      }
    }
  }, [taskId, taskById]);

  const options = [
    { name: 'Estudos', value: 'Estudos' },
    { name: 'Trabalho', value: 'Trabalho' },
    { name: 'Compromissos', value: 'Compromissos' },
    { name: 'Mercado', value: 'Mercado' },
    { name: 'Feira', value: 'Feira' },
  ];

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (taskId) {
          updateTask(taskId, values);
        } else {
          addTask(values);
        }
        router.navigate('/(tabs)');
      }}>
      {({ handleChange, handleSubmit, handleBlur, values, errors, setFieldValue }) => (
        <Container>
          <Stack.Screen options={{ title: (params.name as string) || 'Tarefa' }} />
          <TextTitle
            value={values.title}
            onChangeText={handleChange('title')}
            placeholder="Título da tarefa"
            onBlur={handleBlur('title')}
            $error={!!errors.title}
          />
          {errors.title ? <ErrorMessage>{errors.title}</ErrorMessage> : null}
          <Row>
            <DatetimePicker mode="date" handleData={handleChange('date')} />
            <DatetimePicker mode="time" handleData={handleChange('time')} />
          </Row>
          <Select
            labelField="name"
            valueField="value"
            placeholder="Selecionar"
            data={options}
            value={
              values.category ? options.find((option) => option.value === values.category) : ''
            }
            onChange={(item) => setFieldValue('category', item.value)}
          />
          <TextArea
            value={values.description}
            onChangeText={handleChange('description')}
            placeholder="Descrição da tarefa"
            onBlur={handleBlur('description')}
          />
          <Btn onPress={(e) => handleSubmit(e as unknown as FormEvent<HTMLFormElement>)}>
            <TextBtn>{taskId ? 'Salvar Alterações' : 'Salvar Tarefa'}</TextBtn>
          </Btn>
        </Container>
      )}
    </Formik>
  );
}
