export interface JobOffer {
    id: number;
    title: string;
    company: string;
    technologies: string;
    experienceLevel: string;
    location?: string;
    isRemote: boolean;
    source?: string;
    sourceUrl?: string;
    postedDate: Date;
}