import React, { useMemo } from "react";
import { getListings } from "../../services";
import { Table, Container } from "semantic-ui-react";

export default function Listings() {
  const listings = useMemo(getListings);
  return (
    <Container>
      <h1>Listings</h1>
      <Table>
        <Table.Header>
          <Table.HeaderCell>Nom</Table.HeaderCell>
          <Table.HeaderCell>Offre d’aide</Table.HeaderCell>
          <Table.HeaderCell>Arrondissement(s) / localisation</Table.HeaderCell>
          <Table.HeaderCell>Option (s) de contact </Table.HeaderCell>
          <Table.HeaderCell>Information supplémentaire</Table.HeaderCell>
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
  );
}
