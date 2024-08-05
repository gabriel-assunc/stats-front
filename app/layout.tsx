import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/Provider/ModalProvider";
import QueryProvider from "@/Provider/QueryProvider";
import BodyPage from "@/Pages/BodyPage";

export const metadata: Metadata = {
  title: "Stats"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="portal"> </div>
        <QueryProvider>
          <ModalProvider>
            <BodyPage>
              {children}
            </BodyPage>
          </ModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
