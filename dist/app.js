"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const userRoute_1 = __importDefault(require("./api/v1/routes/userRoute"));
const loanRoutes_1 = __importDefault(require("./api/v1/routes/loanRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, morgan_1.default)('dev')); // HTTP request logging
app.use(express_1.default.json()); // To parse JSON bodies
// Routes
app.use('/api/v1/users', userRoute_1.default);
app.use('/api/v1/loans', loanRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
