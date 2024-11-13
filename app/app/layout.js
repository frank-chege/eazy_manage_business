import localFont from "next/font/local";
import "./globals.css";
import PublicNavbar from "./components/PublicNavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Eazy manager",
  description:
    "Task manager, increase efficiency, productivity, team, work, egangement, motivation, leaderboard, fun, employees, management, organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PublicNavbar />
        {children}
      </body>
    </html>
  );
}
