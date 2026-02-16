import type { JobOffer } from "../types/JobOffer";

interface Filters {
  tecnology?: string;
  level?: string;
  isRemote?: boolean;
  location?: string;
}
export async function getJobOffers(filters?: Filters): Promise<JobOffer[]> {
  const filterParameters = new URLSearchParams();

  if (filters?.tecnology) {
    filterParameters.append("tecnology", filters.tecnology);
  }
  if (filters?.level) {
    filterParameters.append("level", filters.level);
  }
  if (filters?.isRemote !== undefined) {
    filterParameters.append("isRemote", String(filters.isRemote));
  }
  if (filters?.location) {
    filterParameters.append("location", filters.location);
  }

  const query = filterParameters.toString();
  const url = query ? `/api/JobOffer?${query}` : "/api/JobOffer";
  const response = await fetch(url);
  console.log(url);
  if (!response.ok) {
    throw new Error("Failed to fetch job offers", { cause: response.status });
  }
  return await response.json();
}
