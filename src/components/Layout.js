import React from "react";
import {Layout, Carousel} from 'antd';
import AppBar from "./AppBar.js";
import { Col, Row, Tabs} from 'antd';
import OnSaleCard from "../components/onSaleCard.js";
import ArtInfoTab from "../components/ArtInfoTab.js";
const { Header, Content } = Layout;

const firstCarouselStyle = {
    color: '#fff',
    textAlign: 'left',
    background: '#393D46',
    display: 'flex',
    padding: '5%',
  };

const secondCarouselStyle = {
    color: '#fff',
    textAlign: 'left',
    background: '#EADAF2',
    display: 'flex',
    padding: '5%'
};


const AppLayout = (props) => {
  return (
    <Layout>
        <Header style={{background: "white", borderBottom: "black"}}>
            <AppBar></AppBar>
        </Header>
        <Content style={{backgroundColor:"#FCF8FF"}}>
            <Row gutter={[48, 0]} align='middle'>
                <Col
                    span={24}
                    style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"20%", paddingRight: "20%", backgroundColor: "white"}}
                >
                    <div className="navigatorLinks" style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="/">Collectibles</a>  
                        <a href="/">Game Items</a>  
                        <a href="/">Avatars</a>  
                        <a href="/">Digital assets</a>  
                        <a href="/">Membership</a>  
                        <a href="/">Education token</a>  
                        <a href="/">Real world asset</a>  
                    </div>
                </Col>
                <Col span={24}>
                <Carousel autoplay>
                    <div>
                        <h3 style={firstCarouselStyle}>
                            <div style={{marginRight:"50px"}}>
                                <h1 style={{color: 'white', fontWeight: "700"}}>100 year old painting</h1>
                                <h3 style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temor sit amet ipsum dolor</h3>
                                <img src="/img/hero_art1.png" alt="hero1"/>
                            </div>
                            <div>
                                <img src="/img/hero_art2.png" alt="hero1" />
                            </div>
                        </h3>
                    </div>
                    <div>
                        <h3 style={secondCarouselStyle}>
                            <div>
                                <h1>Special Auction</h1>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temor sit amet ipsum dolor</h2>
                            </div>
                            <div>
                                <img src="/img/hero_art3.png" alt="hero1" style={{height: '90%'}}/>
                            </div>
                        </h3>
                    </div>
            </Carousel>
            </Col>
            <Col span={24} style={{display: "flex", padding:"5%", justifyContent:"space-around"}}>
                <div>
                    <img src="/img/girlwithpearl.png" alt="girl with pearl" style={{marginRight: "20px"}}/>
                </div>
                <div>
                    <h3>100 year old Painting</h3>
                    <h1 className="artName">Girl With a Pearl Earring</h1>
                    <div>
                     <h3>Johannes Vermeer</h3>
                     <h3>1665</h3>
                    </div>
                    <ArtInfoTab></ArtInfoTab>
                </div>
            </Col>
            <Col span={24} style={{display: "flex", padding:"5%",justifyContent:"space-around"}}>
                <div>
                    <h3>Purely digital NFT</h3>
                    <h1 className="artName">The Starry Night</h1>
                    <div>
                     <h3>Vincent van Gogh</h3>
                     <h3>1889</h3>
                    </div>
                    <ArtInfoTab></ArtInfoTab>
                </div>
                <div>
                    <img src="/img/starynight.png" alt="girl with pearl" style={{marginLeft: "20px"}}/>
                </div>
            </Col>
            <Col span={24} style={{display: "flex",padding:"5%",justifyContent:"space-around"}}>
                <div>
                    <img src="/img/sandrobotticeli.png" alt="girl with pearl" style={{marginRight: "20px"}}/>
                </div>
                <div>
                    <h3>Purely digital NFT</h3>
                    <h1 className="artName">Sandro Botticelli</h1>
                    <div>
                        <h3>Vincent van Gogh</h3>
                        <h3>1889</h3>
                    </div>
                    <ArtInfoTab></ArtInfoTab>
                </div>
            </Col>
            <Col span={24} style={{display: "flex",padding:"10%", justifyContent:"space-around"}}>
                <div>
                    <h3>Purely digital NFT</h3>
                    <h1 className="artName">The Garden of Earthly Delights</h1>
                    <div>
                     <h3>Hieronymus Bosch</h3>
                     <h3>1503</h3>
                    </div>
                    <ArtInfoTab></ArtInfoTab>
                </div>
                <div>
                    <img src="/img/garden.png" alt="girl with pearl"/>
                </div>
            </Col>
            <Col span={24} style={{display: "flex", flexDirection:"column",padding:"5%" }}>
                <div>
                    <h2>On Sale</h2>
                </div>
                <div style={{display:"flex" }}>
                    <OnSaleCard style={{margin: "10px"}}></OnSaleCard>
                    <OnSaleCard style={{margin: "10px"}}></OnSaleCard>
                    <OnSaleCard style={{margin: "10px"}}></OnSaleCard>
                    <OnSaleCard style={{margin: "10px"}}></OnSaleCard>
                </div>
            </Col>
            <Col span={24} style={{textAlign: "center", backgroundColor: "#817F7F" }}>
                <a href='#top' style={{color: "white"}}>Back to top ^</a>
            </Col>
            <Col span={24} className="footer" style={{display: "flex", justifyContent:"space-around", color: "white",backgroundColor: "#2C0745", paddingTop: "20px", paddingBottom: "20px"}}>
                <div>
                    <img src="/img/mintableapplogo.svg" alt="mintable"/>
                    <h3>Join our community</h3>
                </div>
                <div>
                    <div>
                       <h3>My account</h3>
                    </div>
                    <div className="footerLinks">
                        <a href="/">Create a store</a>  
                        <a href="/">My profile</a>  
                        <a href="/">List an item for sale</a>  
                        <a href="/">Browse</a> 
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Need help?</h3>
                    </div>
                    <div className="footerLinks">
                        <a href="/">FAQ</a>  
                        <a href="/">Mintable guide</a>  
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Buy an item</h3>
                    </div>
                    <div className="footerLinks">
                        <a href="/">Digital items</a>  
                        <a href="/">Stores</a>  
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Legal</h3>
                    </div>
                    <div className="footerLinks">
                        <a href="/">Privacy policy</a>  
                        <a href="/">Terms of use</a>  
                    </div>
                </div>
            </Col>
            </Row>
        </Content>
    </Layout>
  );
};

export default AppLayout;
