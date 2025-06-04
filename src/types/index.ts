export interface NavItem {
  title: string;
  path: string;
}

export interface Course {
  title: string;
  description: string;
  prerequisites?: string[];
  topics: string[];
  duration: string;
  price: string;
  formLink: string;
}

export interface Teacher {
  name: string;
  image: string;
  qualifications: string[];
}