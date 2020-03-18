import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Header,
  Segment,
  Grid,
  Divider,
  Icon,
  Message
} from "semantic-ui-react";

import "./index.css";

export default function() {
  return (
    <Container>
      <div className="csf-index">
        <h1>Index page</h1>
        <p>
          Mit der Zeit steigen die Zahlen der Infizierten und Hilfsbedürftigen
          an. Menschen, die nicht auf Familie oder Freunde zurückgreifen können,
          insbesondere die, die zu einer Risikogruppe gehören, sind auf fremde
          Hilfe angewiesen! Diese Seite erleichtert eine "erweiterte
          Nachbarschaftshilfe" in Berlin. Teile diese Seite, um deinen
          Mitmenschen zu helfen! #keinepanik #unleashhelp
        </p>

        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Find a Helper
                </Header>

                <Button primary as={Link} to="/listings">
                  Get Help
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="world" />
                  Solidarité
                </Header>
                <Button primary as={Link}>
                  Offer Help
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <p>
          Bei der Nutzung dieses Angebots handelst du eigenverantwortlich. Sei
          bitte vorsichtig – Du stehst im Kontakt zu Fremden. Die Sicherheit,
          Zuverlässigkeit und Qualität der Anbieter kann nicht garantiert
          werden.
        </p>
        <Message>
          Um so viele Menschen wie möglich von der Idee, füreinander da zu sein,
          anzustecken, suchen wir "erfolgreiche" Vermittlungen, bei denen dieses
          Bürgerportal helfen konnte. Es muss nichts Spektakuläres sein, denn
          auch kleine Dinge können eine große Hilfe sein. Da wir nicht
          nachverfolgen, wer nun schlussendlich wem geholfen hat: meldet Euch
          gerne per Mail, da es diesbezüglich Medienanfragen gibt.
        </Message>
        <div className="csf-index-contact">
          <Button secondary as="a" href="mailto:coronasolidarite@gmail.com">
            Contact Us
          </Button>
        </div>
      </div>
    </Container>
  );
}
