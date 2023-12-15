import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Viswash Kumar Mishra",
  description:
  "Welcome to Viswash's Portfolio. Nothing much here , just a hub to showcase all my work and what I've been doing lately :D",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "hashnode",
    "best portfolio",
    "best portfolio website"
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
