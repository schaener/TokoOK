import styled, { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import css from "@styled-system/css";
export const H1 = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-size: 3em;
  color: white;
  font-weight: 700;
`;

export const P = styled.p`
  font-family: "Noto Sans", sans-serif;
  color: white;
  font-size: 1.25em;
`;
export const PCT = styled.p`
  font-family: "Noto Sans", sans-serif;
  color: #9b9b9b;
  font-size: 1.25em;
`;

export const PSC = styled.div`
  font-family: "Noto Sans", sans-serif;
  color: red;
  font-size: 1.25em;
`;
export const SPI = styled.p`
  font-family: "Noto Sans", sans-serif;
  color: #4a4a4a;
  font-size: 1.25em;
`;
export const SPIB = styled.p`
  font-family: "Noto Sans", sans-serif;
  color: #1a69d5;
  font-size: 1.25em;
`;
export const H2 = styled.h2`
  font-family: "Noto Sans", sans-serif;
  text-align: "left";
  color: "#4a4a4a";
  font-size: 2.3em;
  font-weight: 700;
`;

export const H3 = styled.h3`
  font-family: "Noto Sans", sans-serif;
  text-align: "left";
  color: "white";
  font-size: 1.3em;
  font-weight: 700;
`;

export const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #979797;
  background-color: #979797;
`;

export const ImageGlobal = styled.img`
  width: 80%;
  margin: auto;
`;

export const HorizontalCenter = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
`;
export const Image = styled.img`
  width: 100%;
`;

export const InjectRTL = styled.div`
  ${({ lang }: { lang: any }) =>
    (lang === "ar" || lang === "he") &&
    `
    font-family: 'Cairo', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box"
    },
    body: {
      margin: 0,
      fontFamily: "body",
      fontWeight: "regular",
      fontSize: "base",
      lineHeight: "1.5",
      backgroundColor: "white",
      transition: get(theme, "customs.transition"),
      WebkitTextSizeAdjust: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)"
    },
    h1: {
      fontFamily: "heading",
      fontSize: "5xl",
      fontWeight: "semiBold",
      margin: 0
    },
    h2: {
      fontFamily: "heading",
      fontSize: "3xl",
      fontWeight: "semiBold",
      margin: 0
    },
    h3: {
      fontFamily: "heading",
      fontSize: "2xl",
      fontWeight: "semiBold",
      margin: 0
    },
    h4: {
      fontFamily: "heading",
      fontSize: "xl",
      fontWeight: "semiBold",
      margin: 0
    },
    h5: {
      fontFamily: "heading",
      fontSize: "md",
      fontWeight: "semiBold",
      margin: 0
    },
    h6: {
      fontFamily: "heading",
      fontSize: "base",
      fontWeight: "bold",
      margin: 0
    },
    "p,span,button,li,div": {
      fontFamily: "body",
      margin: 0
    },
    a: {
      fontFamily: "body",
      textDecoration: "none"
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    button: {
      appearance: "none"
    },
    img: {
      maxWidth: "100%"
    },
    ".quick-view-overlay": {
      backgroundColor: "rgba(0,0,0,.5)"
    },

    ".add-address-modal,.add-contact-modal": {
      boxShadow: "0 10px 40px rgba(0,0,0,0.16)",
      borderRadius: "3px !important",
      ".innerRndComponent": {
        width: "100%",
        padding: "30px",
        height: "auto",
        backgroundColor: "#f7f8f9",
        border: 0,
        boxSizing: "border-box"
      }
    },

    ".search-modal-mobile": {
      transform: "none!important",
      maxWidth: "none!important",
      maxHeight: "none!important",
      top: "0!important",
      left: "0!important",
      background: "transparent!important",
      borderRadius: "0!important"
    },

    ".reuseModalCloseBtn": {
      right: "10px!important",
      backgroundColor: "#ffffff!important",
      color: "#222222!important",
      borderRadius: "15px!important",
      padding: "0 9px!important",
      boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
    },

    ".image-item": {
      padding: "0 15px"
    },

    "@media (max-width: 1199px) and (min-width: 991px)": {
      ".image-item": {
        paddingLeft: "10px",
        paddingRight: "10px"
      }
    },

    "@media (max-width: 768px)": {
      ".image-item": {
        paddingLeft: "7.5px",
        paddingRight: "7.5px"
      }
    },

    ".rc-table-fixed-header .rc-table-scroll .rc-table-header": {
      marginBottom: "0 !important",
      paddingBottom: "0 !important",

      th: {
        padding: "8px 20px"
      }
    },

    ".drawer-content-wrapper": {
      "*:focus": {
        outline: "none"
      }
    },

    ".rc-table-content": {
      border: 0
    },

    "#modal-root": {
      zIndex: 999999,
      position: "relative"
    },

    ".drawer": {
      outline: 0,
      boxShadow: "none"
    },
    ".srOnly": {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important"
    },
    // @ts-ignore
    ...theme.globals
  })
);
