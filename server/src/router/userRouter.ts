import { Router } from "express";

import { getData, updateData, createUser } from "../controllers/todoTaskController";
const router =Router()


router.post("/",createUser)
      .get("/", getData)
      .put("/", updateData)


export default router