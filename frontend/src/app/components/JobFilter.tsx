"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobFilterProps {
  categories: string[];
  onChange: (category: string | null) => void;
}

export function JobFilter({ categories, onChange }: JobFilterProps) {
  return (
    <div className="w-64">
      <Select onValueChange={(value) => onChange(value === "all" ? null : value)}>
        <SelectTrigger>
          <SelectValue placeholder="Filtrar por categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
