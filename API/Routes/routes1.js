const express = require("express")
const router = express.Router()
const goal = require("../model/schema")

router.get("/", async (req,res)=>{
    const goals = await goal.find()
    if (goals){
        res.json({message: "No goals set yet in the To Do List"})
    }
    res.json(goal)
})

router.post("/", (req,res)=>{
    res.send("collect goals")
})

router.put("/:id", (req,res)=>{
    res.send(`update goals,${req.params.id}`)
})

router.delete("/:id", (req,res)=>{
    res.send(`update goals,${req.params.id}`)
})

module.exports = router