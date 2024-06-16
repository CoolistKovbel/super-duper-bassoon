import TokenMint from "@/app/components/tokenMint";
import React from "react";

const Page = () => {
  return (
    <section className="w-full min-h-screen bg-[#111] p-10 ">

      <header className="w-full bg-[#222] flex items-center justify-between flex-col p-10">
        <h2 className="text-4xl mb-2 font-bold">Tokens</h2>
        <p className="text-sm">
          There are a few certain types of tokens that we have, these are going
          to be tokens that you will be able to use throught the application and
          eventually in person too
        </p>
      </header>

      <div className="p-4">
        <header className="flex items-center justify-between">
          <h2> ekubit - ETT </h2>
          <h3>erc-20</h3>
        </header>
        <p>
          There is a total of 100,000,000 tokens available. Half you can buy
          through the contract price the other half you will be able to get once
          listed on dexes. Be advised this token will also be a reward token so
          please buy as much as you are willing to loose.
        </p>
      </div>

      <div className="p-4">
        <header className="flex items-center justify-between">
          <h2> NeuronClumpToken - NCT </h2>
          <h3>erc-20</h3>
        </header>
        <p>
          There is a total of 2,100,000 tokens available. Half you can buy
          through the contract price the other half you will be able to get once
          listed on dexes. Be advised this token will also be a reward token
          that you will earn through auto compound.
        </p>
      </div>

      <TokenMint />

    </section>
  );
};

export default Page;
