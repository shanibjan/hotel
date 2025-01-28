import express from 'express'
import menuModel from '../model/menuModel.js'

const router = express.Router()

router.post('/add-food',async(req,res)=>{
    try {
        const{category,name,price,description}=req.body
        if(!category ||!name|| !price|| ! description){
            return res.status(400).send({ message: "All fields required" });
        }
       const newMenu=await menuModel(req.body).save()
       res.json({success:true,message:"Menu item Added",newMenu});
    } catch (error) {
       res.json(error);
        
    }
   
    
})


router.get('/get-menu',async(req,res)=>{
    try {
        const menus=await menuModel.find()
        res.json(menus)
    } catch (error) {
        res.json(error)
    }
})

export default router