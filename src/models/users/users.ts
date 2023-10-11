import { t } from "elysia";

const login = {
    'login': t.Object({
        username: t.String(),
        password: t.String()
    })
}

const signup = {
    'signup': t.Object({
        email: t.String(),
        username: t.String(),
        password: t.String(),
        date_of_birth: t.String(),
    })
}

interface LoginRequest {
    username: string;
    password: string;
}

interface SignupRequest {
    username: string;
    password: string;
    email: string;
    date_of_birth: string,
}
interface SignupResponse {
    id?: number;
    username?: string;
    email?: string;
    date_of_birth?: Date,
}

interface LoginResponse {
    id: number;
    username: string;
    createdAt: string;
    updatedAt: string;
    accessToken: string;
}

interface UserInfo {
    id: number;
    email: string;
    username: string;
    date_of_birth: Date;
    created_at: Date;
    updated_at: Date;
}

interface UserReponse {
    users: UserInfo[];
    page: number;
    limit: number;
    total: number;
}


interface getUsersByIdResponse {
    users: UserInfo[];
}


export {
    login,
    signup,
    LoginRequest,
    LoginResponse,
    SignupRequest,
    SignupResponse,
    UserReponse,
    UserInfo,
    getUsersByIdResponse,
}