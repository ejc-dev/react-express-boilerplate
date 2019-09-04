const express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const auths = require('../middleware/auths')


router.get("/", auths, async (req,res) => {
    try {
        const items = await Item.find({user:req.user.id}).sort({date:-1})
        res.send(items)
    } catch (err) {
        res.status(500).send("Server Error")
    }
})

// @TODO add some error checking here
router.delete("/:id", auths, async (req,res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id).sort({date:-1})
            res.send(item)
    } catch (err) {
        res.status(500).send("Server Error")
    }
})

// @TODO add error checking
router.put("/",auths,async (req,res) => {
    try {
        const newItem = new Item({
            user:req.user.id,
            name,
            amount,
            date
        })
        const item = await newItem.save();
        res.send(item)
    } catch (err) {
        res.statust(500).send('Server Error')
    }
})

//@TODO work through error checking
router.put("/:id",auths,async (req,res) => {
    const { name, amount } = req.body
    const itemFields = {}
    if(name) itemFields.name = name
    if(amount) itemFields.amount = amount
    try {
        const item = await Item.findByIdAndUpdate(req.params.id,{ $set:itemFields},{new:true})
        res.send(item)
    } catch (err) {
        res.status(500).send('Server Error')
    }
})
