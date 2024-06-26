
const Photo = require("../models/Photos")
    //לפי קריטריונים
const getAllPhotos = async (req, res)=>{
    const photos = await Photo.find().lean()
    if(!photos?.length){
        return res.send(null)
    }
    res.json(photos)
}
const createNewPhoto = async(req, res)=> {
    const {title, imageUrl}= req.body
    if(!title)
    return res.status(400).json({message:'title is required'})
const newPhoto = await Photo.create({title, imageUrl})
if(newPhoto){
    return res.status(201).json({message: 'New photo created'})
}
    else{
return res.status(400).json({message: 'Invalid photo'})
} }
const updatePhoto = async (req, res)=>{
    const{_id,title, imageUrl} = req.body
    if(!_id || !title){
        return res.status(400).json({message: 'fields are required'})
    }
    const photo = await Photo.findById(_id).exec()
    if(!photo){
        return res.status(400).json({message: 'Photo not found'})
    }
    photo.title = title
    photo.imageUrl =imageUrl
      

    const updatedPhoto = await photo.save()
    res.json(`'${updatedPhoto.title}' updated`)
    }

    const deletePhoto = async (req, res)=>{
        try{
        const { id } = req.params
        const photo = await Photo.findById(id).exec()
         if(!photo){
            return res.status(400).json({message: 'Photo not found'})
         }
        const result = await photo.deleteOne()
        const reply = `Photo '${result.title}' ID ${result._id} deleted`
        res.json(reply)
        }
        catch{
            return res.status(404).json({message: 'not found'})
        }
    }



module.exports = {
    createNewPhoto,
    getAllPhotos,
    updatePhoto,
    deletePhoto,
}


    


