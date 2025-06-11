import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDA CHAIN CMS",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="h-dvh bg-[linear-gradient(134deg,_#FFFFFF_16%,_#E9F1FF_30%,_#FFFFFF_50%,_#FFFFFF_70%)]">
      {children}
    </div>
  );
}
