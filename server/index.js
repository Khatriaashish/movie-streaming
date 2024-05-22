import express from "express";
import cookiParser from "cookie-parser";
import cors from "cors";
import http from "http";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiParser());

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
