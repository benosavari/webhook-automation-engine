console.log("app.js loaded");
import express from 'express';
import dotenv from 'dotenv';
import webhookRoutes from './routes/webhook.js';
import { processEvent } from "./services/eventProcessor.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use('/webhook', webhookRoutes);

app.get("/", (req, res) => {
    res.send("Webhook server is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})

app.post("/simulate-event", async (req, res) => {
  res.json({ ok: true });

  const mockEvent = {
    event: {
      name: "Auto-generated task",
      columnValues: {
        category: "bug"
      }
    }
  };

  await processEvent(mockEvent);
});