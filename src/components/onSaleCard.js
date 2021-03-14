import React from "react";
import {Card} from 'antd';
const { Meta } = Card;

const AppLayout = (props) => {
  return (
    
    <Card
    hoverable
    style={{ width: 240 , marginRight: "50px"}}
    cover={<img alt="example" src="/img/pearlearring.png" />}
  >
    <Meta title="Girl With a Pearl Earring" description="Johannes Vermeer - 1965" />
</Card>
  );
};

export default AppLayout;
