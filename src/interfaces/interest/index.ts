import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InterestInterface {
  id?: string;
  name: string;
  description?: string;
  category?: string;
  popularity?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface InterestGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  user_id?: string;
}
