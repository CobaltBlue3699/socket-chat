import express = require('express');

const app = express();

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), (err: any) => {
  if (err) {
    console.log(`error = ${err}`);
  }
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

app.get('/',(req, res) => { //'/'是指專案的根目錄路徑
  res.write(JSON.stringify(req.ip));    
  res.write(JSON.stringify(req.header));
  res.end();
});
