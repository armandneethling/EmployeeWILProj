import { User } from './user.model';

describe('User Interface', () => {
  it('should have the correct properties', () => {
    const user: User = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      position: 'Developer',
      password: 'password123'
    };

    expect(user).toBeDefined();
    expect(user.id).toBe(1);
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
    expect(user.position).toBe('Developer');
    expect(user.password).toBe('password123');
  });
});
