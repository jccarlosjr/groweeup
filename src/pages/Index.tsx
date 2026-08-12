
// import { GrowthDivider } from '@/components/ui/GrowthDivider'
// import { BentoShowcase } from '@/components/sections/BentoShowcase'
// import { Metrics } from '@/components/sections/Metrics'
// import { CaseStudies } from '@/components/sections/CaseStudies'
// import { LiveDashboard } from '@/components/sections/LiveDashboard'
// import { GrowthSimulator } from '@/components/sections/GrowthSimulator'
// import { MonthPulse } from '@/components/sections/MonthPulse'
// import { Compare } from '@/components/sections/Compare'
// import { Testimonials } from '@/components/sections/Testimonials'
// import { Integrations } from '@/components/sections/Integrations'
// import { Insights } from '@/components/sections/Insights'

import { Process } from '@/components/sections/Process'
import { Commitments } from '@/components/sections/Commitments'
import { ServiceFinder } from '@/components/sections/ServiceFinder'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { Benefits } from '@/components/sections/Benefits'
import { OrbitChannels } from '@/components/sections/OrbitChannels'
import { Hero } from '@/components/sections/Hero'
import { Clients } from '@/components/sections/Clients'
import { Products } from '@/components/sections/Products'


export function Index() {
  return (
    <>
      <Hero />
      {/* <Metrics /> */}
      <Clients />
      <Products />
      <Benefits />
      <OrbitChannels />
      <Process />
      <ServiceFinder />
      <Commitments />
      <FAQ />
      <Contact />
      {/* <BentoShowcase /> */}
      {/* <GrowthDivider /> */}
      {/* <CaseStudies /> */}
      {/* <LiveDashboard /> */}
      {/* <GrowthSimulator /> */}
      {/* <MonthPulse /> */}
      {/* <Compare /> */}
      {/* <Testimonials /> */}
      {/* <Integrations /> */}
      {/* <Insights /> */}
    </>
  )
}
