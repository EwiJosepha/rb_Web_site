import type { Metadata } from "next";
import "../globals.css";
import { roboto } from "@/public/fonts";
import Navbar from "../Components/organisms/navbar";
import dotenv from "dotenv";

dotenv.config();

export const metadata: Metadata = {
  title: "Rebase_Web",
  description: "rebase web application",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} w-full bg-white`}>
        <Navbar />
        {props.children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
