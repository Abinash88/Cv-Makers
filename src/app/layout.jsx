"use client";

import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "@/ReduxSlices/ReduxStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <div className="">
            <Header />
          </div>
          <div className="">{children}</div>
        </body>
      </html>
    </Provider>
  );
}
