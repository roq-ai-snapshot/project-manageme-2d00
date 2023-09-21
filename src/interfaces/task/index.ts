import { UserTaskInterface } from 'interfaces/user-task';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  status: string;
  project_id: string;
  created_at?: any;
  updated_at?: any;
  user_task?: UserTaskInterface[];
  project?: ProjectInterface;
  _count?: {
    user_task?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  project_id?: string;
}
