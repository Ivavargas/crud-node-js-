import {Router} from "express";
import {methods as amigosController} from "./../controllers/amigos.controller";

const router = Router();
//trae todos los amigos
router.get("/getFriends",amigosController.getFriends);
//trae un solo amigo por parametro
router.get("/getFriend/:id",amigosController.getFriend);
//crea un nuevo amigo
router.post("/addFriend",amigosController.addFriend)
//elimina un amigo por parametro id
router.delete("/deleteFriend/:id",amigosController.deleteFriend)
//actualiza informacion de un amigo
router.put("/updateFriend/:id",amigosController.updateFriend);

export default router;
