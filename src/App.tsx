import { useEffect, useState } from "react";
import { getJobOffers } from "./services/JobOfferService";
import type { JobOffer } from "./types/JobOffer";


function App() {
  const [jobs, setJobs] = useState<JobOffer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobOffers()
      .then((data) => setJobs(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Junir Job Finder</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.technologies}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
