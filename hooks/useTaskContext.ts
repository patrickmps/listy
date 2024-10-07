import { TaskContext } from '@/contexts/TaskContext';
import { useContext } from 'react';
export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
