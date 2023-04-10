import styled from "styled-components";
import { Button } from "../components/Button";
import { defaultTheme } from "../site-settings/themes";
import { P, PSC } from "./global.styles";

export const HomeContainer = styled.div`
  background-color: #1a69d5;
  @media (min-width: 1281px) {
    padding: 3em 5.5em 9.5em 8.5em;
  }
  @media (min-width: 1024px) {
    padding: 1em 3.5em 7.5em 6.5em;
  }

  @media (max-width: 1281px) {
    padding-top: 20px;
  }
`;

export const HalfRow = styled.div`
  width: 50%;
`;

export const ButtonVideo = styled(Button)`
  background-color: white;
  color: black;
  width: 100%;
  font-family: "Noto Sans", sans-serif;
  font-size: 2em;
  padding: 0px !important;
`;

export const H1Home = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-size: 3em;
  color: white;
  font-weight: 700;
  text-align: "center";
`;

export const PHome = styled.p`
  font-family: "Noto Sans", sans-serif;
  color: white;
  font-size: 1.25em;
`;

export const H2Home = styled.h2`
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: white;
  font-size: 3vh;
  margin-top: 5vh;
  font-weight: 700;
`;

export const HomeFooterContainer = styled.div`
  background-color: white;
`;

export const MobileFilterContainer = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px -1px;
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const H1Landing = styled(H1Home)`
  @media (min-width: 1024px) {
    margin-top: 1em;
  }
  @media (max-width: 1023px) {
    margin-top: 1em;
  }
`;
export const PLanding = styled(P)`
  font-size: 1.3em;
  line-height: 2em;
  @media (max-width: 1023px) {
  }
`;
export const PPLanding = styled(PSC)`
  font-size: 1.3em;
  line-height: 2em;
  @media (max-width: 1023px) {
  }
`;
