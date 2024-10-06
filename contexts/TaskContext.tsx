import { TaskProps } from '@/@types/task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import uuid from 'react-native-uuid';

export type TaskContextType = {
  tasks: TaskProps[];
  addTask: (task: Omit<TaskProps, 'id'>) => void;
  updateTask: (id: string, updatedTask: Partial<TaskProps>) => void;
  deleteTask: (id: string) => void;
  taskById: (id: string) => TaskProps | undefined;
  getCategories: () => string[];
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const TASKS_KEY = '@tasks_key';

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem(TASKS_KEY);
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

  const saveTasks = async (tasksToSave: TaskProps[]) => {
    try {
      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasksToSave));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  };

  const addTask = (task: Omit<TaskProps, 'id'>) => {
    const id = uuid.v4().toString();
    const newTask = { ...task, id };
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  };

  const updateTask = (id: string, updatedTask: Partial<TaskProps>) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      );
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  };

  const taskById = (id: string) => {
    return tasks.find((task) => task.id === id);
  };

  const getCategories = () => {
    return tasks.reduce<string[]>((acc, task) => {
      if (task?.category && !acc.includes(task.category)) {
        acc.push(task.category);
      }
      return acc;
    }, []);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, taskById, getCategories }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
