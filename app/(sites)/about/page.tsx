import React from "react";

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-[#222] ">
      <div className="w-[80%] mx-auto pt-10">
        <h2 className="text-4xl font-bold mb-4">About Page</h2>
        <div className="flex items-center gap-4 flex-col p-4 bg-[#111]">
          <p className="mt-2">
            Welcome to ektoro Park. The park that is none exists but exists
            online. Where you will be able to mint certain tokens, earn rewards,
            and trade nfts.
          </p>
          <p>
            You are able to stake your nft to be able to gain token rewards. These tokens will later be used in a defi application as well as allow the user to use at the park to be able to mint new nfts or stake to earn interest.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
