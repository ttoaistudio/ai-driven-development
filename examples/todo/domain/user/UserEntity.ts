export interface UserProps {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

export class UserEntity {
  id: string;
  name: string;
  email: string;
  passwordHash: string;

  constructor({ id, name, email, passwordHash }: UserProps) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
  }
}
