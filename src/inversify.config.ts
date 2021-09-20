import { Container } from "inversify";
import { IProvider } from "./providers/interfaces";
import { NameProvider } from "./entities/NameProvider";
import { TYPES } from "./types";

const myContainer = new Container();
myContainer.bind<IProvider>(TYPES.Friend).to(NameProvider);

export { myContainer };