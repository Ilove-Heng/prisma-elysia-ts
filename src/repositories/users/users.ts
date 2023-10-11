import { db } from "../../utils/db";
import { Status, Message } from "../../errors";
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse, UserReponse, UserInfo, getUsersByIdResponse } from "../../models/users/users";
var jwt = require('jsonwebtoken');

class usersRepo {
    async login(login_request: LoginRequest) {
        const existingUser = await db.user.findUnique({
            where: {
                username: login_request.username
            },
        });

        const existingPassword = existingUser?.password ?? "";

        const login_response: LoginResponse = {
            id: existingUser?.id ?? 0,
            username: existingUser?.username ?? "",
            createdAt: existingUser?.created_at?.toString() ?? "",
            updatedAt: existingUser?.updated_at?.toString() ?? "",
            accessToken: "",
        }

        const validPassword = Bun.password.verifySync(login_request.password, existingPassword)

        var token = jwt.sign({ id: login_response.id, username: login_response.username }, process.env.JWT_SECRETS);
        login_response.accessToken = token;


        if (!login_request.username || !login_request.password) {
            return { message: Message.MISSING_CREDENTIALS };
        } else if (!existingUser) {
            return { message: Message.INVALID_CREDENTIALS };
        } else if (!validPassword) {
            return { message: Message.INVALID_PASSWORD };
        }


        return login_response || null;
    }


    async signup(signup_request: SignupRequest) {
        const existingUser = await db.user.findUnique({
            where: {
                username: signup_request.username
            },
        });

        if (!signup_request.username || !signup_request.password) {
            return { message: Message.MISSING_CREDENTIALS };
        }

        if (existingUser) {
            return { message: Message.USERNAME_IN_USE }
        }


        signup_request.password = Bun.password.hashSync(signup_request.password, {
            algorithm: 'bcrypt',
            cost: 4,
        })
        const users = await db.user.create({
            data: {
                username: signup_request.username,
                password: signup_request.password,
                email: signup_request.email,
                date_of_birth: new Date(signup_request.date_of_birth),
            }
        })

        const user_reponse: SignupResponse = {
            id: users.id,
            username: users.username,
            email: users.email,
            date_of_birth: users.date_of_birth
        }

        return user_reponse;
    }

    async getUsers() {

        const users: UserInfo[] = await db.user.findMany({
            select: {
                id: true,
                email: true,
                username: true,
                date_of_birth: true,
                created_at: true,
                updated_at: true,
            },
            take: 2,
        });

        const users_response: UserReponse = {
            users: users,
            page: 1,
            limit: 2,
            total: 3,
        };

        return users_response;
    }


    async getUsersById(id: number) {
        const users: UserInfo[] = await db.user.findMany({
            where: {
                id,
            },
            select: {
                id: true,
                email: true,
                username: true,
                date_of_birth: true,
                created_at: true,
                updated_at: true,
            }
        })

        const users_response: getUsersByIdResponse = {
            users: users,
        }
        return users_response;
    }

    async updateUsers(id: number) {
        console.log("🚀 repo id:", id)
        
    }
}

export { usersRepo }