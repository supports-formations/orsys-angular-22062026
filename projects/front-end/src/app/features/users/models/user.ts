export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export type CreateUser = Omit<User, 'id'>;

export type UserList = User[];