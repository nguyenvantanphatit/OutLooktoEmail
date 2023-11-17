import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import EmailSender from "./sendEmail.js";
import serverless from "serverless-http";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    EmailSender({
      email,
      subject,
      message,
    });
    res.json({ msg: "Your message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.listen(8080, () => {
  console.log("Connected to server!");
});

export default serverless(app);
