export class AuthService {
  hash(password) { return `hash(${password})`; }
  verify(password, hash) { return this.hash(password) === hash; }
  token(userId) { return `token-${userId}`; }
}
