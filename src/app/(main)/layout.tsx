import Footer from "@/components/common/Footer/Footer";
import FooterBottom from "@/components/common/Footer/FooterBottom";
import HeaderBottom from "@/components/common/Header/HeaderBottom";
import SpecialCase from "@/components/SpecialCase/SpecialCase";
import StoreProvider from "@/provider/StoreProvider";
import React from "react";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreProvider>
        <HeaderBottom />
        <SpecialCase />
        {children}
        <Footer />
        <FooterBottom />
      </StoreProvider>
    </>
  );
}

