import { Task } from '@/@types/task';
import { data } from '@/utils/data';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import uuid from 'react-native-uuid';

export type TaskContextType = {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: string, updatedTask: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  taskById: (id: string) => Task | undefined;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  console.log(tasks);

  const addTask = (task: Omit<Task, 'id'>) => {
    const id = uuid.v4().toString();

    const newTask = { ...task, id };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const taskById = (id: string) => {
    return tasks.find((task) => task.id === id);
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, taskById }}>
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
