import React from "react";

const LayoutPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full h-screen ">
        {children}
    </main>
  );
};

export default LayoutPage;
