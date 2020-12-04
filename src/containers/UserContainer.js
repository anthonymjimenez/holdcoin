import React from "react";
import CryptoLinkContainer from "./CryptoLinkContainer";
import { NavLink } from "react-router-dom";
import { getUnique } from "../utils/utils";
import { useAuth } from "../context/use-auth";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

function UserContainer({cryptos}) {

  console.log(cryptos)
  return (
    <>
    <Row>
          <Col lg="10" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Your Cryptos</CardTitle>
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
                    <CryptoLinkContainer cryptos={cryptos} />
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <NavLink
            to={{
              pathname: `/blockfolio`,
            }}
          >
          Blockfolio
        </NavLink> */}
    </>
  );
}

export default UserContainer;
