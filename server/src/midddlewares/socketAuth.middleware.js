import { Socket } from "socket.io";
import jwt from "jsonwebtoken";

const socketAuth = (Socket, next) => {
  try {
    const token = Socket.handshake.auth?.token;
    if (!token) {
      return next(new Error("Unauthorized"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    Socket.userId = decoded.userId;
    next();
  } catch (error) {
    next(new Error("Invalid token"));
  }
};
