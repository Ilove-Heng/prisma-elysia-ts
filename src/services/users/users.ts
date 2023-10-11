import { usersRepo } from "../../repositories/users/users";
import { LoginRequest,SignupRequest } from "../../models/users/users";

const UserRepo = new usersRepo();

class userServices {
    async login(login_request: LoginRequest) {
        return await UserRepo.login(login_request);
    }
    signup(signup_request: SignupRequest){
        // console.log(`hi users ${JSON.stringify(signup_request)}`);
        return UserRepo.signup(signup_request)
    }
    getUsers() {
        return UserRepo.getUsers()
    }
    getUsersById(id: number) {
        return UserRepo.getUsersById(id);
    }
    updateUsers(id: number){
        return UserRepo.updateUsers(id);
    }
}

export {
    userServices
}