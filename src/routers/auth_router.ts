import { Router } from "express";

//constants
const router: Router = Router();

//paths
router.use("login");

export const authRouters: Router = router;
