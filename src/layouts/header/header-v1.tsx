import React from "react";
import {
  HalfRow,
  ButtonVideo,
  LogoPayOk,
  HeaderV1Containter
} from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import PayOkLogo from "../../assets/images/logo.png";

import { YT_HOW_TO_MAKE_STORE } from "../../constant";

const MobileHeaderV1 = (props: any) => {
  const { theme } = props;
  const onOpenYoutube = () => {
    window.open(YT_HOW_TO_MAKE_STORE);
  };
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
          <div>Cara Buat Toko</div>
        </ButtonVideo>
      </HeaderV1Containter>
    </>
  );
};

export default MobileHeaderV1;
