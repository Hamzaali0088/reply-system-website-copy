import React from 'react'
import SolutionHero from '../../components/Solution/Hero.jsx'
import Navbar from '../../components/Navbar'
import Workspace from '../../components/Solution/Workspace'
import TicketingTool from '../../components/Solution/TicketingTool'
import Footer from '../../components/Footer'
import EmployeeSupport from '../../components/Solution/EmployeeSupport'
import FAQs from '../../components/Solution/FAQs'
import AdditionalResources from '../../components/Solution/AdditionalResources'
export default function solution() {
  return (
    <div>
        <Navbar />
        <SolutionHero />
        <Workspace />
        <TicketingTool />
        <EmployeeSupport />   
        <AdditionalResources />
        <FAQs />
        <Footer />
    </div>
  )
}