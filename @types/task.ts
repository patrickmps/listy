export type Task = {
  id: string;
  title: string;
  date: string;
  time?: string;
  tag?: string;
  description?: string;
  done: boolean;
};
