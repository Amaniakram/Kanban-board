const jwt = require('jsonwebtoken');

const secret = 'mySuperSecret123'; // Replace with your real secret in production
const payload = { id: 1 };

const token = jwt.sign(payload, secret, { expiresIn: '1h' });
console.log('JWT:', token);
