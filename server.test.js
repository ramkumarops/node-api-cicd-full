import request from 'supertest';
import app from './server.js';

describe('GET /users', () => {
  it('should return the correct user data', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200);

    expect(response.body).toEqual([
      { id: 100, name: 'John Doe' },
      { id: 101, name: 'ram kumar' }
    ]);
  });
});

