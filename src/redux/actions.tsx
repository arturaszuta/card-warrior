import { SAY_HELLO
} from "./actionTypes";

export const sayHelloAction = (sayHello: string) => ({
  type: SAY_HELLO,
  payload: {
    sayHello
  }
})

