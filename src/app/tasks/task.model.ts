

export interface Task {
    id: number;
    description: string;
    dueDate: Date;
    urgency: 'urgent' | 'medium' | 'low';
    isCompleted: boolean;
  }
  