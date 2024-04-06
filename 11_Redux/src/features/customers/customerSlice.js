const customerInitialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.date,
      };
    case "customer/updateAccount":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createAccount",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}
export function updateCustomer(fullName) {
  return {
    type: "customer/updateAccount",
    payload: fullName,
  };
}
// store.dispatch({
//   type: "customer/createAccount",
//   payload: {
//     name: "Ajeya",
//     nationalID: "1070905142",
//     createdAt: new Date().toISOString(),
//   },
// });
// console.log(store.getState());
// store.dispatch({
//   type: "customer/updateAccount",
//   payload: {
//     name: "Ajeya Nadig",
//   },
// });
// console.log(store.getState());
