const express=require("express");

const{
    registerUser,
    loginUser,
    getUserInfo,
}=require("../controllers/authController");

const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
// router.get("/getuser",Protect,getUserInfo);

module.exports=router;