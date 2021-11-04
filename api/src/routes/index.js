const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ("axios")
const {Area, Milestone} = require ("../db")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/milestone/:areaId", async (req, res, next) => {
    try{
    const {areaId} = req.params
    const milestones = await Milestone.findAll({
        where: {
            areaId: areaId
        }
    }) 
    const cleaned = milestones.map(el=>{
        return {
            id: el.id,
            title: el.title,
            description: el.description,
            status: el.status,
            areaId: el.areaId
        }
    })
    res.status(200).json(cleaned)
    }
    catch(error) {
        next(error)
    }
})

router.get("/area/:id", async (req, res, next) => {
    try{
    const {id} = req.params
    const area = await Area.findOne({
        where: {
            id: id
        }
    }) 
    const cleaned = {
        id: area.id,
        age_range: area.age_range,
        title: area.title,
        description: area.description,
    }
    res.status(201).json(cleaned)
    }
    catch(error) {
        next(error)
    }
})

router.patch("/milestone/:id", async (req, res, next)=>{
    try{ 
    const {id} = req.params
    const {status} = req.body
    const update = await Milestone.update({status: status}, {
        where:{
            id: id
        }
    })
    res.status(202).json("Updated status")
    }
    catch(error){
        next(error)
    }
})


module.exports = router;
