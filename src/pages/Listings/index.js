import React, { useMemo } from "react";
import { getListings } from "../../services";
import { Table, Container } from "semantic-ui-react";

export default function Listings() {
  const listings = useMemo(getListings);
  return (
    <Container>
      <h1>Liste des offres d'aide</h1>
      <Table>
        <Table.Header>
          <Table.HeaderCell>Nom</Table.HeaderCell>
          <Table.HeaderCell>Arrondissement</Table.HeaderCell>
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
