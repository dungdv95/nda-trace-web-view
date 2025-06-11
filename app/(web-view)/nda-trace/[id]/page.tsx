import { Metadata } from "next";
import MainPage from "./main";

export const metadata: Metadata = {
  title: "NDA TRACE",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <MainPage id={id} />;
}
