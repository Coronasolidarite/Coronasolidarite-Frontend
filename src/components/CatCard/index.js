import React from "react";
import { Image, Card } from "semantic-ui-react";

export default function CatCard() {
  return (
    <div>
      <Card>
        <Image src="https://cataas.com/cat/gif" alt="a funny cat" />
        <Card.Content extra>Regarder un chat et garder son calme.</Card.Content>
      </Card>
    </div>
  );
}
