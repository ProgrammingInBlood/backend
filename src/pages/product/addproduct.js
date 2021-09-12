import Select from '@paljs/ui/Select';
import { Radio } from '@paljs/ui/Radio';
import { Card, CardBody } from '@paljs/ui/Card';
import { Checkbox } from '@paljs/ui/Checkbox';
import { InputGroup } from '@paljs/ui/Input';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from 'Layouts';
import { Button } from '@paljs/ui/Button';
import { Toastr, ToastrRef, ToastrProps } from '@paljs/ui/Toastr';
import axios from 'axios';
import { SelectStyled } from 'pages/forms/select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const bedsize = [
  { value: '2FT 6', label: '2Feet 6Inch' },
  { value: '3FT', label: '3Feet' },
  { value: '4FT', label: '4 Feet' },
  { value: '4FT 6', label: '4Feet 6Inch' },
  { value: '5FT', label: '5 Feet' },
  { value: '6FT', label: '6Feet' },
];

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

const InputPage = () => {
  const toastrRef = useRef();
  const [count, setCount] = useState(0);
  const [toasterData, setToasterData] = useState({
    position: 'topEnd',
    status: 'Primary',
    duration: 5000,
    hasIcon: true,
    destroyByClick: true,
    preventDuplicates: false,
  });

  const [checkbox, setCheckbox] = useState({
    1: false,
    2: false,
    3: false,
  });

  const onChangeCheckbox = (value, name) => {
    setCheckbox({ ...checkbox, [name]: value });
  };

  //VARIABLE INITIALIZATION

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [base_price, setbase_price] = useState('');
  const [category, setCategory] = useState('');

  //Next API For Beds start type

  const [size, setsize] = useState('');
  //MAIN COLORS
  const [grey_linen, setgrey_linen] = useState('');
  const [grey_seude, setgrey_seude] = useState('');
  const [charcoal_chenille, setcharcoal_chenille] = useState('');
  const [black_crushed_velvet, setblack_crushed_velvet] = useState('');

  //MATTRESSES COLORS

  const [grey_linen_mattress, setgrey_linen_mattress] = useState('');
  const [grey_linen_mattress_price, setgrey_linen_mattress_price] = useState('');
  const [grey_seude_mattress, setgrey_seude_mattress] = useState('');
  const [grey_seude_mattress_price, setgrey_seude_mattress_price] = useState('');
  const [charcoal_chenille_mattress, setcharcoal_chenille_mattress] = useState('');
  const [charcoal_chenille_mattress_price, setcharcoal_chenille_mattress_price] = useState('');
  const [black_crushed_velvet_mattress, setblack_crushed_velvet_mattress] = useState('');
  const [black_crushed_velvet_mattress_price, setblack_crushed_velvet_mattress_price] = useState('');

  //FEET COLORS

  const [grey_linen_feet, setgrey_linen_feet] = useState('');
  const [grey_linen_feet_price, setgrey_linen_feet_price] = useState('');
  const [grey_seude_feet, setgrey_seude_feet] = useState('');
  const [grey_seude_feet_price, setgrey_seude_feet_price] = useState('');
  const [charcoal_chenille_feet, setcharcoal_chenille_feet] = useState('');
  const [charcoal_chenille_feet_price, setcharcoal_chenille_feet_price] = useState('');
  const [black_crushed_velvet_feet, setblack_crushed_velvet_feet] = useState('');
  const [black_crushed_velvet_feet_price, setblack_crushed_velvet_feet_price] = useState('');

  //HEADBOARD COLORS  HEADBOARD COLORS   HEADBOARD COLORS   HEADBOARD COLORS  HEADBOARD COLORS

  //STRUCTURE 1
  const [grey_linen_headboard, setgrey_linen_headboard] = useState('');
  const [grey_linen_headboard_price, setgrey_linen_headboard_price] = useState('');
  const [grey_seude_headboard, setgrey_seude_headboard] = useState('');
  const [grey_seude_headboard_price, setgrey_seude_headboard_price] = useState('');
  const [charcoal_chenille_headboard, setcharcoal_chenille_headboard] = useState('');
  const [charcoal_chenille_headboard_price, setcharcoal_chenille_headboard_price] = useState('');
  const [black_crushed_velvet_headboard, setblack_crushed_velvet_headboard] = useState('');
  const [black_crushed_velvet_headboard_price, setblack_crushed_velvet_headboard_price] = useState('');
  //STRUCTURE 2
  const [grey_linen_headboard1, setgrey_linen_headboard1] = useState('');
  const [grey_linen_headboard_price1, setgrey_linen_headboard_price1] = useState('');
  const [grey_seude_headboard1, setgrey_seude_headboard1] = useState('');
  const [grey_seude_headboard_price1, setgrey_seude_headboard_price1] = useState('');
  const [charcoal_chenille_headboard1, setcharcoal_chenille_headboard1] = useState('');
  const [charcoal_chenille_headboard_price1, setcharcoal_chenille_headboard_price1] = useState('');
  const [black_crushed_velvet_headboard1, setblack_crushed_velvet_headboard1] = useState('');
  const [black_crushed_velvet_headboard_price1, setblack_crushed_velvet_headboard_price1] = useState('');
  //STRUCTURE 3
  const [grey_linen_headboard2, setgrey_linen_headboard2] = useState('');
  const [grey_linen_headboard_price2, setgrey_linen_headboard_price2] = useState('');
  const [grey_seude_headboard2, setgrey_seude_headboard2] = useState('');
  const [grey_seude_headboard_price2, setgrey_seude_headboard_price2] = useState('');
  const [charcoal_chenille_headboard2, setcharcoal_chenille_headboard2] = useState('');
  const [charcoal_chenille_headboard_price2, setcharcoal_chenille_headboard_price2] = useState('');
  const [black_crushed_velvet_headboard2, setblack_crushed_velvet_headboard2] = useState('');
  const [black_crushed_velvet_headboard_price2, setblack_crushed_velvet_headboard_price2] = useState('');
  //STRUCTURE 4
  const [grey_linen_headboard3, setgrey_linen_headboard3] = useState('');
  const [grey_linen_headboard_price3, setgrey_linen_headboard_price3] = useState('');
  const [grey_seude_headboard3, setgrey_seude_headboard3] = useState('');
  const [grey_seude_headboard_price3, setgrey_seude_headboard_price3] = useState('');
  const [charcoal_chenille_headboard3, setcharcoal_chenille_headboard3] = useState('');
  const [charcoal_chenille_headboard_price3, setcharcoal_chenille_headboard_price3] = useState('');
  const [black_crushed_velvet_headboard3, setblack_crushed_velvet_headboard3] = useState('');
  const [black_crushed_velvet_headboard_price3, setblack_crushed_velvet_headboard_price3] = useState('');

  //HEADBOARD COLORS  HEADBOARD COLORS   HEADBOARD COLORS   HEADBOARD COLORS  HEADBOARD COLORS

  //STORAGE COLORS
  //STRUCTURE 1

  const [grey_linen_storage, setgrey_linen_storage] = useState('');
  const [grey_linen_storage_price, setgrey_linen_storage_price] = useState('');
  const [grey_seude_storage, setgrey_seude_storage] = useState('');
  const [grey_seude_storage_price, setgrey_seude_storage_price] = useState('');
  const [charcoal_chenille_storage, setcharcoal_chenille_storage] = useState('');
  const [charcoal_chenille_storage_price, setcharcoal_chenille_storage_price] = useState('');
  const [black_crushed_velvet_storage, setblack_crushed_velvet_storage] = useState('');
  const [black_crushed_velvet_storage_price, setblack_crushed_velvet_storage_price] = useState('');
  //STRUCTURE 2
  const [grey_linen_storage1, setgrey_linen_storage1] = useState('');
  const [grey_linen_storage_price1, setgrey_linen_storage_price1] = useState('');
  const [grey_seude_storage1, setgrey_seude_storage1] = useState('');
  const [grey_seude_storage_price1, setgrey_seude_storage_price1] = useState('');
  const [charcoal_chenille_storage1, setcharcoal_chenille_storage1] = useState('');
  const [charcoal_chenille_storage_price1, setcharcoal_chenille_storage_price1] = useState('');
  const [black_crushed_velvet_storage1, setblack_crushed_velvet_storage1] = useState('');
  const [black_crushed_velvet_storage_price1, setblack_crushed_velvet_storage_price1] = useState('');
  //STRUCTURE 3
  const [grey_linen_storage2, setgrey_linen_storage2] = useState('');
  const [grey_linen_storage_price2, setgrey_linen_storage_price2] = useState('');
  const [grey_seude_storage2, setgrey_seude_storage2] = useState('');
  const [grey_seude_storage_price2, setgrey_seude_storage_price2] = useState('');
  const [charcoal_chenille_storage2, setcharcoal_chenille_storage2] = useState('');
  const [charcoal_chenille_storage_price2, setcharcoal_chenille_storage_price2] = useState('');
  const [black_crushed_velvet_storage2, setblack_crushed_velvet_storage2] = useState('');
  const [black_crushed_velvet_storage_price2, setblack_crushed_velvet_storage_price2] = useState('');
  //STRUCTURE 4
  const [grey_linen_storage3, setgrey_linen_storage3] = useState('');
  const [grey_linen_storage_price3, setgrey_linen_storage_price3] = useState('');
  const [grey_seude_storage3, setgrey_seude_storage3] = useState('');
  const [grey_seude_storage_price3, setgrey_seude_storage_price3] = useState('');
  const [charcoal_chenille_storage3, setcharcoal_chenille_storage3] = useState('');
  const [charcoal_chenille_storage_price3, setcharcoal_chenille_storage_price3] = useState('');
  const [black_crushed_velvet_storage3, setblack_crushed_velvet_storage3] = useState('');
  const [black_crushed_velvet_storage_price3, setblack_crushed_velvet_storage_price3] = useState('');

  //PRICING
  //PRICING
  //PRICING
  const [Headboard_Price, setHeadboard_Price] = useState('');
  const [Storage_Price, setStorage_Price] = useState('');
  const [mattresses_Price, setmattresses_Price] = useState('');
  const [feet_price, setfeet_price] = useState('');

  // const [headboard_images, setHeadboard_images] = useState([]);
  // const [storage_images, setStorage_images] = useState(null);
  // const [mattress_images, setMattress_images] = useState([]);
  // const [feet_images, setFeet_images] = useState([]);

  // const [count, setCount] = useState();
  var storage_images = [];
  var storage_images1 = [];
  var storage_images2 = [];
  var storage_images3 = [];
  var headboard_images = [];
  var headboard_images1 = [];
  var headboard_images2 = [];
  var headboard_images3 = [];
  var mattress_images = [];
  var feet_images = [];
  var base_colors_images = [];

  async function addVarient(e) {
    e.preventDefault();

    const baseColor = async () => {
      const data = new FormData();
      data.append('image', grey_linen);
      data.append('image', grey_seude);
      data.append('image', charcoal_chenille);
      data.append('image', black_crushed_velvet);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => {
          base_colors_images = await response.data;
        });
      } catch (err) {
        console.log(err.message);
      }
    };

    const getStorage = async () => {
      const data = new FormData();
      data.append('image', grey_linen_storage);
      data.append('image', grey_seude_storage);
      data.append('image', charcoal_chenille_storage);
      data.append('image', black_crushed_velvet_storage);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => {
          storage_images = await response.data;
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    const getStorage1 = async () => {
      const data = new FormData();
      data.append('image', grey_linen_storage1);
      data.append('image', grey_seude_storage1);
      data.append('image', charcoal_chenille_storage1);
      data.append('image', black_crushed_velvet_storage1);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => {
          storage_images1 = await response.data;
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    const getStorage2 = async () => {
      const data = new FormData();
      data.append('image', grey_linen_storage2);
      data.append('image', grey_seude_storage2);
      data.append('image', charcoal_chenille_storage2);
      data.append('image', black_crushed_velvet_storage2);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => {
          storage_images2 = await response.data;
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    const getStorage3 = async () => {
      const data = new FormData();
      data.append('image', grey_linen_storage3);
      data.append('image', grey_seude_storage3);
      data.append('image', charcoal_chenille_storage3);
      data.append('image', black_crushed_velvet_storage3);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => {
          storage_images3 = await response.data;
        });
      } catch (err) {
        console.log(err.message);
      }
    };

    const getMattress = async () => {
      const data = new FormData();
      data.append('image', grey_linen_mattress);
      data.append('image', grey_seude_mattress);
      data.append('image', charcoal_chenille_mattress);
      data.append('image', black_crushed_velvet_mattress);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => (mattress_images = await response.data));
      } catch (err) {
        console.log(err.message);
      }
    };

    const getHeadboard = async () => {
      const data = new FormData();
      data.append('image', grey_linen_headboard);
      data.append('image', grey_seude_headboard);
      data.append('image', charcoal_chenille_headboard);
      data.append('image', black_crushed_velvet_headboard);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => (headboard_images = await response.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    const getHeadboard1 = async () => {
      const data = new FormData();
      data.append('image', grey_linen_headboard1);
      data.append('image', grey_seude_headboard1);
      data.append('image', charcoal_chenille_headboard1);
      data.append('image', black_crushed_velvet_headboard1);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => (headboard_images1 = await response.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    const getHeadboard2 = async () => {
      const data = new FormData();
      data.append('image', grey_linen_headboard2);
      data.append('image', grey_seude_headboard2);
      data.append('image', charcoal_chenille_headboard2);
      data.append('image', black_crushed_velvet_headboard2);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => (headboard_images2 = await response.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    const getHeadboard3 = async () => {
      const data = new FormData();
      data.append('image', grey_linen_headboard3);
      data.append('image', grey_seude_headboard3);
      data.append('image', charcoal_chenille_headboard3);
      data.append('image', black_crushed_velvet_headboard3);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => (headboard_images3 = await response.data));
      } catch (err) {
        console.log(err.message);
      }
    };

    const getFeet = async () => {
      const data = new FormData();
      data.append('image', grey_linen_feet);
      data.append('image', grey_seude_feet);
      data.append('image', charcoal_chenille_feet);
      data.append('image', black_crushed_velvet_feet);

      try {
        await axios(`/api/products/image`, {
          method: 'POST',
          data: data,
          'content-type': 'multipart/form-data',
        }).then(async (response) => (feet_images = await response.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    await baseColor();
    await getHeadboard();
    await getHeadboard1();
    await getHeadboard2();
    await getHeadboard3();
    await getMattress();
    await getStorage();
    await getStorage1();
    await getStorage2();
    await getStorage3();
    await getFeet();

    const sendData = async () => {
      const storage = await storage_images;
      const storage1 = await storage_images1;
      const storage2 = await storage_images2;
      const storage3 = await storage_images3;
      const matt = await mattress_images;
      const head = await headboard_images;
      const head1 = await headboard_images1;
      const head2 = await headboard_images2;
      const head3 = await headboard_images3;
      const feet = await feet_images;
      const colors = await base_colors_images;

      const payload = {
        force_replace: checkbox[1],
        category: category,
        product_name: productName,
        description: productDescription,
        size: size,
        price: base_price,
        mattresses_images: [
          { price: grey_linen_mattress_price, image: mattress_images[0] },
          { price: grey_seude_mattress_price, image: mattress_images[1] },
          { price: charcoal_chenille_mattress_price, image: mattress_images[2] },
          { price: black_crushed_velvet_mattress_price, image: mattress_images[3] },
        ],
        feet_images: [
          { price: grey_linen_feet_price, image: feet_images[0] },
          { price: grey_seude_feet_price, image: feet_images[1] },
          { price: charcoal_chenille_feet_price, image: feet_images[2] },
          { price: black_crushed_velvet_feet_price, image: feet_images[3] },
        ],
        images: {
          color1: {
            base_url: base_colors_images[0],
            headboard: [
              { price: grey_linen_headboard_price, url: head[0] },
              { price: grey_seude_headboard_price, url: head[1] },
              { price: charcoal_chenille_headboard_price, url: head[2] },
              { price: black_crushed_velvet_headboard_price, url: head[3] },
            ],
            storage: [
              { price: grey_linen_storage_price, url: storage[0] },
              { price: grey_seude_storage_price, url: storage[1] },
              { price: charcoal_chenille_storage_price, url: storage[2] },
              { price: black_crushed_velvet_storage_price, url: storage[3] },
            ],
          },
          color2: {
            base_url: base_colors_images[1],
            headboard: [
              { price: grey_linen_headboard_price1, url: head1[0] },
              { price: grey_seude_headboard_price1, url: head1[1] },
              { price: charcoal_chenille_headboard_price1, url: head1[2] },
              { price: black_crushed_velvet_headboard_price1, url: head1[3] },
            ],
            storage: [
              { price: grey_linen_storage_price1, url: storage1[0] },
              { price: grey_seude_storage_price1, url: storage1[1] },
              { price: charcoal_chenille_storage_price1, url: storage1[2] },
              { price: black_crushed_velvet_storage_price1, url: storage1[3] },
            ],
          },
          color3: {
            base_url: base_colors_images[2],
            headboard: [
              { price: grey_linen_headboard_price2, url: head2[0] },
              { price: grey_seude_headboard_price2, url: head2[1] },
              { price: charcoal_chenille_headboard_price2, url: head2[2] },
              { price: black_crushed_velvet_headboard_price2, url: head2[3] },
            ],
            storage: [
              { price: grey_linen_storage_price2, url: storage2[0] },
              { price: grey_seude_storage_price2, url: storage2[1] },
              { price: charcoal_chenille_storage_price2, url: storage2[2] },
              { price: black_crushed_velvet_storage_price2, url: storage2[3] },
            ],
          },
          color4: {
            base_url: base_colors_images[3],
            headboard: [
              { price: grey_linen_headboard_price3, url: head3[0] },
              { price: grey_seude_headboard_price3, url: head3[1] },
              { price: charcoal_chenille_headboard_price3, url: head3[2] },
              { price: black_crushed_velvet_headboard_price3, url: head3[3] },
            ],
            storage: [
              { price: grey_linen_storage_price3, url: storage3[0] },
              { price: grey_seude_storage_price3, url: storage3[1] },
              { price: charcoal_chenille_storage_price3, url: storage3[2] },
              { price: black_crushed_velvet_storage_price3, url: storage3[3] },
            ],
          },
        },
      };

      try {
        await axios.post('/api/products/addproducts', payload).then(async (response) => {
          console.log(response);

          if (response.data.success) {
            setCount(count + 1);
            toastrRef.current?.add('SUCCESS', response.data.data, { ...toasterData, status: 'Success' });
          } else {
            setCount(count + 1);
            toastrRef.current?.add('ERROR', response.data.data, { ...toasterData, status: 'Danger' });
          }
        });
      } catch (err) {
        setCount(count + 1);
        toastrRef.current?.add('ERROR', err?.message, { ...toasterData, status: 'Danger' });
      }
    };

    sendData();
  }

  //SELECT C

  const statusOption = [
    { value: 'Linen Fabric DivanBeds', label: 'Linen Fabric DivanBeds' },
    { value: 'Velvet Fabric Divan Beds', label: 'Velvet Fabric Divan Beds' },
    { value: 'Suede Fabric Divan Beds', label: 'Suede Fabric Divan Beds' },
    { value: 'Low Divan Beds', label: 'Low Divan Beds' },
    { value: 'Leather Divan Beds', label: 'Leather Divan Beds' },
  ];

  return (
    <Layout title="Input">
      {/* Product Name Start */}
      <Toastr ref={toastrRef} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 12 }}></Col>
      </Row>
      {/* Product Name End */}

      {/* Add Product For Beds Size Start */}
      <Row>
        <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card>
            <header>Product Type</header>
            <CardBody>
              <Row style={{ height: 300, zIndex: 9999 }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Category</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 10 }}>
                  <Select options={statusOption} placeholder="Select Category" onChange={(e) => setCategory(e.value)} />
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Product Name</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 10 }}>
                  <Input fullWidth status="Success">
                    <input type="text" onChange={(e) => setProductName(e.target.value)} />
                  </Input>
                </Col>
              </Row>
            </CardBody>

            <CardBody>
              <Row>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Description</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 10 }}>
                  <Input fullWidth status="Success">
                    <input type="text" onChange={(e) => setProductDescription(e.target.value)} />
                  </Input>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card>
            <header>Product Type</header>

            <Select
              status="Danger"
              placeholder="Select Your Bed Size"
              options={bedsize}
              onChange={(e) => setsize(e.value)}
            />

            <CardBody>
              <Row>
                <Col breakPoint={{ xs: 12, md: 4 }}>
                  <header>Price</header>
                </Col>

                <Col breakPoint={{ xs: 12, md: 4 }}>
                  <Input status="Success">
                    <input type="tel" placeholder="Price" onChange={(e) => setbase_price(e.target.value)} />
                  </Input>
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Color </header>
                </Col>
                <Row
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid black',
                    padding: 10,
                    borderRadius: 15,
                  }}
                >
                  <h6 style={{ margin: '5px' }}> Color 1</h6>
                  <h6 style={{ margin: '5px' }}>Base Color</h6>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_linen(e.target.files[0])} />
                  </Input>
                  <Col>
                    <h6 style={{ margin: '5px' }}>HeadBoard Color</h6>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_linen_headboard(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 1"
                          onChange={(e) => setgrey_linen_headboard_price(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_seude_headboard(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 2"
                          onChange={(e) => setgrey_seude_headboard_price(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setcharcoal_chenille_headboard(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 3"
                          onChange={(e) => setcharcoal_chenille_headboard_price(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setblack_crushed_velvet_headboard(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 4"
                          onChange={(e) => setblack_crushed_velvet_headboard_price(e.target.value)}
                        />
                      </Input>
                    </Row>
                  </Col>
                  <Col>
                    <h6 style={{ margin: '5px' }}>Storage Color</h6>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_linen_storage(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 1"
                          onChange={(e) => setgrey_linen_storage_price(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_seude_storage(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 2"
                          onChange={(e) => setgrey_seude_storage_price(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setcharcoal_chenille_storage(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 3"
                          onChange={(e) => setcharcoal_chenille_storage_price(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setblack_crushed_velvet_storage(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 4"
                          onChange={(e) => setblack_crushed_velvet_storage_price(e.target.value)}
                        />
                      </Input>
                    </Row>
                  </Col>
                </Row>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Color </header>
                </Col>
                <Row
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid black',
                    padding: 10,
                    borderRadius: 15,
                  }}
                >
                  <h6 style={{ margin: '5px' }}> Color 2</h6>
                  <h6 style={{ margin: '5px' }}>Base Color</h6>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_seude(e.target.files[0])} />
                  </Input>
                  <Col>
                    <h6 style={{ margin: '5px' }}>HeadBoard Color</h6>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_linen_headboard1(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 1"
                          onChange={(e) => setgrey_linen_headboard_price1(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_seude_headboard1(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 2"
                          onChange={(e) => setgrey_seude_headboard_price1(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setcharcoal_chenille_headboard1(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 3"
                          onChange={(e) => setcharcoal_chenille_headboard_price1(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setblack_crushed_velvet_headboard1(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 4"
                          onChange={(e) => setblack_crushed_velvet_headboard_price1(e.target.value)}
                        />
                      </Input>
                    </Row>
                  </Col>
                  <Col>
                    <h6 style={{ margin: '5px' }}>Storage Color</h6>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_linen_storage1(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 1"
                          onChange={(e) => setgrey_linen_storage_price1(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_seude_storage1(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 2"
                          onChange={(e) => setgrey_seude_storage_price1(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setcharcoal_chenille_storage1(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 3"
                          onChange={(e) => setcharcoal_chenille_storage_price1(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setblack_crushed_velvet_storage1(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 4"
                          onChange={(e) => setblack_crushed_velvet_storage_price1(e.target.value)}
                        />
                      </Input>
                    </Row>
                  </Col>
                </Row>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Color </header>
                </Col>
                <Row
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid black',
                    padding: 10,
                    borderRadius: 15,
                  }}
                >
                  <h6 style={{ margin: '5px' }}> Color 3</h6>
                  <h6 style={{ margin: '5px' }}>Base Color</h6>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setcharcoal_chenille(e.target.files[0])} />
                  </Input>
                  <Col>
                    <h6 style={{ margin: '5px' }}>HeadBoard Color</h6>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_linen_headboard2(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 1"
                          onChange={(e) => setgrey_linen_headboard_price2(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_seude_headboard2(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 2"
                          onChange={(e) => setgrey_seude_headboard_price2(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setcharcoal_chenille_headboard2(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 3"
                          onChange={(e) => setcharcoal_chenille_headboard_price2(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setblack_crushed_velvet_headboard2(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 4"
                          onChange={(e) => setblack_crushed_velvet_headboard_price2(e.target.value)}
                        />
                      </Input>
                    </Row>
                  </Col>
                  <Col>
                    <h6 style={{ margin: '5px' }}>Storage Color</h6>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_linen_storage2(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 1"
                          onChange={(e) => setgrey_linen_storage_price2(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_seude_storage2(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 2"
                          onChange={(e) => setgrey_seude_storage_price2(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setcharcoal_chenille_storage2(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 3"
                          onChange={(e) => setcharcoal_chenille_storage_price2(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setblack_crushed_velvet_storage2(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 4"
                          onChange={(e) => setblack_crushed_velvet_storage_price2(e.target.value)}
                        />
                      </Input>
                    </Row>
                  </Col>
                </Row>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Color </header>
                </Col>
                <Row
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid black',
                    padding: 10,
                    borderRadius: 15,
                  }}
                >
                  <h6 style={{ margin: '5px' }}> Color 4</h6>
                  <h6 style={{ margin: '5px' }}>Base Color</h6>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setblack_crushed_velvet(e.target.files[0])} />
                  </Input>
                  <Col>
                    <h6 style={{ margin: '5px' }}>HeadBoard Color</h6>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_linen_headboard3(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 1"
                          onChange={(e) => setgrey_linen_headboard_price3(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_seude_headboard3(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 2"
                          onChange={(e) => setgrey_seude_headboard_price3(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setcharcoal_chenille_headboard3(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 3"
                          onChange={(e) => setcharcoal_chenille_headboard_price3(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setblack_crushed_velvet_headboard3(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Headboard Price 4"
                          onChange={(e) => setblack_crushed_velvet_headboard_price3(e.target.value)}
                        />
                      </Input>
                    </Row>
                  </Col>
                  <Col>
                    <h6 style={{ margin: '5px' }}>Storage Color</h6>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_linen_storage3(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 1"
                          onChange={(e) => setgrey_linen_storage_price3(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setgrey_seude_storage3(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 2"
                          onChange={(e) => setgrey_seude_storage_price3(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setcharcoal_chenille_storage3(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 3"
                          onChange={(e) => setcharcoal_chenille_storage_price3(e.target.value)}
                        />
                      </Input>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                      <Input status="Danger">
                        <input type="file" onChange={(e) => setblack_crushed_velvet_storage3(e.target.files[0])} />
                      </Input>
                      <Input>
                        <input
                          type="tel"
                          placeholder="Storage Price 4"
                          onChange={(e) => setblack_crushed_velvet_storage_price3(e.target.value)}
                        />
                      </Input>
                    </Row>
                  </Col>
                </Row>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Mattressess</header>
                </Col>
                <Col>
                  <h6 style={{ margin: '5px' }}>Mattressess Images</h6>
                  <Row style={{ justifyContent: 'center' }}>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setgrey_linen_mattress(e.target.files[0])} />
                    </Input>
                    <Input>
                      <input
                        type="tel"
                        placeholder="Mattress Price 1"
                        onChange={(e) => setgrey_linen_mattress_price(e.target.value)}
                      />
                    </Input>
                  </Row>
                  <Row style={{ justifyContent: 'center' }}>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setgrey_seude_mattress(e.target.files[0])} />
                    </Input>
                    <Input>
                      <input
                        type="tel"
                        placeholder="Mattress Price 2"
                        onChange={(e) => setgrey_seude_mattress_price(e.target.value)}
                      />
                    </Input>
                  </Row>
                  <Row style={{ justifyContent: 'center' }}>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setcharcoal_chenille_mattress(e.target.files[0])} />
                    </Input>
                    <Input>
                      <input
                        type="tel"
                        placeholder="Mattress Price 3"
                        onChange={(e) => setcharcoal_chenille_mattress_price(e.target.value)}
                      />
                    </Input>
                  </Row>
                  <Row style={{ justifyContent: 'center' }}>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setblack_crushed_velvet_mattress(e.target.files[0])} />
                    </Input>
                    <Input>
                      <input
                        type="tel"
                        placeholder="Mattress Price 4"
                        onChange={(e) => setblack_crushed_velvet_mattress_price(e.target.value)}
                      />
                    </Input>
                  </Row>
                </Col>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Feet</header>
                </Col>
                <Col>
                  <h6 style={{ margin: '5px' }}>Feet Images</h6>
                  <Row style={{ justifyContent: 'center' }}>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setgrey_linen_feet(e.target.files[0])} />
                    </Input>
                    <Input>
                      <input
                        type="tel"
                        placeholder="Feet Price 1"
                        onChange={(e) => setgrey_linen_feet_price(e.target.value)}
                      />
                    </Input>
                  </Row>
                  <Row style={{ justifyContent: 'center' }}>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setgrey_seude_feet(e.target.files[0])} />
                    </Input>
                    <Input>
                      <input
                        type="tel"
                        placeholder="Feet Price 2"
                        onChange={(e) => setgrey_seude_feet_price(e.target.value)}
                      />
                    </Input>
                  </Row>
                  <Row style={{ justifyContent: 'center' }}>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setcharcoal_chenille_feet(e.target.files[0])} />
                    </Input>
                    <Input>
                      <input
                        type="tel"
                        placeholder="Feet Price 3"
                        onChange={(e) => setcharcoal_chenille_feet_price(e.target.value)}
                      />
                    </Input>
                  </Row>
                  <Row style={{ justifyContent: 'center' }}>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setblack_crushed_velvet_feet(e.target.files[0])} />
                    </Input>
                    <Input>
                      <input
                        type="tel"
                        placeholder="Feet Price 4"
                        onChange={(e) => setblack_crushed_velvet_feet_price(e.target.value)}
                      />
                    </Input>
                  </Row>
                </Col>
                <Col breakPoint={{ xs: 12, sm: 4 }}>
                  <Checkbox checked={checkbox[1]} status="Success" onChange={(value) => onChangeCheckbox(value, 1)}>
                    Add new and remove old existing product
                  </Checkbox>
                </Col>
              </Row>
              <Button style={{ alignItems: 'center', justifyContent: 'center' }} onClick={addVarient}>
                Save Product
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* Add Product For Beds Size End */}
    </Layout>
  );
};
export default InputPage;
