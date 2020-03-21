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

import paris from "./paris.jpg";
export default function({
  translation: {
    indexTitleHeader,
    indexTitleText,
    or,
    searchForHelp,
    searchForHelpButton,
    offerHelp,
    offerHelpButton,
    contactUs,
    indexMainText,
    indexMessageFirst,
    indexMessageSecond,
    indexMessageThird
  }
}) {
  return (
    <Container>
      <div className="csf-index">
        <h1>{indexTitleHeader}</h1>
        <img src={paris} alt="Paris" className="csf-index-image" />
        <p>{indexTitleText}</p>

        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical className="csf-index-vertical-devider">
              {or}
            </Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="life ring" />
                  {searchForHelp}
                </Header>

                <Button primary as={Link} to="/listings">
                  {searchForHelpButton}
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="world" />
                  {offerHelp}
                </Header>
                <Button
                  primary
                  as="a"
                  href="https://forms.gle/7Qux5zpG9FiioFUy9"
                >
                  {offerHelpButton}
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <p>{indexMainText}</p>

        <Message>
          {indexMessageFirst}
          <br />
          <br />
          <i>{indexMessageSecond}</i>
          <p>{indexMessageThird}</p>
        </Message>
        <div className="csf-index-contact">
          <Button
            secondary
            id="csf-index-contact-button"
            icon="paper plane"
            content={contactUs}
            as="a"
            href="mailto:coronasolidarite@gmail.com"
          ></Button>
        </div>
      </div>
    </Container>
  );
}
