import "./globals.css";

export const metadata = {
  title: "چرم مشهد | فروشگاه اینترنتی چرم طبیعی، کیف، کفش و لباس چرم",

  description:
    "فروشگاه اینترنتی چرم طبیعی، کیف، کفش و لباس چرم",

  icons: {
  icon: "/images/logobala.png",

  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}