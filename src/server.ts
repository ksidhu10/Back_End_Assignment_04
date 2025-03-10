import app from "../src/app";


// Import Server type definition
import { Server } from "http";

// Initialize PORT correctly
const PORT: string | number = process.env.PORT || 3000;

// Initialize server for the application to listen on the specified port
const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export server for testing
export default server;
