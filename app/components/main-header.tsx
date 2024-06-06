import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header className="w-full p-5 flex items-center justify-between  bg-[#333]">
      <h2 className="text-2xl font-bold"><Link href="/">Ektoro park</Link></h2>

      <nav className="bg-[#111] flex items-center gap-4 p-2">
        <a
          href="/about"
          className="bg-[#222] p-2 rounded-lg hover:bg-[#333] font-bold"
        >
          about
        </a>
        <a
          href="/mint"
          className="bg-[#222] p-2 rounded-lg hover:bg-[#333] font-bold"
        >
          mint
        </a>
        <a
          href="/token"
          className="bg-[#222] p-2 rounded-lg hover:bg-[#333] font-bold"
        >
          token
        </a>
        <a
          href="/swap"
          className="bg-[#222] p-2 rounded-lg hover:bg-[#333] font-bold"
        >
          swap
        </a>
      </nav>
    </header>
  );
};

export default MainHeader;
