import { useEffect, useState } from "react";
import { getJobOffers } from "../services/JobOfferService";
import type { JobOffer } from "../types/JobOffer";
import { JobCard } from "../components/job/JobCard";
import { Container } from "../components/layout/Container";
import { FilterBar } from "../components/job/FilterBar";

export function HomePage(){
    const [jobs, setJobs] = useState<JobOffer[]>([]);
    const [loading, setLoading] = useState(true);
    
    function loadJobs(filters?:any){
        setLoading(true)
        getJobOffers(filters)
        .then(setJobs)
        .finally(()=>setLoading(false))
    }

    useEffect(()=>{
        loadJobs()
     },[])


     return(
        <Container>
            <FilterBar onSearch={loadJobs}/>
            
            {loading && <div>Loading...</div>}
            
            {!loading &&
              jobs.map(job =>(
                <JobCard key={job.id} job={job}/>
            ))}
            
        </Container>
     
    )
}