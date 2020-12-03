import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    );
  }
}
