import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <div className="w-full h-full mb-20 flex justify-center items-center mt-5">
  {children}
  </div>
  </>;
}
