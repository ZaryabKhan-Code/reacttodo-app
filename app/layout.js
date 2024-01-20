import { Inter } from "next/font/google";
import CustomNavBar from "@/components/CustomNavBar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "@/components/authContext";
import { Suspense } from "react";

const inter = Inter({ subsets: ["cyrillic"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </head>
      <body className={inter.className} style={{ backgroundColor: "#fff" }}>
        <AuthProvider>
          <CustomNavBar />
          <div className="container">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
