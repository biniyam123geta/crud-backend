import config from 'config';

import app from './app';


const PORT = process.env.PORT || config.get("app.port");

app.listen(PORT, () => {
console.log("running dev...");
});


export default app;