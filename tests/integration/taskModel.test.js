const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Task = require('../../models/Task');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: 'verifyTEST' });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Task Model - Integration', () => {
  it('should save and retrieve a task', async () => {
    const newTask = await Task.create({ title: 'Integration test task' });
    const found = await Task.findById(newTask._id);
    expect(found.title).toBe('Integration test task');
  });
});
