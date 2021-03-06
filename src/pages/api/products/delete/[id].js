//DELETING PRODUCTS BY ID
import Products from '../../../../../schema/Beds';
import dbConnect from '../../../../../utils/DBconnect';

// import timestamp from 'time-stamp';

dbConnect();
export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const remove = await Products.deleteOne({ _id: req.query.id });
      res.status(200).json({ success: true, data: remove });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  } else {
    res.status(404).json({ error: 'This Method is not allowed' });
  }
}
