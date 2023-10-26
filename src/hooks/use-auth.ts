import type { JWTPayload } from "jose";
import Cookies from "js-cookie";
import { decodeToken, TOKEN_COOKIE_NAME } from "lib/jwt";

export function useAuth(): JWTPayload | null {
  const token = Cookies.get(TOKEN_COOKIE_NAME) ?? "";
  console.log(token);
  if (token === "") {
    return null;
  }

  return decodeToken(token);
}
