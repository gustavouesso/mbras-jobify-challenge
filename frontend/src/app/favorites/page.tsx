"use client";

import { useEffect, useState } from "react";
import { fetchJobById, Job } from "@/lib/api";
import { getFavorites } from "@/lib/favorites";
import { JobCard } from "../components/JobCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FavoritesPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      setLoading(true);

      try {
        const favoriteIds = await getFavorites();

        if (favoriteIds.length === 0) {
          setJobs([]);
          setLoading(false);
          return;
        }
        const filtered: Job[] = [];

        for (const favorite of favoriteIds) {
          const job = await fetchJobById(favorite);
          if (job) {
            job.isFavorite = true;
            filtered.push(job);
          }
        }

        setJobs(filtered);
      } catch (err) {
        console.error("Erro ao carregar favoritos:", err);
      } finally {
        setLoading(false);
      }
    }

    loadFavorites();
  }, []);

  if (loading) return <p className="p-4">Carregando favoritos...</p>;

  if (jobs.length === 0)
    return <p className="p-4">Você ainda não tem vagas favoritas ⭐</p>;

  return (
    <div>
        <Button asChild variant="link" className="mr-2">
          <Link href="/" >Voltar para Vagas</Link>
        </Button>
        <h1 className="p-6 text-3xl font-bold">Vagas Favoritas ⭐</h1>
        <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
        ))}
        </div>
    </div>
  );
}
