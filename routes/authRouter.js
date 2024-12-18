import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
import rateLimiter from "express-rate-limit";
const router = Router();

const apiLimiter = rateLimiter({
  // maximum of 5 requests per IP address within a 15-minute window
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});
router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.get("/logout", logout);

export default router;
