import React from 'react';
import Iframe from 'react-iframe';
import { useLocation } from 'react-router-dom';

function Frame() {
    const {state} = useLocation;
    // const recData={
    //     name: state.dname,
    //     hash: state.hash,
    // }
  return (
    <div>
        {/* {console.log("Hello")}; */}
    <Iframe url="https://bafybeiefho6rghjstyyjdd5mnel3nfbro6hu4n5xrvfsasiw7s5kmycunm.ipfs.dweb.link/noob.txt"
        width="800px"
        height="800px"
        id=""
        className=""
        display="block"
        position="relative"/>
    </div>
  )
}

export default Frame