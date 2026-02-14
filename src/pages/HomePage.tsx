import { useEffect, useState } from "react";
import { getJobOffers } from "../services/JobOfferService";
import type { JobOffer } from "../types/JobOffer";
import { JobCard } from "../components/job/JobCard";
import { Container } from "../components/layout/Container";

export function HomePage(){
    const [jobs, setJobs] = useState<JobOffer[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getJobOffers()
        .then(setJobs)
        .finally(() => setLoading(false));
     },[])
     if(loading) return <Container>Loading...</Container>

     return(
        <Container>
            {jobs.map(job =>(
                <JobCard key={job.id} job={job}/>
            ))}
        </Container>
    )
}