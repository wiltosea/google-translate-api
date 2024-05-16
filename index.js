import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { translate } from '@vitalets/google-translate-api';
import { HttpProxyAgent } from 'http-proxy-agent';

const agent = new HttpProxyAgent('http://172.247.44.109:8080');
const app = express();
const port = 3000;

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(express.json());

app.post('/translate', async (req, res) => {
  const { text, from, to } = await translate(req.body.text, {
    from: req.body.from,
    to: req.body.to,
    fetchOptions: { agent },
  });

  res.json({ text, from, to });
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
