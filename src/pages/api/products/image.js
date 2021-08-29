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

export default async function handler(req, res) {
  const time = timestamp('DD-MM-YYYY');

  fs.mkdir(`./public/${time}`, { recursive: true }, function (err) {
    return console.log(err);
  });

  let paths = '';
  let arrays = [];

  const data = await new Promise((resolve, reject) => {
    const form = formidable({
      multiple: true,
      uploadDir: `./public/${time}`,
    });

    //KEEP EXTENSION
    form.keepExtensions = true;
    form.keepFileName = true;

    form.on('fileBegin', function (name, file) {
      console.log(slugify(file.name));
      file.path = path.join(`public/${time}`, slugify(file.name));
      paths = `${process.env.BASE_URL}/${time}/${slugify(file.name)}`;
      arrays.push(paths);
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve(files);
    });
  });

  res.status(200).json(arrays);
}
