import Products from '../../../../../schema/Beds';
import dbConnect from '../../../../../utils/DBconnect';
import cleanDeep from 'clean-deep';
var _ = require('lodash');

dbConnect();
export default async function handler(req, res) {
  if (req.method === 'PUT') {
    // const getProductsByID = await Products.findById(req.query.id);
    const params = await cleanDeep(req.body);
    await Products.update({ _id: req.query.id }, { $set: params }, { useFindAndModify: false }, function (err, doc) {
      console.log(doc);
      res.json({ data: doc });
    });

    //  //BASIC DETAILS
    //  req.body.product_name ? (getProductsByID.product_name = req.body.product_name) : null;
    //  req.body.description ? (getProductsByID.description = req.body.description) : null;
    //  req.body.size ? (getProductsByID.size = req.body.size) : null;
    //  req.body.price ? (getProductsByID.price = req.body.price) : null;

    //  //MATTRESSES
    //  req.body.mattresses_images1
    //    ? (getProductsByID.mattresses_images[0].color1.image = req.body.mattresses_images1)
    //    : null;
    //  req.body.mattresses_images2
    //    ? (getProductsByID.mattresses_images[0].color2.image = req.body.mattresses_images2)
    //    : null;
    //  req.body.mattresses_images3
    //    ? (getProductsByID.mattresses_images[0].color3.image = req.body.mattresses_images3)
    //    : null;
    //  req.body.mattresses_images4
    //    ? (getProductsByID.mattresses_images[0].color4.image = req.body.mattresses_images4)
    //    : null;
    //  //MATTRESSES PRICE
    //  req.body.mattresses_price1
    //    ? (getProductsByID.mattresses_images[0].color1.price = req.body.mattresses_price1)
    //    : null;
    //  req.body.mattresses_price2
    //    ? (getProductsByID.mattresses_images[0].color2.price = req.body.mattresses_price2)
    //    : null;
    //  req.body.mattresses_price3
    //    ? (getProductsByID.mattresses_images[0].color3.price = req.body.mattresses_price3)
    //    : null;
    //  req.body.mattresses_price4
    //    ? (getProductsByID.mattresses_images[0].color4.price = req.body.mattresses_price4)
    //    : null;

    //  //FEET
    //  req.body.feet_images1 ? (getProductsByID.feet_images[0].color1.image = req.body.feet_images1) : null;
    //  req.body.feet_images2 ? (getProductsByID.feet_images[0].color2.image = req.body.feet_images2) : null;
    //  req.body.feet_images3 ? (getProductsByID.feet_images[0].color3.image = req.body.feet_images3) : null;
    //  req.body.feet_images4 ? (getProductsByID.feet_images[0].color4.image = req.body.feet_images4) : null;

    //  //FEET PRICE
    //  req.body.feet_price1 ? (getProductsByID.feet_images[0].color1.price = req.body.feet_price1) : null;
    //  req.body.feet_price2 ? (getProductsByID.feet_images[0].color2.price = req.body.feet_price2) : null;
    //  req.body.feet_price3 ? (getProductsByID.feet_images[0].color3.price = req.body.feet_price3) : null;
    //  req.body.feet_price4 ? (getProductsByID.feet_images[0].color4.price = req.body.feet_price4) : null;

    //  //BASE COLORS
    //  req.body.color1 ? (getProductsByID.images[0].color1.base_url = req.body.color1) : null;
    //  req.body.color2 ? (getProductsByID.images[0].color2.base_url = req.body.color2) : null;
    //  req.body.color3 ? (getProductsByID.images[0].color3.base_url = req.body.color3) : null;
    //  req.body.color4 ? (getProductsByID.images[0].color4.base_url = req.body.color4) : null;

    //  //HEADBOARD IMAGES
    //  //HEADBOARD  (1-4)
    //  req.body.headboard1 ? (getProductsByID.images[0].color1.headboard.color1.url = req.body.headboard1) : null;
    //  req.body.headboard2 ? (getProductsByID.images[0].color1.headboard.color2.url = req.body.headboard2) : null;
    //  req.body.headboard3 ? (getProductsByID.images[0].color1.headboard.color3.url = req.body.headboard3) : null;
    //  req.body.headboard4 ? (getProductsByID.images[0].color1.headboard.color4.url = req.body.headboard4) : null;
    //  //HEADBOARD  (4-8)
    //  req.body.headboard5 ? (getProductsByID.images[0].color2.headboard.color1.url = req.body.headboard5) : null;
    //  req.body.headboard6 ? (getProductsByID.images[0].color2.headboard.color2.url = req.body.headboard6) : null;
    //  req.body.headboard7 ? (getProductsByID.images[0].color2.headboard.color3.url = req.body.headboard7) : null;
    //  req.body.headboard8 ? (getProductsByID.images[0].color2.headboard.color4.url = req.body.headboard8) : null;
    //  //HEADBOARD  (8-12)
    //  req.body.headboard9 ? (getProductsByID.images[0].color3.headboard.color1.url = req.body.headboard9) : null;
    //  req.body.headboard10 ? (getProductsByID.images[0].color3.headboard.color2.url = req.body.headboard10) : null;
    //  req.body.headboard11 ? (getProductsByID.images[0].color3.headboard.color3.url = req.body.headboard11) : null;
    //  req.body.headboard12 ? (getProductsByID.images[0].color3.headboard.color4.url = req.body.headboard12) : null;
    //  //HEADBOARD  (12-16)
    //  req.body.headboard13 ? (getProductsByID.images[0].color4.headboard.color1.url = req.body.headboard13) : null;
    //  req.body.headboard14 ? (getProductsByID.images[0].color4.headboard.color2.url = req.body.headboard14) : null;
    //  req.body.headboard15 ? (getProductsByID.images[0].color4.headboard.color3.url = req.body.headboard15) : null;
    //  req.body.headboard16 ? (getProductsByID.images[0].color4.headboard.color4.url = req.body.headboard16) : null;

    //  //HEADBOARD PRICE
    //  //HEADBOARD PRICE (1-4)
    //  req.body.headboard_price1
    //    ? (getProductsByID.images[0].color1.headboard.color1.price = req.body.headboard_price1)
    //    : null;
    //  req.body.headboard_price2
    //    ? (getProductsByID.images[0].color1.headboard.color2.price = req.body.headboard_price2)
    //    : null;
    //  req.body.headboard_price3
    //    ? (getProductsByID.images[0].color1.headboard.color3.price = req.body.headboard_price3)
    //    : null;
    //  req.body.headboard_price4
    //    ? (getProductsByID.images[0].color1.headboard.color4.price = req.body.headboard_price4)
    //    : null;
    //  //HEADBOARD PRICE (4-8)
    //  req.body.headboard_price5
    //    ? (getProductsByID.images[0].color2.headboard.color1.price = req.body.headboard_price5)
    //    : null;
    //  req.body.headboard_price6
    //    ? (getProductsByID.images[0].color2.headboard.color2.price = req.body.headboard_price6)
    //    : null;
    //  req.body.headboard_price7
    //    ? (getProductsByID.images[0].color2.headboard.color3.price = req.body.headboard_price7)
    //    : null;
    //  req.body.headboard_price8
    //    ? (getProductsByID.images[0].color2.headboard.color4.price = req.body.headboard_price8)
    //    : null;
    //  //HEADBOARD PRICE (8-12)
    //  req.body.headboard_price9
    //    ? (getProductsByID.images[0].color3.headboard.color1.price = req.body.headboard_price9)
    //    : null;
    //  req.body.headboard_price10
    //    ? (getProductsByID.images[0].color3.headboard.color2.price = req.body.headboard_price10)
    //    : null;
    //  req.body.headboard_price11
    //    ? (getProductsByID.images[0].color3.headboard.color3.price = req.body.headboard_price11)
    //    : null;
    //  req.body.headboard_price12
    //    ? (getProductsByID.images[0].color3.headboard.color4.price = req.body.headboard_price12)
    //    : null;
    //  //HEADBOARD PRICE (12-16)
    //  req.body.headboard_price13
    //    ? (getProductsByID.images[0].color4.headboard.color1.price = req.body.headboard_price13)
    //    : null;
    //  req.body.headboard_price14
    //    ? (getProductsByID.images[0].color4.headboard.color2.price = req.body.headboard_price14)
    //    : null;
    //  req.body.headboard_price15
    //    ? (getProductsByID.images[0].color4.headboard.color3.price = req.body.headboard_price15)
    //    : null;
    //  req.body.headboard_price16
    //    ? (getProductsByID.images[0].color4.headboard.color4.price = req.body.headboard_price16)
    //    : null;

    //  //STORAGE IMAGES
    //  //STORAGE  (1-4)
    //  req.body.headboard1 ? (getProductsByID.images[0].color1.headboard.color1.url = req.body.headboard1) : null;
    //  req.body.headboard2 ? (getProductsByID.images[0].color1.headboard.color2.url = req.body.headboard2) : null;
    //  req.body.headboard3 ? (getProductsByID.images[0].color1.headboard.color3.url = req.body.headboard3) : null;
    //  req.body.headboard4 ? (getProductsByID.images[0].color1.headboard.color4.url = req.body.headboard4) : null;
    //  //STORAGE  (4-8)
    //  req.body.headboard5 ? (getProductsByID.images[0].color2.headboard.color1.url = req.body.headboard5) : null;
    //  req.body.headboard6 ? (getProductsByID.images[0].color2.headboard.color2.url = req.body.headboard6) : null;
    //  req.body.headboard7 ? (getProductsByID.images[0].color2.headboard.color3.url = req.body.headboard7) : null;
    //  req.body.headboard8 ? (getProductsByID.images[0].color2.headboard.color4.url = req.body.headboard8) : null;
    //  //STORAGE  (8-12)
    //  req.body.headboard9 ? (getProductsByID.images[0].color3.headboard.color1.url = req.body.headboard9) : null;
    //  req.body.headboard10 ? (getProductsByID.images[0].color3.headboard.color2.url = req.body.headboard10) : null;
    //  req.body.headboard11 ? (getProductsByID.images[0].color3.headboard.color3.url = req.body.headboard11) : null;
    //  req.body.headboard12 ? (getProductsByID.images[0].color3.headboard.color4.url = req.body.headboard12) : null;
    //  //STORAGE  (12-16)
    //  req.body.headboard13 ? (getProductsByID.images[0].color4.headboard.color1.url = req.body.headboard13) : null;
    //  req.body.headboard14 ? (getProductsByID.images[0].color4.headboard.color2.url = req.body.headboard14) : null;
    //  req.body.headboard15 ? (getProductsByID.images[0].color4.headboard.color3.url = req.body.headboard15) : null;
    //  req.body.headboard16 ? (getProductsByID.images[0].color4.headboard.color4.url = req.body.headboard16) : null;
  } else {
    res.status(404).json({ message: 'PUT method missing' });
  }
}
