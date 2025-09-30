// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Nav}  from "@/components/Navbar";
import Sidebar from "../components/ui/sidebar";
import { cn } from "../lib/utils";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-[#071027] dark:to-[#04111a]">
            <div className="pt-0 flex">
              <Sidebar />
  
              <main className="flex-1 p-8">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
