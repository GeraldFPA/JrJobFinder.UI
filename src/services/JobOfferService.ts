import type { JobOffer } from "../types/JobOffer";

export async function getJobOffers():Promise<JobOffer[]>{
    const response = await fetch('/api/JobOffer ');
    if(!response.ok){
        throw new Error('Failed to fetch job offers', { cause: response.status });
    }
    return await response.json();
}