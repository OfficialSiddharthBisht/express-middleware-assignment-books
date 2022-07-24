const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Books');
    console.log('Getting All Books');
})
router.get('/:id',(req,res)=>{
    console.log({bookName:req.params.id});
})

module.exports = router;