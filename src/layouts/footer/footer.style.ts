import styled from "styled-components";
import { Image } from "../../styles/global.styles";

export const FooterContainer = styled.div`
  background-color: white;
  @media (min-width: 1281px) {
    padding: 50px !important;
  }

  @media (max-width: 1281px) {
    padding: 15px;
  }
`;

export const H2Footer = styled.h2`
  font-family: "Noto Sans", sans-serif;
  text-align: left;
  color: #4a4a4a;
  font-size: 3vh;
  margin-top: 5vh;
  font-weight: 700;
`;

export const FooterText = styled.p`
  margin-bottom: 0px;
`;

export const RowInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ImageIconFooterContainer = styled.div`
  width: 4vh;
  height: auto;
  margin-right: 15px;
  margin-bottom: 10px;
`;

export const InformationContainer = styled.div`
  display: flex;
`;

export const FollowImage = styled(Image)`
  @media (min-width: 1280px) {
  }
`;
export const ImageSocmed = styled.img`
  width: 4em;
  margin-right: 10px;
  background-color: transparent;
`;
