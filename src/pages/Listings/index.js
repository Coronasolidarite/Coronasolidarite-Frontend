import React, { useMemo } from "react";
import { Header } from "../../components";
import { getListings } from "../../services";
import { Table, Container } from "semantic-ui-react";

export default function Listings() {
  const listings = useMemo(getListings);
  return (
    <div>
      <Container>
        <h1>Listings</h1>
        <Table>
          <Table.Header>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>District</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {listings.map(l => (
              <Table.Row>
                {l.map(e => (
                  <Table.Cell>{e}</Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
