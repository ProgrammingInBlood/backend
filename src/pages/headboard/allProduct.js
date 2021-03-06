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
  const [page, setPage] = useState(1);
  const [serverpage, setServerPage] = useState();

  useEffect(() => {
    function getProducts() {
      axios.get(`/api/headboard?page=${page}&limit=20`).then((response) => {
        setProducts(response.data.data);
        setServerPage(response.data.totalPages);
        setPage(page + 1);
      });
    }
    getProducts();
  }, []);

  console.log(products);

  const loadNextPage = async () => {
    axios.get(`/api/headboard?page=${page}&limit=20`).then((response) => {
      setProducts([...products, ...response.data.data]);
      setServerPage(response.data.totalPages);
      setPage(page + 1);
    });
  };

  const deleteProduct = (id) => {
    axios.delete(`/api/headboard/delete/${id}`).then((response) => {
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
                <Card key={product._id}>
                  <header>ID=({product._id})</header>
                  <CardBody>
                    <p>Product name: {product.product_name}</p>
                    <p>Size: {product.size}</p>
                    <p>Price : {product.price}</p>
                    <p>description: {product.description}</p>
                    <p>
                      images:
                      <br />
                      {product.images.map((image) => (
                        <>
                          {image.url}
                          <br />
                        </>
                      ))}
                    </p>

                    <p>timestamp: {product.timestamp}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button
                        fullWidth
                        appearance="hero"
                        status="Primary"
                        style={{ maxWidth: '45%' }}
                        onClick={() => router.push(`/headboard/edit?id=${product._id}`)}
                      >
                        Edit Product
                      </Button>
                      <Button
                        fullWidth
                        appearance="hero"
                        status="Danger"
                        style={{ maxWidth: '45%' }}
                        onClick={() => deleteProduct(product._id)}
                      >
                        Delete Product
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              );
            })
          )}

          <Button
            style={{ display: page <= serverpage ? 'block' : 'none' }}
            fullWidth
            appearance="hero"
            status="Success"
            onClick={loadNextPage}
          >
            Load more products
          </Button>
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
