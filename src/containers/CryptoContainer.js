import React, { useEffect, useState } from "react";
import CryptoLinkContainer from "./CryptoLinkContainer";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";


function CryptoContainer({cryptos}) {
  

  return (
    <>
      <Row>
          <Col lg="10" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Explore the market</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Symbol</th>
                      <th className="text-center">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CryptoLinkContainer cryptos={cryptos}/>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </>
  );
}

export default CryptoContainer;
