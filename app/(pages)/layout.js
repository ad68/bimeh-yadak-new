
import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopLoader from "@/providers/TopLoader";
import ToastProvider from "@/providers/ToasterProvider";
import ClearCash from './components/ClearCash'
const figtree = Figtree({
  display: "block",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});
const yekanbakh = localFont({
  display: "block",
  src: [
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekanbakh",
});
const APP_NAME = "Bimeh-Yadak PWA";
const APP_DEFAULT_TITLE = "بیمه یدک";
const APP_TITLE_TEMPLATE = "بیمه یدک | %s"
const APP_DESCRIPTION = "معتبرترین پلتفرم درخواست بیمه های خاص خودرو و امداد خودرو به همراه فروش انواع بیمه نامه ها";
export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};
export const viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  userScalable: "no",
  viewportFit: "cover",
};

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function RootLayout({ children }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <html lang="fa" dir="rtl" className={`${yekanbakh.variable} ${figtree.variable}`}>

      <body className="dark:bg-darkBg-200 dark:text-darkText-100">
        <ClearCash />
        <TopLoader />
        <ToastProvider />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
