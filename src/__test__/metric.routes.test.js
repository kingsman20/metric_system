const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('Metric Endpoints', () => {
  const key = 'active_visitors';
  it('should create a new metric log', async () => {
    const res = await request.post(`/metric/${key}`).send({
      value: 4,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({});
  });

  it('should throw an error when value is not provided', async () => {
    const res = await request.post(`/metric/${key}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ message: 'Value not provided' });
  });

  it('should fetch a metric sum based on the key', async () => {
    const res = await request.get(`/metric/${key}/sum`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('value');
  });
});
