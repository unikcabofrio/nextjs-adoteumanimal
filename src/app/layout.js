import * as S from "@/styles/globalStyle"

export const metadata = {
  title: "Adote um Animal - Unik Cabo Frio",
  description: "Site criado em next focado em adoção de animal",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={S.roboto.className}>{children}</body>
    </html>
  );
}
