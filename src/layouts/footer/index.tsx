import React from "react";

import { LogoPayOk } from "../header/header.style";
import Logo2 from "../../assets/images/logo-transparent.png";
import Ask from "../../assets/images/ask.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import Map from "../../assets/images/maps.png";
import {
  ImageIconFooterContainer,
  InformationContainer,
  ImageSocmed
} from "./footer.style";
import {
  H2,
  Image,
  LineSeparator,
  P,
  SPI,
  SPIB,
  PCT
} from "../../styles/global.styles";
import Instagram from "../../assets/images/ig-circle.png";
import Fb from "../../assets/images/fb-circle.png";
import Linkdn from "../../assets/images/linkdn-circle.png";
import Yt from "../../assets/images/yt-circle.png";
import { defaultTheme } from "../../site-settings/themes";
import Mail from "../../assets/images/mail.png";
import { BASE_API_WHATSAPP, HOME, NOT_FOUND } from "../../constant/url";
import {
  PAY_OK_MAP_LINK,
  PAY_OK_WA,
  TOKO_OK_FB_LINK,
  TOKO_OK_FORM,
  TOKO_OK_IG_LINK,
  TOKO_OK_LINKDN_LINK,
  TOKO_OK_YT_LINK
} from "../../constant";
const Footer = () => {
  const openWa = () => {
    return `${BASE_API_WHATSAPP}/send?phone=${PAY_OK_WA}`;
  };

  return (
    <div className="container-fluid pt-3 pl-2-em pr-3-em">
      <div className="row">
        <div className="col-12 wrap">
          <LogoPayOk src={Logo2} />
          <div className="mt-2">
            <SPIB className="bold">Toko OK</SPIB>
            <SPIB>Toko Online Kamu</SPIB>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12 col-xs-12">
          <H2 className="mb-3 mt-3" color="#4a4a4a">
            Hubungi Kami !
          </H2>

          <InformationContainer className="mb-3">
            <ImageIconFooterContainer>
              <Image style={{ width: 25 }} src={Mail} />
            </ImageIconFooterContainer>
            <a href="mailto:info@tokook.id">
              <SPI className="fs-1p3em">info@tokook.id</SPI>
            </a>
          </InformationContainer>
          <InformationContainer className="mb-3">
            <ImageIconFooterContainer>
              <Image style={{ width: 25 }} src={Whatsapp} />
            </ImageIconFooterContainer>
            <a href={openWa()} target="_blank">
              <SPI className="fs-1p3em">021-3108024</SPI>
            </a>
          </InformationContainer>
          <InformationContainer className="mb-3">
            <ImageIconFooterContainer>
              <Image style={{ width: 25 }} src={Map} />
            </ImageIconFooterContainer>
            <div>
              <a href={PAY_OK_MAP_LINK} target="_blank">
                <SPI className="fs-1p3em">
                  Jl. Blora No.RT.2, RT.2/RW.6, Dukuh Atas, <br /> Kec. Menteng,
                  Kota Jakarta Pusat, <br /> Daerah Khusus Ibukota Jakarta 10310
                </SPI>
              </a>
            </div>
          </InformationContainer>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12 container-socmed-landing">
          <H2 className="mb-2 mt-2" color="#4a4a4a">
            Ikuti Kami !
          </H2>
          <div className="wrap mb-3">
            <a className="mb-2" href={TOKO_OK_IG_LINK} target="_blank">
              <ImageSocmed className="mr-2" src={Instagram} />
            </a>
            <a className="mb-2" href={TOKO_OK_YT_LINK} target="_blank">
              <ImageSocmed className="mr-2" src={Yt} />
            </a>
            <a className="mb-2" href={TOKO_OK_FB_LINK} target="_blank">
              <ImageSocmed className="mr-2" src={Fb} />
            </a>
            <a className="mb-2" href={TOKO_OK_LINKDN_LINK} target="_blank">
              <ImageSocmed className="mr-2" src={Linkdn} />
            </a>
          </div>
          <H2 className="mb-3 mt-5" color="#4a4a4a">
            Supplier
          </H2>
          <a href={TOKO_OK_FORM} target="_blank">
            <SPI className="fs-1p3em">Daftar</SPI>
          </a>
        </div>
        <div className="col-12 pt-6 pb-4">
          <LineSeparator />
        </div>
        <div className="col-12 pb-5">
          <PCT className="label-font">
            Hak Cipta 2020 Tulp Street Hak Cipta dilindungi
          </PCT>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Footer;
