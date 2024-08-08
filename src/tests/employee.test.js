const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const Employee = require('../models/Employee');

describe('Employee Endpoints', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new employee', async () => {
    const res = await request(app)
      .post('/api/employees')
      .send({
        personalInfo: {
          firstName: 'Test',
          lastName: 'User',
        },
        professionalInfo: {
          position: 'Developer',
          department: 'IT',
        },
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should fetch all employees', async () => {
    const res = await request(app).get('/api/employees');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
