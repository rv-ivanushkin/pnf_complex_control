import React from 'react'
import { Header } from 'src/widgets/Header'
import { Footer } from 'src/widgets/Footer'
import { Content } from 'src/widgets/Content'
import { SelectXml } from 'src/widgets/SelectXml'
import { MainPageStyled } from './index.styled'

export const MainPage = () => (
  <MainPageStyled>
    <Header />
    <Content>
      <SelectXml />
    </Content>
    <Footer />
  </MainPageStyled>
)
