import { inject, injectable } from "inversify";
import { UserRepository } from "../entity/user.repository";

@injectable()
export class UserService {
    constructor(
        @inject('USER_REPO') 
        private readonly userRepository: UserRepository
        ){}
    
    public findAll(){
        return this.userRepository.findAllMock();
    }

    public findById(id: string){
        return this.userRepository.findByIdMock(id);
    }
}