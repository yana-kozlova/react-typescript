import * as jose from 'jose';
import type { JWTPayload } from "jose";
import Cookies from 'js-cookie';

export const TOKEN_COOKIE_NAME = '_session_id';

export interface ITokenPayload {
    id: string;
    email: string;
    name: string;
    avatar: string;
}

export function decodeToken(token: string): JWTPayload {
    return jose.decodeJwt(token);
}

export function isLoggedIn(): boolean {
    const token = Cookies.get(TOKEN_COOKIE_NAME);
    
    return (token ?? '') !== '';
}