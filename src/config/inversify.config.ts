import 'reflect-metadata';
import { Container } from "inversify";
import { UserRepository } from "src/users/entity/user.repository";
import { UserService } from "src/users/services/user.service";

const container = new Container();
container.bind<UserService>(UserService).to(UserService);
container.bind<UserRepository>('USER_REPO').to(UserRepository);

export { container };
