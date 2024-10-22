import { AuthUser } from '../../src/auth/auth-user';

export const mockUser = (fields?: Partial<AuthUser>): AuthUser => ({
  firstName: 'Aris',
  middleName: null,
  lastName: 'Septanugroho',
  username: 'mhmdaris15',
  image: null,
  birthDate: new Date('2005-01-15'),
  registrationDate: new Date(),
  email: 'rafinabil39@gmail.com',
  id: 1,
  emailVerified: true,
  passwordHash: '2wsx1qaz',
  ...fields,
});
