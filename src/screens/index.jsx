import CreateOwnYourMail from "../components/CreateOwnYourMail";
import HomePageTrading from "../components/HomePageTrading";
import HomepageBanner from "../components/HomeBanner";
import MostAdvancedCrypto from "../components/MostAdvancedCrypto";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <HomepageBanner />
      <HomePageTrading />
      <MostAdvancedCrypto />
      <CreateOwnYourMail />
    </>
  );
}
