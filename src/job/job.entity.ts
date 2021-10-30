export class Job {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
  publication_date: string;
  location: string;
  level: string;
  tags: string[];
  company: Company;
}

export interface Company {
  id: number;
  short_name: string;
  name: string;
}
