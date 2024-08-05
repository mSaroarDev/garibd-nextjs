import AdminAdImage from "@components/AdminAdImage";
import Footer from "@components/Footer";
import HomeMobileNav from "@components/HomeMobileNav";
import Navbar from "@components/Navbar";
import NavCategory from "@components/NavCategory";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <NavCategory />
      <AdminAdImage />
      {children}
      <HomeMobileNav />
      <Footer />
    </>
  );
}
