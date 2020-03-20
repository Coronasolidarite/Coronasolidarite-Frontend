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
import { CatCard } from "../../components";

export default function() {
  return (
    <Container>
      <div className="csf-index">
        <h1>Un réseau d'aide au voisinage à Paris</h1>
        <p>
          Compte tenu des nouvelles dispositions gouvernementales face au
          coronavirus à Paris et dans toute la France, tous les déplacements à
          travers le territoire sont fortement réduits. En ces temps difficiles
          l’esprit de solidarité est primordial et nous devons tous en tant que
          citoyens penser aux plus nécessiteux. Cette page a pour but de mettre
          en contact les personnes ayant besoin d’aide dans divers domaines
          (courses, conseil, soutien moral,...) bien entendu dans le respect des
          consignes de sécurité. N'hésitez pas à partager ce site aussi bien à
          ceux qui seraient susceptibles d’aider la communauté mais aussi qu’à
          ceux qui en auraient besoin !
        </p>

        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical className="csf-index-vertical-devider">
              Ou
            </Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="life ring" />
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
                <Button
                  primary
                  as="a"
                  href="https://forms.gle/7Qux5zpG9FiioFUy9"
                >
                  Remplir le formulaire
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <p>
          Nous tenons à vous informer que vous seuls êtes tenus responsables de
          l'utilisation de cette plateforme. Veuillez faire attention vous êtes
          en contact avec des étrangers. La sécurité, la fiabilité et la qualité
          des prestataires ne peuvent être garanties. Veillez également à bien
          respecter les consignes de sécurité actuellement mises en place.
          Evitez donc par conséquent tout contact direct. Privilegiez les moyens
          tels que le téléphone, mail ou messagerie instantanné/VoIP (Skype,
          Discord, Messenger) !
        </p>

        <Message>
          Dans le but de venir en aide à un maximum de personnes en difficultés.
          Si vous disposez d’un moyen de relayer notre plateforme ou si vous
          menez actuellement un projet solidaire en relation avec la situation
          actuel, n'hésitez pas à nous contacter. <br />
          <br />
          <i>L’union fait la force ! </i>
          <p>
            Aidez-nous à améliorer la plateforme en nous partageant vos
            commentaires, vos avis ou bien vos interrogations. Nous veillerons à
            vous répondre personnellement :^)
          </p>
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
