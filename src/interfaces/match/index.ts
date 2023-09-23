import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MatchInterface {
  id?: string;
  user1_id: string;
  user2_id: string;
  match_date?: any;
  match_score?: number;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user_match_user1_idTouser?: UserInterface;
  user_match_user2_idTouser?: UserInterface;
  _count?: {};
}

export interface MatchGetQueryInterface extends GetQueryInterface {
  id?: string;
  user1_id?: string;
  user2_id?: string;
  status?: string;
}
