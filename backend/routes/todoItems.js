const router =require('express').Router();

//import todo model

const todoItemsModel = require ('../models/todoItems');


//lets create our first route  --  CREATE

router.post('/api/item',async (req,res)=>{
 
    try{
        const newItem = new todoItemsModel({
            item:req.body.item
        })
           //save item in db
        const saveItem = await newItem.save()
         res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }

})

//READ
router.get('/api/items',async (req,res)=>{

    try{
        const allTodoItems = await todoItemsModel.find({ });

        res.status(200).json(allTodoItems);

    }catch(err){
        res.json(err);
    }

})


//UPDATE

router.put('/api/item/:id',async (req,res)=>{
    try{

        //find the item by id and update item
        const updateItem = todoItemsModel.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json('Item Updated');
    }catch(err){
        res.json(err);
    }
})

//DELETE

router.delete('/api/item/:id',async (req,res)=>{
    try{

        //find the item by id and update item
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    }catch(err){
        res.json(err);
    }
})



//export routes

module.exports = router;