import dotenv from 'dotenv';

import app from 'src/app';
import database from 'src/database';

const envExtension =
  process.env.NODE_ENV == 'DEV' ? 'development' : 'production';

dotenv.config({
  path: `./src/.env.${envExtension}`,
});

database.connect();

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '5000';

app.listen(parseInt(PORT), HOST, () =>
  console.log(`[server] listening on port ${PORT}`),
);
