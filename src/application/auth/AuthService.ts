export class AuthService {
  hash(password: string): string { return `hash(${password})`; }
  verify(password: string, hash: string): boolean { return this.hash(password) === hash; }
  token(userId: string): string { return `token-${userId}`; }
}
