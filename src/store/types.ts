3; // types.ts
export interface Job {
  id: string;
  deletedBy: string | null;
  deleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  position: {
    en: string;
    pt: string;
    zh: string;
  };
  location: {
    en: string;
    pt: string;
    zh: string;
  };
  phoneNumber: {
    en: string;
    pt: string;
    zh: string;
  };
  companyName: {
    en: string;
    pt: string;
    zh: string;
  };
  workType: {
    en: string;
    pt: string;
    zh: string;
  };
  numberOfVacancies: number;
  experience: {
    en: string;
    pt: string;
    zh: string;
  };
  facility: {
    en: string[];
    pt: string[];
    zh: string[];
  };
  description: {
    en: string;
    pt: string;
    zh: string;
  };
  language: {
    en: string;
    pt: string;
    zh: string;
  };
  salaryType: {
    en: string;
    pt: string;
    zh: string;
  };
  salary: number;
  jobCategory: {
    id: string;
    deletedBy: string | null;
    deleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    name: {
      en: string;
      pt: string;
      zh: string;
    };
  };
  employer: {
    id: string;
    deletedBy: string | null;
    deleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    fullName: string | null;
    username: string;
    email: string;
    address: string | null;
    phoneNumber: string;
    avatar: string | null;
    isBlocked: boolean;
    deviceId: string | null;
  };
}

export interface ApiResponse {
  data: Job[];
}
