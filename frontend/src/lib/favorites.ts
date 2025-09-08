const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getFavorites(): Promise<number[]> {
  const res = await fetch(`${API_URL}/favorites`);
  if (!res.ok) throw new Error("Erro ao buscar favoritos");
  return res.json();
}

export async function addFavorite(jobId: number) {
  const res = await fetch(`${API_URL}/favorites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jobId }),
  });
  if (!res.ok) throw new Error("Erro ao adicionar favorito");
  return res.json();
}

export async function removeFavorite(jobId: number) {
  const res = await fetch(`${API_URL}/favorites`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jobId }),
  });
  if (!res.ok) throw new Error("Erro ao remover favorito");
  return res.json();
}
