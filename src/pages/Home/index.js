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
        <h1>Solidarité citoyenne</h1>
        <p>
        Compte tenu des nouvelles dispositions gouvernementales face au coronavirus à Paris et dans toute la France,
        tous les déplacement à travers le territoire sont fortement réduits. En ces temps difficiles l’esprit de solidarité
        est primordial et nous devons tous en tant que citoyens penser aux plus nécessiteux. Cette page a pour but de mettre 
        en contact les personnes ayant besoin d’aide dans divers domaines (courses, conseil, accompagnement,...) bien entendu dans le 
        respect des consignes de sécurité et dans le respect de l’esprit de solidarité.N'hésitez pas à partager ce site aussi 
        bien à ceux qui seraient susceptibles d’aider la communauté mais aussi qu’à ceux qui en auraient besoin !

        </p>

        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Ou</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                   Recheche d'assisance
                </Header>

                <Button primary as={Link} to="/listings">
                  Demander de l’aide
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="world" />
                  Offrir de l'assistance
                </Header>
                <Button primary as={Link}>
                  Remplir le formulaire
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <p>
        Nous tenons à vous tenir informés que vous seuls êtes tenus responsables de l'utilisation de cette plateforme.
        Veuillez faire attention - vous êtes en contact avec des étrangers. La sécurité, la fiabilité et la qualité des 
        prestataires ne peuvent être garanties. Veillez également à bien respecter les consignes de sécurité actuellement 
        mises en place ! 
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
            Contactez-nous
          </Button>
        </div>
      </div>
    </Container>
  );
}
