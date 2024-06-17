
import MintSection from "@/app/components/mintSection";
import TokenInfo from "@/app/components/tokenInfo";
import Image from "next/image";



const Page = async () => {
  const articles = [
    {
      title: "Compound",
      description:
        "Stake your erc-721 token and get yourself rewarded with our   token",
      image: "/compoundfeature.webp",
    },
    {
      title: "Auto Compound",
      description:
        "Stake your erc-721 token and get yourself rewarded with the neuroclump token as we as the   token",
      image: "/compoundAuto.webp",
    },
    {
      title: "Rewards",
      description:
        "You will be able to use these tokens later for certain projects within the site as well as be able to use it later for food and services. ",
      image: "/reward.webp",
    },
  ];



  return (
    <main className=" w-full min-h-screen">
      <header className="mb-10 bg-[#222] p-4 mt-2">
        <h2 className="text-5xl font-bold mb-2">Mint page</h2>
        <p className="text-md">Welcome to the latest Ekoropark Collection </p>
      </header>

      {/* Mint sectoin */}
      <MintSection />

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

      {/* token info */}
      <TokenInfo  />
    </main>
  );
};

export default Page;
