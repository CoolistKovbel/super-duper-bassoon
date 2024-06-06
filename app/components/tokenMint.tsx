"use client";
import React from "react";
import { swapToken } from "../lib/web3";

const TokenMint = () => {
  const handleExhangeRate = async (e: any) => {
    e.preventDefault();
    try {
      console.log(e.target.swap.value * 10000);
      const gg = await swapToken(e.target.swap.value);

      console.log(gg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[800px] h-[800px] relative flex items-cetner justify-center flex-col bg-[#11]">
      <h2 className="text-2xl font-bold">exchange: </h2>
      <form
        onSubmit={handleExhangeRate}
        className="p-10 bg-[#222] flex items-center justify-between mx-auto"
      >
        <input
          type="amount"
          placeholder="enter amount to exhcnage"
          id="swap"
          name="swap"
          className="p-4 bg-[#222]"
        />
        <button className="bg-[#111] p-2 rounded-lg font-bold">submit</button>
      </form>
    </div>
  );
};

export default TokenMint;
