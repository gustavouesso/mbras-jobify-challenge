import { Button } from "@/components/ui/button";
import { fetchJobById } from "@/lib/api";
import Link from "next/link";

interface JobPageProps {
  params: { id: string };
}

export default async function JobPage({ params }: JobPageProps) {
  const job = await fetchJobById(Number(params?.id));

  if (!job) {
    return <div className="p-6">Vaga não encontrada</div>;
  }

  return (
    <main className="p-6 space-y-4">
      <Button asChild variant="link" className="mr-2">
        <Link href="/" >Voltar para Vagas</Link>
      </Button>
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company_name}</p>
      <p className="text-sm text-gray-500">{job.publication_date}</p>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />

      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Candidatar-se
      </a>
    </main>
  );
}
