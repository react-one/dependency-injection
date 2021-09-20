import "reflect-metadata";
import { injectable } from "inversify";
import { IProvider } from "../providers/interfaces";

@injectable()
class NameProvider implements IProvider {
  public greet() {
    return `Hello, my friend`;
  }
}
export { NameProvider };
