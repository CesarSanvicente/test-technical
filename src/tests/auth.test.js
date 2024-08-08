const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const User = require('../models/User');

before((done) => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => done());
});

after((done) => {
  mongoose.connection.close(() => done());
});

describe('POST /api/auth/register', () => {
  it('should register a new user', (done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
        role: 'employee'
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        User.findOne({ email: 'testuser@example.com' }, (err, user) => {
          if (err) return done(err);
          expect(user).to.not.be.null;
          done();
        });
      });
  });
});
