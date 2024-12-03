"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Middleware för CORS
app.use((0, cors_1.default)({
    origin: "http://localhost:3000", // Tillåt endast frontend från denna domän
    methods: ["GET", "POST", "PUT", "DELETE"], // Tillåtna HTTP-metoder
    credentials: true, // Tillåter att cookies skickas med förfrågningar
})); // Tillåt alla domäner som standard
// Middleware för att hantera JSON
app.use(express_1.default.json());
// Routes
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
exports.default = app;
