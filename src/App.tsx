import React from "react";
import {
  H1Landing,
  HomeContainer,
  PHome,
  PLanding
} from "./styles/home-styles";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Body from "./Body";
import PayOkLogo from "./assets/images/logo.png";
import {
  ButtonVideo,
  LogoPayOk,
  HeaderV1Containter
} from "./layouts/header/header.style";
import SEO from "./components/Seo";
import Footer from "./layouts/footer";
function IndexPage(props: any) {
  const onOpenYoutube = () => {
    window.open("https://youtu.be/rM-pEOk12bY");
  };
  const { theme } = props;
  return (
    <>
      <HeaderV1Containter>
        <a href="/">
          <LogoPayOk src={PayOkLogo} />
        </a>
        <ButtonVideo onClick={onOpenYoutube} className="wrap w13-em ml-auto">
          <FontAwesomeIcon
            color={"#1a69d5"}
            className="mr-3 fs-1-half-em"
            icon={faYoutube}
          />
          <div style={{ marginLeft: 12 }}> Cara Buat Toko</div>
        </ButtonVideo>
      </HeaderV1Containter>

      <div>
        <HomeContainer>
          <div className="container-fluid bg-blue">
            <Body />
          </div>
        </HomeContainer>
        <Footer />
      </div>
    </>
  );
}

export default IndexPage;
