import { Request, Response, NextFunction } from 'express';
import { UploadedFile } from 'express-fileupload';

const fileValidator = (req: Request, res: Response, next: NextFunction) => {
  const FILE_MAX_SIZE = parseInt(process.env.FILE_MAX_SIZE || '5120');
  const VALID_FILE_TYPE = (process.env.FILES_AVAILABLE || 'jpg, png, gif').split(',').map(x => x.toLowerCase().trim());

  if (!req.files) {
    return next();
  }

  if(!req.files.logo) {
    return res.status(400).send( { message: 'invalid file field' } );
  }

  if (Object.keys(req.files).length > 1) {
    return res.status(400).send( { message: 'must attach only one file' } );
  }

  const currentFile = req.files.logo as UploadedFile;
  const fileExtension = currentFile.mimetype.slice(currentFile.mimetype.lastIndexOf('/') + 1);
  
  if (!VALID_FILE_TYPE.includes(fileExtension)) {
    return res.status(400).send( { message: `Invalid file format! Must be ${VALID_FILE_TYPE.join(', ')}` } );
  }

  if (currentFile.size / 1000 > FILE_MAX_SIZE) {
    return res.status(400).send( { message: `File size is too big! Must be max ${FILE_MAX_SIZE} Kb` } );
  }

  next();
}

export default fileValidator;