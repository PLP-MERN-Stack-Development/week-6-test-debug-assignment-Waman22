const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/User');

describe('Auth API', () => {
  test('POST /api/auth/login authenticates user', async () => {
    await User.create({
      email: 'test@example.com',
      password: 'hashedPassword',
    });

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeTruthy();
  });
});