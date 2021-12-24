import { port } from './config';
import app from './app';

app.listen(port, () => {
    console.log(`http://localhost:${port}/api/v1`);
  })
  .on('error ', (e) => console.log(e));