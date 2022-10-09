import { Router } from "express";
import { authRouters } from "./auth_router";

//constants
const router: Router = Router();

//paths
router.use("auth", authRouters);

export const mainRouters: Router = router;
