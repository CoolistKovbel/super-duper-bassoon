"use client";

import React, { useEffect, useState } from "react";
import { getTokenSupply, readPriceFromContract } from "../lib/web3";

const TokenInfo = () => {
  const [totalSupply, setTotalSupply] = useState<any>(3);
  const [priceToken, priceTokenSupply] = useState<any>(4);

  useEffect(() => {
    const gg = async () => {
      // totl supply
      const total = await getTokenSupply();

      // token price
      const price = await readPriceFromContract();


      setTotalSupply(Number(total))
      priceTokenSupply(Number(price))



    };

    gg();
  }, []);

  return (
    <div className="flex items-center flex-col w-full h-[200px] p-10 text-xl gap-4 bg-[#444] mt-4 h-full">
      <h2 className="text-4xl font-bold mb-2">Token Info</h2>
      <p className="w-full flex items-center justify-between flex-col text-[10px]">
        <span className="font-bold underline w-full text-xl">
          Contract Address:
        </span>
        0x1C352E8F3e035c524F2385818b44859906d3c705
      </p>
      <p className="w-full flex items-center justify-between flex-col">
        <span className="font-bold underline w-full">Token Supply:</span>{" "}
        {totalSupply} / 222
      </p>
      <p className="w-full flex items-center justify-between flex-col">
        <span className="font-bold underline w-full">
          Token Contract Price:
        </span>
        {priceToken} eth
      </p>
    </div>
  );
};

export default TokenInfo;
