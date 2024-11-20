const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/returns_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const returnSchema = new mongoose.Schema({
  orderId: String,
  reason: String,
  date: { type: Date, default: Date.now },
});

const ReturnRequest = mongoose.model('ReturnRequest', returnSchema);

app.post('/api/returns', async (req, res) => {
  const { orderId, reason } = req.body;
  const newReturn = new ReturnRequest({ orderId, reason });
  await newReturn.save();
  res.status(201).send('Return request submitted.');
});

app.listen(5000, () => console.log('Server running on port 5000'));
