import React from 'react';
import { Footer, InfoSection } from '../../components';
import Features from '../../components/Feature/feature';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';
import { useState, useEffect } from 'react'

const Home = () => {
    const [walletAddress, setWalletAddress] = useState("");

    async function requestAccount() {
        console.log('Requesting account...');

        // ❌ Check if Meta Mask Extension exists 
        if (window.ethereum) {
            console.log('detected');

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.log('Error connecting...');
            }

        } else {
            alert('Meta Mask not detected');
        }
    }
    useEffect(() => {
        requestAccount();
    }, [])





    useEffect(() => {
        const shareToken = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: walletAddress })
        };
        fetch('https://reqres.in/api/token', shareToken)
            .then(response => response.json());
    }, [walletAddress]);


    return (
        <>
            <button

                onClick={requestAccount}

            >Create a new Wallet</button>
            <InfoSection {...homeObjOne} />

            <Features />

            {/* <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />.
            */}
            <Footer />
        </>
    )
}

export default Home;