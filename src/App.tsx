import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ScrollToHash } from '@/components/layout/ScrollToHash'
import { Index } from '@/pages/Index'
import { Sobre } from '@/pages/Sobre'
import { Termos } from '@/pages/Termos'
import { Privacidade } from '@/pages/Privacidade'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="termos" element={<Termos />} />
          <Route path="privacidade" element={<Privacidade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
