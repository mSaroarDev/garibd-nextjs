import Footer from "@components/Footer";
import HomeMobileNav from "@components/HomeMobileNav";
import Homepage from "./(pages)/Home/Home";

export default async function Home() {
  // featured ad
  // const featuredAdsArray = await featuredAds();

  return (
    <>
      <Homepage />
      <HomeMobileNav />
      <Footer />
    </>
  );
}
