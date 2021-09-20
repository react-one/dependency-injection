import * as React from "react";
import { NameProvider } from "../entities/NameProvider";
import { myContainer } from "../inversify.config";
import { TYPES } from "../types";

export const GreetingWithInversify = () => {
  const message = myContainer.get<NameProvider>(TYPES.Friend);

  return <h1> {message.greet()}</h1>;
};
