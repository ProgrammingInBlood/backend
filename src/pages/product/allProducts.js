import { Status, Size, Shape } from '@paljs/ui/types';
import { Card, CardBody } from '@paljs/ui/Card';
import { Button, ButtonLink } from '@paljs/ui/Button';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useEffect, useState } from 'react';
import Layout from 'Layouts';
import { useRouter } from 'next/router';
import axios from 'axios';
const style = { marginBottom: '1.5rem' };

export default function ButtonPage() {
  const router = useRouter();
  const status = ['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Basic', 'Control'];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getProducts() {
      axios.get(`https://bedsdivanapis.herokuapp.com/ukbeds/?format=json`).then((response) => {
        setProducts(response.data);
      });
    }
    getProducts();
  }, []);

  console.log(products);

  const deleteProduct = (id) => {
    axios.delete(`https://bedsdivanapis.herokuapp.com/ukbeds/${id}/`).then((response) => {
      console.log(response);
      router.reload();
    });
  };

  return (
    <Layout title="Button">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          {!products ? (
            <h1>Loading</h1>
          ) : (
            products?.map((product) => {
              console.log(product);
              return (
                <Card key={product.id}>
                  <header>ID=({product.id})</header>
                  <CardBody>
                    <p>Brand : {product.size}</p>
                    <p>Price : {product.base_price}</p>
                    <p>Headboard Price : {product.Headboard_Price}</p>
                    <p>Storage Price : {product.Storage_Price}</p>
                    <p>Feet price: {product.Feet_Price}</p>
                    <p>mattresses Price : {product.mattresses_Price}</p>
                    <p>description: {product.Description}</p>
                    <p>timestamp: {product.created_at}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button
                        fullWidth
                        appearance="hero"
                        status="Danger"
                        style={{ maxWidth: '45%' }}
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete Product
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              );
            })
          )}

          {/* <Card>
            <header>Button Hero</header>
            <CardBody>
              <Row>
                {status.map((state) => (
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth appearance="hero" status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Colors</header>
            <CardBody>
              <Row>
                {status.map((state) => (
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Outline</header>
            <CardBody>
              <Row>
                {status.map((state) => (
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth appearance="outline" status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Size</header>
            <CardBody>
              <Row middle="xs">
                {['Tiny', 'Small', 'Medium', 'Large', 'Giant'].map((size) => (
                  <Col key={size} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth size={size}>
                      {size}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Shape</header>
            <CardBody>
              <Row middle="xs">
                {['Rectangle', 'SemiRound', 'Round'].map((shape) => (
                  <Col key={shape} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth shape={shape}>
                      {shape}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Elements</header>
            <CardBody>
              <Row middle="xs">
                <Col style={style} breakPoint={{ xs: true }}>
                  <Button fullWidth shape="Rectangle">
                    Button
                  </Button>
                </Col>
                <Col style={style} breakPoint={{ xs: true }}>
                  <ButtonLink onClick={() => router.push('/')} fullWidth shape="Rectangle">
                    Link
                  </ButtonLink>
                </Col>
              </Row>
            </CardBody>
          </Card> */}
        </Col>
      </Row>
    </Layout>
  );
}
