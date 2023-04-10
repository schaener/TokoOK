import styled from 'styled-components'
import { H3, HorizontalCenter } from './global.styles'
import { H1Home } from './home-styles'

export const MainContent = styled.div`

@media(min-width: 1281px) {
  padding: 80px 86px;
}

@media(max-width: 1281px) {
  padding: 20px
}
`

export const ImageNotFound = styled.img`
width: 100%;
margin-top: 3.5em
`

export const H3GogglePlay = styled(H3)`
@media (min-width: 1281px) {
  
  text-align: left
  
}

@media (min-width: 1024px) and (max-width: 1280px) {
  
  text-align: left
  
}

@media (min-width: 768px) and (max-width: 1023px) {
  text-align: center
  
}

@media (min-width: 320px) and (max-width: 480px) {
  text-align: center

}

@media (min-width: 481px) and (max-width: 767px) {
 
  text-align: center

}

`

export const LogoPlaystore = styled(HorizontalCenter)`
@media (min-width: 1281px) {
  
  text-align: left
  
}

@media (min-width: 1024px) and (max-width: 1280px) {
  
  text-align: left
  
}

@media (min-width: 768px) and (max-width: 1023px) {
  text-align: center
  
}

@media (min-width: 320px) and (max-width: 480px) {
  text-align: center

}

@media (min-width: 481px) and (max-width: 767px) {
 
  text-align: center

}
`
export const H1404 = styled(H1Home)`
@media (min-width: 320px) and (max-width: 480px) {
  
  font-size: 2em
  
}
`
