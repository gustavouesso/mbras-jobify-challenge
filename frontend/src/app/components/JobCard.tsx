"use client";

import { useState } from "react";
import { Job } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { addFavorite, removeFavorite } from "@/lib/favorites";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const [isFavorite, setIsFavorite] = useState(job.isFavorite || false);

  async function toggleFavorite() {
    if (isFavorite) {
      await removeFavorite(job.id);
      setIsFavorite(false);
    } else {
      await addFavorite(job.id);
      setIsFavorite(true);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.company_name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{job.category}</p>
        <Button asChild variant="outline" className="mr-2">
          <Link href={`/jobs/${job.id}`}>Ver detalhes</Link>
        </Button>
        <Button variant={isFavorite ? "secondary" : "default"} onClick={toggleFavorite}>
          {isFavorite ? "Remover Favorito" : "Favoritar"}
        </Button>
      </CardContent>
    </Card>
  );
}
