import express from 'express'
import menuModel from '../model/menuModel.js'

const router = express.Router()

router.post('/add-food',async(req,res)=>{
    try {
       const newMenu=await menuModel(req.body).save()
       res.json({success:true,message:"Task Added",newMenu});
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