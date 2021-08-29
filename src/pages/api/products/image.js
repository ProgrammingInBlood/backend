import multer from 'multer';
import fs from 'fs';
import timestamp from 'time-stamp';
import formidable from 'formidable-serverless';
import slugify from 'slugify';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const time = timestamp('DD-MM-YYYY');

  fs.mkdir(`./public`, { recursive: true }, function (err) {
    return console.log(err);
  });

  let paths = '';
  let arrays = [];

  await new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
      uploadDir: `./public`,
    });

    //KEEP EXTENSION
    form.keepExtensions = true;
    form.keepFileName = true;

    form.on('fileBegin', function (name, file) {
      console.log(slugify(file.name));
      file.path = path.join(`public`, slugify(file.name));
      paths = `${process.env.BASE_URL}/${slugify(file.name)}`;
      arrays.push(paths);
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve(files);
    });
  });

  res.status(200).json(arrays);
};
