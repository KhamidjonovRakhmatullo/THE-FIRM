import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavbarComponent from './navbarFile/navbar'
import HomeComponent from './homeComp/home'
import FooterComponent from './footerFile/footer'
import SolutionsComponent from './solutionsComp/solutions'
import CasesComponent from './casesComp/cases'
import AboutComponent from './aboutUsComp/about'
import BlogComponent from './blogComp/blog'

const RouterComponenet = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/> 
    <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='solutions' element={<SolutionsComponent/>}/>
        <Route path='cases' element={<CasesComponent/>}/>
        <Route path='about' element={<AboutComponent/>}/>
        <Route path='blog' element={<BlogComponent/>}/>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  )
}

export default RouterComponenet