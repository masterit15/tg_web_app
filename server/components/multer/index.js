import fs from 'fs'
import multer from "multer"
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) =>{
      cb(null, `../upload`);
  },
  filename: (req, file, cb) =>{
    let fileType = file.originalname.split(".").pop()
      cb(null, Date.now()+''+Math.random()+'.'+fileType);
  }
});
const uploader = multer({ storage: storageConfig })

export default uploader