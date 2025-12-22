import { socketAuth } from "./../midddlewares/socketAuth.middleware.js";

const initSocket = (io) => {
  io.use(socketAuth);

  io.on("connection", (socket) => {
    presenceHandler(io, socket);
    messageHandler(io, socket);
  });
};

export { initSocket };
