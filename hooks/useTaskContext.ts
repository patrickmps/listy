import { TaskContextType } from '@/contexts/TaskContext';
import { createContext, useContext } from 'react';

export const useTaskContext = () => {
  const TaskContext = createContext<TaskContextType | undefined>(undefined);
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
