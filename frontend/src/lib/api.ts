export interface Job {
  id: number;
  title: string;
  company_name: string;
  category: string;
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  url: string;
  description: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetchJobs(): Promise<Job[]> {
  const res = await fetch(`${API_URL}/jobs`);
  if (!res.ok) {
    throw new Error("Erro ao buscar vagas");
  }
  const data = await res.json();
  return data.jobs || data;
}

export async function fetchJobById(id: number): Promise<Job | null> {
  const res = await fetch(`${API_URL}/jobs/${id}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
}
