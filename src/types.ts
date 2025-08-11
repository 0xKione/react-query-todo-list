export type TodoItem = {
  id: number;
  title: string;
  description: string;
  owner: string; // TODO: Change to user ID when auth is implemented
  createdAt: Date;
  dueDate?: Date;
  completed: boolean;
};
