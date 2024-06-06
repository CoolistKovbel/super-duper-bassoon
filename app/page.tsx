import MainHeader from "./components/main-header";
import MintComponent from "./components/mint";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-4 p-14">
      

      <div className="text-center p-5 bg-[#333] rounded-lg h-[300px] flex items-center flex-col justify-around" >
        <div>
          <h2 className="text-2xl font-bold mb-2">Have been wanting to just get away for a while?</h2>

          <p className="mb-2">
            stop by and you will be able to see that there are a lot of cool
            things that you can do with tokens.
          </p>
        </div>

        <span className="text-[3rem]">👇🏼</span>

      </div>

      <MintComponent />
    </main>
  );
}
