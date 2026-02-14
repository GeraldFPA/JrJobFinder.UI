import type { JobOffer } from "../../types/JobOffer";

interface Props {
  job: JobOffer;
}

export function JobCard({ job }: Props) {
  return (
    <div>
      <div style={styles.card}>
        <h3 style={styles.header}>{job.title}</h3>
        {job.isRemote && <span style={styles.badge}>Remote</span>}
      </div>

      <p style={styles.company}>{job.company}</p>
      <p style={styles.tech}>{job.technologies}</p>

      <div style={styles.footer}>
        <span>{job.experienceLevel}</span>
        <span>{job.location}</span>
      </div>
    </div>
  );
}
const styles = {
  card: {
    border: "1px solid #e5e5e5",
    borderRadius: "10px",
    padding: "1.5rem",
    marginBottom: "1rem",
    backgraundColor: "#fff",
    transition: "0.2s ease",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
  },
  badge: {
    backgroundColor: "#e0f7fa",
    padding: "0.3rem 0.6rem",
    borderRadius: "5px",
    fontSize: "0.8rem",
  },
  company: {
    fontWeight: 500,
    marginTop: "0.5rem",
  },
  tech: {
    color: "#555",
  },
  footer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.85rem",
    color: "#777",
  },
};
