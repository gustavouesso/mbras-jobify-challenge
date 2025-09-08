import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL!,
  process.env.PUBLIC_SUPABASE_ANON_KEY!
);

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

app.get("/favorites", async (_req, res) => {
  const { data, error } = await supabase.from("favorites").select("job_id");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data.map((f) => f.job_id));
});

app.post("/favorites", async (req, res) => {
  const { jobId } = req.body;
  if (!jobId) return res.status(400).json({ error: "jobId é obrigatório" });

  const { data, error } = await supabase
    .from("favorites")
    .insert({ job_id: jobId });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.delete("/favorites", async (req, res) => {
  const { jobId } = req.body;
  if (!jobId) return res.status(400).json({ error: "jobId é obrigatório" });

  const { data, error } = await supabase
    .from("favorites")
    .delete()
    .eq("job_id", jobId);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(4000, () => {
  console.log("✅ Backend rodando em http://localhost:4000");
});
