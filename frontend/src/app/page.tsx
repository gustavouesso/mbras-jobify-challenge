"use client";

import { useEffect, useState } from "react";
import { fetchJobs, Job } from "@/lib/api";
import { JobFilter } from "./components/JobFilter";
import { JobCard } from "./components/JobCard";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function loadJobs() {
      const allJobs = await fetchJobs();
      setJobs(allJobs);
      setFilteredJobs(allJobs);

      const uniqueCategories = Array.from(new Set(allJobs.map((job) => job.category))).sort();
      setCategories(uniqueCategories);
    }
    loadJobs();
  }, []);

  function handleFilter(category: string | null) {
    if (!category) {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((job) => job.category === category));
    }
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Vagas</h1>

      <JobFilter categories={categories} onChange={handleFilter} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
