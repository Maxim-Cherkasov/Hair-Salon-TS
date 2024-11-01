import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationBar } from '@/components/navigation-bar';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: 'StyleCuts Studio',
  description: 'Premium Hair Salon Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}