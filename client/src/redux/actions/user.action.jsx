import { SAVE_USER_INFO } from "./action.types";

export const saveUserInfo = (data) => {
  return {
    type : SAVE_USER_INFO,
    payload : data
  }
}