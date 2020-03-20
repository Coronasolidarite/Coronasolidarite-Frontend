import React from "react";
import { Image, Card } from "semantic-ui-react";

export default function CatCard({ content }) {
  return (
    <div>
      <Card>
        <Image src="https://cataas.com/cat/gif" alt="a funny cat" />
        <Card.Content extra>{content}</Card.Content>
      </Card>
    </div>
  );
}
