import React, { useMemo, useState } from "react";
import { getListings } from "../../services";
import { Table, Container, Select, Message } from "semantic-ui-react";
import { needOptions, locationOptions } from "../../config";

export default function Listings() {
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
      <h1>Liste des offres d'aide</h1>
      <p>
        Les personnes que vous trouvez dans cette liste ont aimablement accepté
        d'offrir leur aide concernant le virus corona.
        <br />
        Vous pouvez parcourir la liste sur cette page ou filtrer les entrées en
        utilisant la barre de recherche ci-dessous.
        <br />
        Si nécessaire, vous pouvez contacter directement l'aide respective.
        <br />
        Nous vous rappelons qu'afin de vous protéger, mais également afin de
        protéger les personnes au grand coeur qui offrent leur aide, evitez les
        contacts physiques directs, les déplacements non-nécessaires et
        privilégiez les communications ‘virtuelles’ telles que le telephone /
        Mail / VoIP (Skype/Discord/Whatsapp)
        <br />
      </p>
      <Message>
        Si vous avez des préoccupations telles que la modification ou la
        suppression de vos données, veuillez contacter
        coronasolidarite@gmail.com (idéalement via l'option de contact que vous
        avez donnée)
      </Message>
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
          <Table.Row>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Offre d’aide</Table.HeaderCell>
            <Table.HeaderCell>
              Arrondissement(s) / localisation
            </Table.HeaderCell>
            <Table.HeaderCell>Option (s) de contact </Table.HeaderCell>
            <Table.HeaderCell>Information supplémentaire</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {list.map(l => (
            <Table.Row key={l[4]}>
              {l.map(e => (
                <Table.Cell key={e}>{e}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}
