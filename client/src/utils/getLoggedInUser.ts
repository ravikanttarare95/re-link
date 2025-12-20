import { jwtDecode } from "jwt-decode";

interface LoggedInUser {
  id: string;
  email: string;
}
interface JwtPayload {
  exp: number;
}

function getLoggedInUser(): LoggedInUser | null {
  try {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const token = localStorage.getItem("token");

    if (!loggedInUser || !token) return null;

    const decodedToken = jwtDecode<JwtPayload>(token);
    const isTokenExpired = decodedToken?.exp * 1000 < Date.now();
    if (isTokenExpired) {
      localStorage.clear();
      return null;
    }

    return JSON.parse(loggedInUser) as LoggedInUser;
  } catch (error) {
    console.error("Error getting logged-in user:", error);
    return null;
  }
}

export default getLoggedInUser;
