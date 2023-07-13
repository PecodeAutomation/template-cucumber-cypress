import { ID } from "./common";

export interface User {
  user: {
    avatarUrl: string;
    birthDate: number;
    countryId: number;
    firstName: string;
    hireDate: number;
    id: number;
    email: string;
    lastName: string;
    locale: string;
    name: string;
    preferredOrFirstName: string;
    primaryUserDetail: string;
    score: number;
    secondaryUserDetail: string;
    status: number;
  };
}

export interface UserInput {
  employeeId: ID;
}

export interface UserOutput extends User, UserInput {
  department: string;
  lastLogin: number;
  managerName: string;
  userId: number;
}

export interface LoginInput {
  companyId?: ID;
  email?: string;
  password?: string;
}

export interface ProxyLoginInput {
  proxyUserId: ID;
}
