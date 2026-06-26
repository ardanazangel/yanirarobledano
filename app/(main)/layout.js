import Footer from "../components/Footer";
import Header from "../components/Header";
import LayoutClient from "../LayoutClient";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <LayoutClient>{children}</LayoutClient>
      <Footer />
    </>
  );
}
