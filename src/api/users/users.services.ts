import { Message, Status } from "../../errors";
import { userServices } from "../../services/users/users";
import { LoginRequest,SignupRequest } from "../../models/users/users";

const userService = new userServices();

class UserApi {
    login(login_request: LoginRequest) {        
        return userService.login(login_request);
    }

    signup(signup_request: SignupRequest) {
        // return `hi ${JSON.stringify(signup_request)}` ;
        return userService.signup(signup_request);
    }

    getUsers() {
        return userService.getUsers();
    }

    getUsersById(id: number) {
        // return console.log("🚀  id:", id)
        return userService.getUsersById(id);
    }

    updateUsers(id: number) {
        return userService.updateUsers(id);
    }

}


export {
    UserApi
}