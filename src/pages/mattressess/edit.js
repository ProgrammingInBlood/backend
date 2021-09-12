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
import router from 'next/router';

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

  //Next API For Beds start type

  const [size, setsize] = useState('');
  //MAIN COLORS
  //STRUCTURE 1
  const [grey_linen_headboard, setgrey_linen_headboard] = useState('');

  var headboard_images = [];

  async function addVarient(e) {
    e.preventDefault();

    const getHeadboard = async () => {
      const data = new FormData();
      data.append('image', grey_linen_headboard);

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

    await getHeadboard();

    const sendData = async () => {
      const head = await headboard_images;

      const payload = {
        product_name: productName,
        description: productDescription,
        size: size,
        price: base_price,
        images: head[0],
      };

      try {
        await axios.put(`/api/mattress/update/${router.query.id}`, payload).then(async (response) => {
          console.log(response);
          setCount(count + 1);
          toastrRef.current?.add('SUCCESS', 'Product Updated Successfully', { ...toasterData, status: 'Success' });
        });
      } catch (err) {
        setCount(count + 1);
        toastrRef.current?.add('ERROR', 'Something went Wrong...Try Again', { ...toasterData, status: 'Danger' });
      }
    };

    sendData();
  }

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
            <CardBody style={{ alignItems: 'center' }}>
              <Row>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Product ID</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 10 }}>
                  <Input fullWidth status="Success">
                    <input type="text" placeholder="Product ID" required value={router.query.id} />
                  </Input>
                </Col>
              </Row>
            </CardBody>
            <CardBody>
              {/* <Row style={{ height: 300, zIndex: 9999 }}>
                <Col breakPoint={{ xs: 12, md: 2 }}>
                  <header>Category</header>
                </Col>
                <Col breakPoint={{ xs: 12, md: 10 }}>
                  <Select options={statusOption} placeholder="Select Category" onChange={(e) => setCategory(e.value)} />
                </Col>
              </Row> */}
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
                  <header>Mattressess </header>
                </Col>
                <Row>
                  <h6 style={{ margin: '5px' }}> Mattressess Image</h6>

                  <Col>
                    <Input status="Danger">
                      <input type="file" onChange={(e) => setgrey_linen_headboard(e.target.files[0])} />
                    </Input>
                  </Col>
                  <Col></Col>
                </Row>
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
