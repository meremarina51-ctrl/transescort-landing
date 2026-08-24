import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Каталог массажных специалистов",
  description: "Каталог уникальных массажных специалистов: проверенные профили, приватность и удобный выбор подходящего специалиста.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fots.googleapis.ncom/css2?family=Inter:wght@300;400;500;600;700&family=Unbounded:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
