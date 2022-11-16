// Copyright 2022 Namespace Labs Inc; All rights reserved.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.

import express from "express";
import cors from "cors";
import { readFileSync } from "fs";

const nsConfigRaw = readFileSync("/namespace/config/runtime.json");
const nsConfig = JSON.parse(nsConfigRaw.toString());

// Constants
const PORT = nsConfig.current.port.find((s: any) => s.name === "apiservice").port;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.json());
// Enable CORS for all origins for this example.
app.use(cors());
app.post("/echo", (req: express.Request<any, any>, res: express.Response<any, any>) => {
	console.log(`Received request: ${JSON.stringify(req.body)}`);
	res.send(`Hello, ${req.body?.name}!`);
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
