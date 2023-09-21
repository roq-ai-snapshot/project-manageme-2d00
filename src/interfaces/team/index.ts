import { UserTeamInterface } from 'interfaces/user-team';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  name: string;
  description?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  user_team?: UserTeamInterface[];
  company?: CompanyInterface;
  _count?: {
    user_team?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
