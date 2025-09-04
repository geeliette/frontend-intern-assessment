export type PanelState = 'closed' | 'add-step' | 'tasks';

export interface WorkflowStep {
  id: string;
  title: string;
  icon: string;
  stepNumber: number;
}