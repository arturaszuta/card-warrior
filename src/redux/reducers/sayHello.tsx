import { SAY_HELLO } from "../actionTypes";


const initialState = {
  sayHello: "I am the default state",
}

const sayHello = (state = initialState, action:any) => {
    switch (action.type) {
      case SAY_HELLO: {
        return action.payload.sayHello;
      }
      default: {
        return state;
      }
    }
  };
  
  export default sayHello;