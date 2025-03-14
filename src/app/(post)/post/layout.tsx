import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-green-400">
        <h1>Header</h1>
      </header>

      <main className="my-8">{children}</main>

      <footer className="bg-green-200">
        <h1>Footer</h1>
      </footer>
    </>
  );
}
