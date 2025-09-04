import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/jobs", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get("https://remotive.com/api/remote-jobs");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar vagas" });
  }
});


app.get("/jobs/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get("https://remotive.com/api/remote-jobs");
    const job = data.jobs.find((j: any) => String(j.id) === id);

    if (!job) {
      return res.status(404).json({ error: "Vaga não encontrada" });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar vaga" });
  }
});

app.listen(4000, () => {
  console.log("✅ Backend rodando em http://localhost:4000");
});
