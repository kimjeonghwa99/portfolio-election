import express from 'express';

const app = express();
app.use(express.json());

app.post('/sms/send', (req, res) => {
  const { type, message, targets } = req.body;

  console.log('[MOCK SMS]');
  console.log('TYPE:', type); // SMS | LMS | MMS
  console.log('MESSAGE:', message);
  console.log('TARGETS:', targets);

  return res.json({
    status: 'SENT (MOCK)',
    count: targets.length,
    timestamp: new Date()
  });
});

app.listen(4000, () => {
  console.log('API server running on http://localhost:4000');
});
