import React, { useMemo, useState } from "react";
import { getListings } from "../../services";
import { Table, Container, Select } from "semantic-ui-react";
import { needOptions, locationOptions } from "../../config";

export default function Listings() {
  const listings = useMemo(getListings);
  const [page, setPage] = useState(0);
  const [location, setLocation] = useState();
  const [need, setNeed] = useState();
  const list = useMemo(
    () =>
      listings.filter(
        ([, offer, offeredLocation, ,]) =>
          (!need || need === offer) &&
          (!location || location === offeredLocation)
      ),
    [listings, location, need]
  );
  return (
    <Container>
      <h1>Listings</h1>
      <div className="csf-listings-filter">
        <Select
          placeholder="Select your need"
          options={needOptions}
          onChange={(l, { value }) => setNeed(value)}
        />
        <Select
          placeholder="Select your location"
          options={locationOptions}
          onChange={(l, { value }) => setLocation(value)}
        />
      </div>
      <Table>
        <Table.Header>
          <Table.HeaderCell>Nom</Table.HeaderCell>
          <Table.HeaderCell>Offre d’aide</Table.HeaderCell>
          <Table.HeaderCell>Arrondissement(s) / localisation</Table.HeaderCell>
          <Table.HeaderCell>Option (s) de contact </Table.HeaderCell>
          <Table.HeaderCell>Information supplémentaire</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {list.map(l => (
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
