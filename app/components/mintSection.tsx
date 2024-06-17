"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ContractNFTCollection, mintNFT } from "../lib/web3";
import { ethers } from "ethers";
import NFTContractAbi from "../lib/nftAbi.json";

const MintSection = () => {
  const [mintSet, setMintingSet] = useState("");

  const handleMintOne = async (e: any) => {
    e.preventDefault();

    try {
      console.log("minting one", e.target.mint.value);

      await mintNFT(e.target.mint.value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const gg = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contractInstance = new ethers.Contract(
        ContractNFTCollection,
        NFTContractAbi,
        signer
      );

      console.log("Total cost in Wei:", contractInstance);

      // Mint the NFT(s)
      const spply = await contractInstance.giveMeTotalSupply();

      setMintingSet(spply.toNumber());
    };

    gg();
  }, []);

  return (
    <div className="w-full flex items-center justify-center gap-4 flex-col mb-10">
      <div className="p-4">
        <h2 className="text-4xl font-bold mb-2">
          EkoroParkSignature Collection
        </h2>

        <p className="text-md leading-5">
          Featuring the latest available collections that are avaliable to be
          minted.
        </p>

        <div className="w-[300px] h-[300px] relative mx-auto mt-4 bg-[#222]">
          <Image src="/12.png" alt="slow" fill />
        </div>
      </div>

      <form
        className="p-2 bg-[#222] w-full md:w-[80%] mt-4 rounded-lg drop-shadow-lg  flex md:flex-row flex-col"
        onSubmit={handleMintOne}
      >
        <header className=" md:w-[45%] mx-auto p-4">
          <h2 className="text-4xl font-bold mb-2">Mint Now</h2>

          <p className="text-sm mb-4">
            With over 222 to mint from, you are able to use these token to later
            stake and earn interest. Following a compound and auto compound
            cycle allow you to allows come and go as you please. Share or trade
            with friends, those who hold the nft will be the only ones that will
            be able to earn rewards.
          </p>
          <p className="bg-[#333] p-3 inline-block">
            <span>{mintSet}</span> / 222
          </p>
        </header>

        <div className="w-[50%] md:w-[15%] p-4 bg-[#111] ">
          <label htmlFor="mint">
            <input
              type="number"
              id="mint"
              name="mint"
              className="text-black p-1 w-full mb-2"
            />
          </label>

          <button className="bg-[#444] p-2 rounded-lg text-[12px] w-full">
            mint
          </button>
        </div>
      </form>
    </div>
  );
};

export default MintSection;
