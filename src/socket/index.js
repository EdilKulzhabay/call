import { io } from "socket.io-client";

const options = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
};

// const socket = io("http://192.168.8.33:3001", options);
const socket = io("http://localhost:3001", options);

export default socket;
