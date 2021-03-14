import React from "react";
import {Input} from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

const AppLayout = (props) => {
  return (
    <div id="top" style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
        <div style={{display:"flex", alignItems:"center"}}>
            <img src="/img/mintableapplogo.svg" alt="mintable-logo" style={{marginRight:"20px"}}/>
            <Search placeholder="input searchee text" onSearch={onSearch} enterButton />
        </div>
        <div style={{display: "flex", justifyContent: "space-between" }}>
            <div className="appBarLinks">
                <a href="/">Sell</a>
                <a href="/" style={{color: "#5526E9"}}>Browse</a>
                <a href="/">Create Store</a>
            </div>
            <div> 
                <h3>Hello, <strong>Zach</strong></h3>
            </div>
        </div>
        
    </div>
  );
};

export default AppLayout;
