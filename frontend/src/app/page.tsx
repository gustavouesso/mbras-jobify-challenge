import { fetchJobs } from "@/lib/api";

export default async function JobsPage() {
  const jobs = await fetchJobs();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vagas</h1>
      <ul className="space-y-2">
        {jobs.map((job) => (
          <li key={job.id} className="p-4 border rounded-lg">
            <a href={`/jobs/${job.id}`} className="font-semibold">
              {job.title}
            </a>
            <p className="text-sm text-gray-500">{job.company_name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
