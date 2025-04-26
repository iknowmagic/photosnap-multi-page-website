import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Home from '@/pages/Home'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import MobileMenu from '@/components/common/MobileMenu'
import { Suspense, lazy } from 'react'

// Lazy-loaded pages for better performance
const Stories = lazy(() => import('@/pages/Stories'))
const Features = lazy(() => import('@/pages/Features'))
const Pricing = lazy(() => import('@/pages/Pricing'))

// Loading fallback
const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="border-4 border-t-transparent border-black rounded-full w-16 h-16 animate-spin"></div>
  </div>
)

// Layout wrapper that includes the header and footer
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px]">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileMenu />
    </div>
  )
}

// Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/stories"
        element={
          <Suspense fallback={<Loading />}>
            <Stories />
          </Suspense>
        }
      />
      <Route
        path="/features"
        element={
          <Suspense fallback={<Loading />}>
            <Features />
          </Suspense>
        }
      />
      <Route
        path="/pricing"
        element={
          <Suspense fallback={<Loading />}>
            <Pricing />
          </Suspense>
        }
      />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
