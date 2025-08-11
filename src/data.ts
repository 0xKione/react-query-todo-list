import type { TodoItem } from "./types";

const data: TodoItem[] = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, Bread, Eggs, Butter",
    owner: "Rich",
    createdAt: new Date("2023-10-01T10:00:00Z"),
    dueDate: new Date("2023-10-02T18:00:00Z"),
    completed: true,
  },
  {
    id: 2,
    title: "Fix the water filter",
    description: "Call a handyman to fix the water filter",
    owner: "Rich",
    createdAt: new Date("2025-8-01T10:00:00Z"),
    completed: false,
  },
  {
    id: 3,
    title: "Fix drywall in office",
    description: "Repair the drywall in the outer wall of the office",
    owner: "Rich",
    createdAt: new Date("2025-8-01T10:00:00Z"),
    completed: false,
  },
  {
    id: 4,
    title: "Create a tutorial app",
    description: "Make a tutorial app for learning React Query",
    owner: "Rich",
    createdAt: new Date("2025-8-06T10:00:00Z"),
    dueDate: new Date("2025-8-08T10:00:00Z"),
    completed: false,
  },
];

export const getData: () => Promise<TodoItem[]> = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
