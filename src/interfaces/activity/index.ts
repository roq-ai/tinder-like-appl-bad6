import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ActivityInterface {
  id?: string;
  user_id: string;
  activity_type?: string;
  activity_date?: any;
  description?: string;
  location?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ActivityGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  activity_type?: string;
  description?: string;
  location?: string;
  status?: string;
}
