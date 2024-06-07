"use client"

import Image from "next/image";
import React, { useEffect } from "react";
import { mintNFT } from "../lib/web3";

const MintComponent = () => {


  const handleMintOne = async () => {
    try {
      console.log("minting one")


      await mintNFT(1)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

  })


  return (
    <section className="w-full flex-col flex gap-4">

      <header>
        <h2 className="text-4xl font-bold mb-2">Ektoro Park Collection</h2>
        <p className="text-sm">
          Witness a imaginative creation of a park come to real live with the
          help with your support. Get yourself a opening moment capturing where
          you get to be able to share about 1% of trade profift when a user
          trades our collection token. But remeber you got to own a piece of art
          not just the pie.
        </p>
      </header>

      <div className="flex flex-col gap-4 items-center">
        <div className="w-[300px] h-[300px] mx-auto relative bg-[#222]">
          <Image src="/12.png" alt="park" fill />
        </div>
        <button onClick={handleMintOne} className="bg-[#222] p-2 text-yellow-500 font-bold hover:bg-[#444] rounded-lg">Mint One</button>
      </div>

      <div className="flex flex-col items-start gap-4 bg-[#222] p-3">
        <p className="p-2 bg-[#111] w-full flex justify-between rounded-lg p-2">Address: <span>0xe68C0fdcD264BE35BfBEb5067a7062Fc912e747</span></p> 
        <p className="p-2 bg-[#111] w-full flex justify-between rounded-lg p-2">Total Minted: <span>9</span></p> 
        <p className="p-2 bg-[#111] w-full flex justify-between rounded-lg p-2">Total Supply: <span>666</span></p> 
      </div>

    </section>
  );
};

export default MintComponent;
