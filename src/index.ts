import express from "express";
import http from "http";
import vhost from "vhost";

import { name, version } from "../package.json";
console.log(`starting ${name} v${version}`);

const app = express();

app.use(
  vhost("*.*", (req, res) => {
    res.send(`this page is listening on ${req.vhost.host}`);
  })
);

http.createServer(app).listen(80);
