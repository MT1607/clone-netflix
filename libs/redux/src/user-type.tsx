export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  status: number;
  msg: string;
}
