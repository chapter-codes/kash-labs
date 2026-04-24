import Header from "@/components/home/server/Header";
import Footer from "@/components/home/server/Footer";
import { AnimatePresence } from "motion/react";

export function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <AnimatePresence>{children}</AnimatePresence>
      <Footer />
    </>
  );
}
