import homeController from "../controller/homeController.js";
import express from "express";
const router = express.Router();

router.get("/", homeController.homePage);
router.get("/news", homeController.newPage);
router.get("/user", homeController.userPage);
router.get("/crud", homeController.crudPage);
router.post("/crud-stored", homeController.crudStored);
router.get("/editUser", homeController.editUser);
router.put("/updateUser/:id", homeController.updateUser);
module.exports = router;
