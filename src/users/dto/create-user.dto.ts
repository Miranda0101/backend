export class CreateUserDto {
  age?: number;
  gender?: string;
  email: string;
  role: string;
  username: string;
  password: string;
  avatar?: string;
  birthday?: Date;
}
