import { lazy, Suspense } from 'react'
import Header from './components/layout/Header/Header.jsx'
import Footer from './components/layout/Footer/Footer.jsx'
import Loader from './components/common/Loader/Loader.jsx'

const CatScene = lazy(() => import('./three/scenes/CatScene.jsx'))

export default function App() {
  return (
    <>
      <Header />
      <main className="stage">
        <Suspense fallback={<Loader />}>
          <CatScene />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
