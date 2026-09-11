import type { Metadata } from 'next';
import './css/bootstrap.css';
import './css/jquery-ui.css';
import './css/bootstrap-select.min.css';
import './css/swiper.min.css';
import './css/flaticon.css';
import './css/animate.css';
import './css/custom-animate.css';
import './css/jquery.fancybox.min.css';
import './css/owl.css';
import './css/style.css';
import './css/responsive.css';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export const metadata: Metadata = {
  title: "EchoStar | Best Speech, ABA & Occupational Therapy Centre in Gurgaon & Rewari",
  description: "EchoStar is a premier clinic offering specialized Speech Therapy, ABA Therapy, Occupational Therapy, and Special Education for children in Gurugram (Sector 51) and Rewari. Bridging communication and developmental gaps.",
  keywords: "speech therapy gurgaon, aba therapy gurgaon, occupational therapy gurgaon, speech therapist rewari, autism therapy gurgaon, adhd child therapy haryana",
  icons: {
    icon: "/favicon.ico",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body>
        <Header />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
