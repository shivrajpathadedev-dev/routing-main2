
export interface Illoginuser {
    email: string;
    password: string;
}

export interface Isignupuser {
    email: string;
    password: string;
    userRole: 'admin' | 'buyer' | 'superAdmin'
}