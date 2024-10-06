import { DatetimePicker } from '@/components/DatetimePicker';
import { Select } from '@/components/Select';
import { useTaskContext } from '@/contexts/TaskContext';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Formik } from 'formik';
import { FormEvent, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Btn, Container, ErrorMessage, Row, TextArea, TextBtn, TextTitle } from './styles';

const validationSchema = Yup.object().shape({
  date: Yup.string(),
  time: Yup.string(),
  tag: Yup.string(),
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
    tag: '',
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
          tag: task.tag || '',
          description: task.description || '',
          title: task.title || '',
          done: task.done || false,
        });
      }
    }
  }, [taskId, taskById]);

  const options = [
    { name: 'categoria 1', value: 'categoria 1' },
    { name: 'categoria 2', value: 'categoria 2' },
    { name: 'categoria 3', value: 'categoria 3' },
    { name: 'categoria 4', value: 'categoria 4' },
    { name: 'categoria 5', value: 'categoria 5' },
    { name: 'categoria 6', value: 'categoria 6' },
    { name: 'categoria 7', value: 'categoria 7' },
    { name: 'categoria 8', value: 'categoria 8' },
    { name: 'categoria 9', value: 'categoria 9' },
    { name: 'categoria 10', value: 'categoria 10' },
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
            <DatetimePicker mode="date" value={values.date} handleData={handleChange('date')} />
            <DatetimePicker mode="time" value={values.time} handleData={handleChange('time')} />
          </Row>
          <Select
            labelField="name"
            valueField="value"
            placeholder="Selecionar"
            data={options}
            value={values.tag ? options.find((option) => option.value === values.tag) : ''}
            onChange={(item) => setFieldValue('tag', item.value)}
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
