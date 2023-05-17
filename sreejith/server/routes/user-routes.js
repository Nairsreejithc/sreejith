import express from 'express'
import { allUsers, deleteUser, userById, userRegister, userUpdate } from '../controllers/user-controller.js'
const router = express.Router()
router.get("/getallusers", allUsers)
router.get("/getuserbyid", userById)
router.post("/register", userRegister)
router.delete("/deleteuser", deleteUser)
router.put("/updateuser", userUpdate)
export default router