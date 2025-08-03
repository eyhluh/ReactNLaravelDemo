export interface GenderColumns {
  gender_id: number;
  gender: string;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
}

export interface GenderFieldErrors {
    gender?: string[];
}