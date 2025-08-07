export interface UserDetails {
    user: {
        user_id: number;
        first_name: string;
        middle_name: string;
        last_name: string;
        suffix_name: string;
        gender: {
            gender_id: number;
            gender: string;
        }
        birth_date: string;
        age: string | number;
        username: string;
    }
    token?: string
}


export interface LoginCredentialsErrorFields {
    username?: string[]
    password?: string[]
}

// added ? , if error remove it