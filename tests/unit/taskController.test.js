const Task = require('../../models/Task');
jest.mock('../../models/Task'); // Mocks the model
const taskController = {
  createTask: async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

describe('Task Controller - createTask', () => {
  it('should create a task and return it', async () => {
    const req = { body: { title: 'Unit test task' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockTask = { _id: '123', title: 'Unit test task' };
    Task.create.mockResolvedValue(mockTask);

    await taskController.createTask(req, res);

    expect(Task.create).toHaveBeenCalledWith({ title: 'Unit test task' });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockTask);
  });
});
