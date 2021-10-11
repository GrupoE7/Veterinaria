const express = require('express')
const router = express.Router();
const {unlink} = require('fs-extra')
const path = require('path')

const Image = require('../model/image.js')



   router.get('/', async (req,res,next)=>{

    const image = await Image.find()
    console.log(image)
res.render('index', {data:image});
  //res.json(Image);
    
  })



 


 router.get('/', async (req,res,next)=>{

    const image = await Image.find()
    console.log(image)
   //res.render('ver', {data:image});
  res.json(image);
 })

////////////////////////////////////////
router.route("/ver").get((req, res) => {
    Image.find((error, data, next) => {
      if (error) {
        return next(error);
      } else {
        console.log(error);
        res.json(data);
      }
    });
  });

///////////////////////////////


///////////////////////////////////////////
router.get('/upload', (req,res,next)=>{
    res.render('upload')
})
/////////////



///////////////////////////






//////////////////////////////


router.post('/upload', async (req,res,next)=>{
      
     const image = new Image()
     image.title = req.body.title,
     image.description = req.body.description,
     image.precio = req.body.precio,
     image.filename = req.file.filename,
     image.originalname = req.file.originalname,
    //  image.path   = '/img/upload/'+ req.file.filename,
     image.path   = '/img/upload/'+ req.file.filename,
     image.mimetype =req.file.mimetype,
     image.size  = req.file.size
     await image.save()
     

       res.redirect('http://localhost:8080/view#/ListComponent')
})




router.get('/images/:id', async (req,res,next)=>{
     
      const id = req.params.id;
      try{

        // const image=await Image.findById(id);
        const image=await Image.findById(id);
        console.log(id);
        res.json(image);
        
      }catch(error){
        return res.status(500).json({
          mensaje:'error',
          
        })

      }






      // const image = await Image.findById(id);
      // res.render('profile', {image: image})
})


 router.get('/images/delete/:id', async (req,res,next)=>{
     
  const id = req.params.id;
     const imageDeleted = await Image.findByIdAndDelete(id);
   
  //  await unlink(path.resolve(`../../public/${imageDeleted.path}`))

    res.redirect('/')
 })

// router.route("/delete-producto/:id").delete((req, res, next) => {
//   StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });







module.exports = router