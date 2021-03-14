import React from "react";
import {Tabs} from 'antd';
const {TabPane} = Tabs;

const ArtInfoTab = (props) => {
  return (
        <Tabs defaultActiveKey="1">
                        <TabPane tab="About" key="1">
                        This spring, Christie’s is pleased to present a special First Open online-only auction, featuring a diverse selection of post-war and contemporary art for new and seasoned collectors alike. Led by two illustrious paintings by Sam Gilliam, First Open also features works by Janet Taylor Pickett, John Kacere, CRASH, and Jennifer Steinkamp. Special offerings include a grouping of Alexander Calder jewelry alongside cutting-edge contemporary art from Tomoo Gokita and Nicole Eisenman.  
                        </TabPane>
                        <TabPane tab="Artist" key="2">
                        Johannes Vermeer
                        </TabPane>
                        <TabPane tab="Terms of sale" key="3">
                        Terms and conditions
                        </TabPane>
                    </Tabs>
  );
};

export default ArtInfoTab;
