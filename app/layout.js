import TopBar from "@/ui/TopBar";
import "./globals.css";

export const metadata = {
  title: "Dr.Broker",
  description: "Transaction Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
