import Image from "next/image";
import React from "react";

const Page = () => {
  const articles = [
    {
      title: "Compound",
      description:
        "Stake your erc-721 token and get yourself rewarded with our   token",
      image: "/bag-btc.png",
    },
    {
      title: "Auto Compound",
      description:
        "Stake your erc-721 token and get yourself rewarded with the neuroclump token as we as the   token",
      image: "/scrapeconessad.png",
    },
    {
      title: "Rewards",
      description:
        "You will be able to use these tokens later for certain projects within the site as well as be able to use it later for food and services. ",
      image: "/scrapeconessad.png",
    },
  ];

  return (
    <main className=" w-full min-h-screen">
      <header className="mb-10 bg-[#222] p-4 mt-2">
        <h2 className="text-5xl font-bold mb-2">Mint page</h2>
        <p className="text-md">Welcome to the latest Ekoropark Collection </p>
      </header>

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
            <Image src="/enagate.png" alt="slow" fill />
          </div>
        </div>

        <form className="p-2 bg-[#222] w-full md:w-[80%] mt-4 rounded-lg drop-shadow-lg  flex md:flex-row flex-col justify-around">
          <header className="md:w-[45%] mx-auto p-4">
            <h2 className="text-4xl font-bold mb-2">Mint Now</h2>

            <p className="text-sm mb-4">
              With over 222 to mint from, you are able to use these token to
              later stake and earn interest. Following a compound and auto
              compound cycle allow you to allows come and go as you please.
              Share or trade with friends, those who hold the nft will be the
              only ones that will be able to earn rewards.
            </p>
            <p className="bg-[#333] p-3 inline-block">
              <span>0</span> / 222
            </p>
          </header>

          <div className="md:w-[15%] p-4 bg-[#111] ">
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

      <div className="flex items-center gap-3 flex-wrap justify-center">
        {articles.map((item) => (
          <div
            key={crypto.randomUUID()}
            className="w-[300px] h-[300px] bg-[#222] p-4 flex flex-col justify-between"
          >
            <h2 className="text-2xl font-bold text-center">{item.title}</h2>
            <p className="text-[12px]">{item.description}</p>
            <div className="w-[150px] h-[150px] relative mx-auto">
              <Image
                src={item.image}
                alt="image of service"
                fill
                className="drop-shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center flex-col w-full h-[200px] p-10 text-xl gap-4 bg-[#444] mt-4 h-full">
        <h2 className="text-4xl font-bold mb-2">Token Info</h2>
        <p className="w-full flex items-center justify-between flex-col text-[10px]">
          <span className="font-bold underline w-full text-xl">Contract Address:</span> 0x1C352E8F3e035c524F2385818b44859906d3c705
        </p>
        <p className="w-full flex items-center justify-between flex-col">
          <span className="font-bold underline w-full">Token Supply:</span> 123
        </p>
        <p className="w-full flex items-center justify-between flex-col">
          <span className="font-bold underline w-full">Token Contract Price:</span> 12
          eth
        </p>
      </div>
    </main>
  );
};

export default Page;
