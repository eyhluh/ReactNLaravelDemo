import type { GenderColumns } from "./GenderColumns";

export interface UserColumns {
    user_id: number;
    first_name: string;
    middle_name?: string;
    last_name: string;
    suffix_name?: string;
    gender: GenderColumns;
    birth_date: string;
    age: string | number;
    username: string;
    password: string;
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
}