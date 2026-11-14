import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import ThemeProvider from '@/components/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Maksudur Rahman | Full Stack Web Developer',
  description:
    'Portfolio of Maksudur Rahman, a Full Stack Web Developer passionate about building modern web applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
