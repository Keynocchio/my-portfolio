import "./globals.css";

export const metadata = {
  title: "Keynocchio by David",
  description: "Portfolio, Videos, and Digital Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}