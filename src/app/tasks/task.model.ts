

export interface Task {
    id: string;
    description: string;
    dueDate: Date;
    urgency: 'yearly' | 'monthly' | 'weekly' | 'daily';
    completed: boolean;
}
  