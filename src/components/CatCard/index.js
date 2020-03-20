import React from "react";
import { Image, Card } from "semantic-ui-react";

export default function CatCard() {
  return (
    <div>
      <Card>
        <Image src="https://cataas.com/cat/gif" alt="a funny cat" />
        <Card.Content extra>Keep Calm & Stay à la maison</Card.Content>
      </Card>
    </div>
  );
}
