import React, { useMemo, useState } from "react";
import { getListings } from "../../services";
import { Table, Container, Select, Message, Button } from "semantic-ui-react";
import { needOptions, locationOptions } from "../../config";

import "./index.css";
const pointers = [1, 2, 3, 4, 5];

export default function Listings({
  translation: { listingsTitle, listingsText, listingsMessageText }
}) {
  const listings = useMemo(getListings);
  const [location, setLocation] = useState();
  const [need, setNeed] = useState();
  const list = useMemo(
    () =>
      listings.filter(([, , offer, offeredLocation, ,]) => {
        return (
          (!need || offer.includes(need)) &&
          (!location || offeredLocation.includes(location))
        );
      }),
    [listings, location, need]
  );
  return (
    <Container>
      <h1>{listingsTitle}</h1>
      {listingsText}
      <Message>{listingsMessageText}</Message>
      <div className="csf-listings-filter">
        <Select
          placeholder="Selectionnez vos besoin"
          options={needOptions}
          onChange={(l, { value }) => setNeed(value)}
        />
        <Select
          placeholder="Indiquez votre localisation"
          options={locationOptions}
          onChange={(l, { value }) => setLocation(value)}
        />
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Offre d’aide</Table.HeaderCell>
            <Table.HeaderCell>
              Arrondissement(s) / localisation
            </Table.HeaderCell>
            <Table.HeaderCell>Option(s) de contact </Table.HeaderCell>
            <Table.HeaderCell>Informations supplémentaires</Table.HeaderCell>
            <Table.HeaderCell>Signaler un problème</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {list.map(l => (
            <Table.Row key={l[4]}>
              {pointers.map(p => (
                <Table.Cell key={l[p]}>{l[p]}</Table.Cell>
              ))}
              <Table.Cell>
                <div className="csf-listings-problem-signal">
                  <Button
                    basic
                    icon="exclamation triangle"
                    as="a"
                    href="https://forms.gle/gMEn8S6PNcNAqoqz8"
                  ></Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}
