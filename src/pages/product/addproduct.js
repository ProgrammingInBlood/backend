import Select from '@paljs/ui/Select';
import { Radio } from '@paljs/ui/Radio';
import { Card, CardBody } from '@paljs/ui/Card';
import { Checkbox } from '@paljs/ui/Checkbox';
import { InputGroup } from '@paljs/ui/Input';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from 'Layouts';
import { Button } from '@paljs/ui/Button';
import { Toastr, ToastrRef, ToastrProps } from '@paljs/ui/Toastr';

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

  //VARIABLE INITIALIZATION

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [base_price, setbase_price] = useState('');

  //Next API For Beds start type

  const [size, setsize] = useState('');
  //MAIN COLORS
  const [grey_linen, setgrey_linen] = useState('');
  const [grey_seude, setgrey_seude] = useState('');
  const [charcoal_chenille, setcharcoal_chenille] = useState('');
  const [black_crushed_velvet, setblack_crushed_velvet] = useState('');

  console.log(grey_linen);

  //STORAGE COLORS

  const [grey_linen_storage, setgrey_linen_storage] = useState('');
  const [grey_seude_storage, setgrey_seude_storage] = useState('');
  const [charcoal_chenille_storage, setcharcoal_chenille_storage] = useState('');
  const [black_crushed_velvet_storage, setblack_crushed_velvet_storage] = useState('');

  //MATTRESSES COLORS

  const [grey_linen_mattress, setgrey_linen_mattress] = useState('');
  const [grey_seude_mattress, setgrey_seude_mattress] = useState('');
  const [charcoal_chenille_mattress, setcharcoal_chenille_mattress] = useState('');
  const [black_crushed_velvet_mattress, setblack_crushed_velvet_mattress] = useState('');

  //FEET COLORS

  const [grey_linen_feet, setgrey_linen_feet] = useState('');
  const [grey_seude_feet, setgrey_seude_feet] = useState('');
  const [charcoal_chenille_feet, setcharcoal_chenille_feet] = useState('');
  const [black_crushed_velvet_feet, setblack_crushed_velvet_feet] = useState('');

  //HEADBOARD COLORS

  const [grey_linen_headboard, setgrey_linen_headboard] = useState('');
  const [grey_seude_headboard, setgrey_seude_headboard] = useState('');
  const [charcoal_chenille_headboard, setcharcoal_chenille_headboard] = useState('');
  const [black_crushed_velvet_headboard, setblack_crushed_velvet_headboard] = useState('');

  const [Headboard_Price, setHeadboard_Price] = useState('');
  const [Storage_Price, setStorage_Price] = useState('');
  const [mattresses_Price, setmattresses_Price] = useState('');
  const [feet_price, setfeet_price] = useState('');

  async function addVarient() {
    if (
      (productDescription, productName, base_price, feet_price, Storage_Price, Headboard_Price, mattresses_Price, size)
    ) {
      const formData = new FormData();
      formData.append('size', size);
      formData.append('base_price', base_price);

      formData.append('grey_linen', grey_linen);
      formData.append('grey_seude', grey_seude);
      formData.append('charcoal_chenille', charcoal_chenille);
      formData.append('black_crushed_velvet', black_crushed_velvet);

      formData.append('Headboard_Price', Headboard_Price);
      formData.append('grey_linen1', grey_linen_headboard);
      formData.append('grey_seude1', grey_seude_headboard);
      formData.append('charcoal_chenille1', charcoal_chenille_headboard);
      formData.append('black_crushed_velvet1', black_crushed_velvet_headboard);

      formData.append('Storage_Price', Storage_Price);
      formData.append('grey_linen2', grey_linen_storage);
      formData.append('grey_seude2', grey_seude_storage);
      formData.append('charcoal_chenille2', charcoal_chenille_storage);
      formData.append('black_crushed_velvet2', black_crushed_velvet_storage);

      formData.append('Storage_Price', Storage_Price);
      formData.append('grey_linen2', grey_linen_storage);
      formData.append('grey_seude2', grey_seude_storage);
      formData.append('charcoal_chenille2', charcoal_chenille_storage);
      formData.append('black_crushed_velvet2', black_crushed_velvet_storage);

      formData.append('mattresses_Price', mattresses_Price);
      formData.append('grey_linen3', grey_linen_mattress);
      formData.append('grey_seude3', grey_seude_mattress);
      formData.append('charcoal_chenille3', charcoal_chenille_mattress);
      formData.append('black_crushed_velvet3', black_crushed_velvet_mattress);

      formData.append('Feet_Price', feet_price);
      formData.append('grey_linen4', grey_linen_feet);
      formData.append('grey_seude4', grey_seude_feet);
      formData.append('charcoal_chenille4', charcoal_chenille_feet);
      formData.append('black_crushed_velvet4', black_crushed_velvet_feet);

      formData.append('product_name', productName);
      formData.append('Description', productDescription);

      console.log(...formData);
      let result = await fetch('https://bedsdivanapis.herokuapp.com/ukbeds/', {
        method: 'POST',
        body: formData,
      });

      console.log(result);
      if ((await result.ok) == true) {
        setCount(count + 1);
        toastrRef.current?.add('SUCCESS', 'Product Added Successfully', { ...toasterData, status: 'Success' });
      } else {
        setCount(count + 1);
        toastrRef.current?.add('ERROR', 'Somethingwent Wrong...Try Again', { ...toasterData, status: 'Danger' });
      }
    } else {
      setCount(count + 1);
      toastrRef.current?.add('ERROR', 'Please Input All The Fields And Try Again', {
        ...toasterData,
        status: 'Danger',
      });
    }
  }

  const [checkbox, setCheckbox] = useState({
    1: false,
    2: false,
    3: false,
  });

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
                  <header>Color</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_linen(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_seude(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setcharcoal_chenille(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setblack_crushed_velvet(e.target.files[0])} />
                  </Input>
                </Col>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Storage</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input size="Small" status="Danger">
                    <input type="text" onChange={(e) => setStorage_Price(e.target.value)} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_linen_storage(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_seude_storage(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setcharcoal_chenille_storage(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setblack_crushed_velvet_storage(e.target.files[0])} />
                  </Input>
                </Col>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>HeadBoard</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input size="Small" status="Danger">
                    <input type="text" onChange={(e) => setHeadboard_Price(e.target.value)} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_linen_headboard(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_seude_headboard(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setcharcoal_chenille_headboard(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setblack_crushed_velvet_headboard(e.target.files[0])} />
                  </Input>
                </Col>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Mattressess</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input size="Small" status="Danger">
                    <input type="text" onChange={(e) => setmattresses_Price(e.target.value)} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_linen_mattress(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_seude_mattress(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setcharcoal_chenille_mattress(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setblack_crushed_velvet_mattress(e.target.files[0])} />
                  </Input>
                </Col>
              </Row>

              <Row style={{ marginTop: '20px' }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Feet</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input size="Small" status="Danger">
                    <input type="text" onChange={(e) => setfeet_price(e.target.value)} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_linen_feet(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setgrey_seude_feet(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setcharcoal_chenille_feet(e.target.files[0])} />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <Input status="Danger">
                    <input type="file" onChange={(e) => setblack_crushed_velvet_feet(e.target.files[0])} />
                  </Input>
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
