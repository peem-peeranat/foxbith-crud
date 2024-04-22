import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      {/* It's important to keep a head tag, even if it's empty */}
      <head></head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          {children}
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}