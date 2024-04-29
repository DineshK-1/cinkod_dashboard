export type FirebaseUser = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string | null;
};

export type User = {
  id: number;
  email: string;
  name: string | null;
  avatar_url: string;
  user_name: string;
  google_uid: string;
  college_name: string;
  phone: string;
  bio: string;
  socials: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type College = {
  id: number;
  name: string;
  email: string;
  leadId: number;
  description: string;
  banner_url: string;
  members_count: number;
  region: string;
  photos: string[];
  videos: string[];
  socials: string[];
  createdAt: Date;
  updatedAt: Date;
};