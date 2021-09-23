import { IUserPayload } from "./../contextes/User/types";
export default function getTokenFromLocaleStorage(key: string):string|undefined {
  if (typeof window !== "undefined") {
    const data = localStorage?.getItem(key);
    if (!data) {
      return;
    }
    const { token }: IUserPayload = JSON.parse(data);
    return token;
  }
}
