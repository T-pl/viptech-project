import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Helmet } from "react-helmet";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
  return (
    <>
      <Helmet title="Home - Loja Viptech" />
      <Header />
      <Main />
      <Footer />
    </>
  );
}