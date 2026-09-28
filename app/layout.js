import "./globals.css";
import { assetPath } from "@/lib/assetPath";

export const metadata = {
  title: "چرم مشهد | فروشگاه اینترنتی چرم طبیعی، کیف، کفش و لباس چرم",

  description: "فروشگاه اینترنتی چرم طبیعی، کیف، کفش و لباس چرم",

  icons: {
    icon: assetPath("/images/logobala.png"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}