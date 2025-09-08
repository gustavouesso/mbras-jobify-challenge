"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Job } from "@/lib/api";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          <Link href={`/jobs/${job.id}`} className="hover:underline">
            {job.title}
          </Link>
        </CardTitle>
        <CardDescription>
          {job.company_name} · {job.candidate_required_location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">
          Publicado em {new Date(job.publication_date).toLocaleDateString("pt-BR")}
        </p>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/jobs/${job.id}`}>Ver detalhes</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
