const request = require('supertest');
const app = require('../../index');
const mongoose = require('mongoose');
const Task = require('../../models/Task');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('GET /api/tasks', () => {
  it('should return all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
