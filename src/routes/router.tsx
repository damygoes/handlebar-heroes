import PageLayout from '@/components/layouts/PageLayout'
import BlogPage from '@/pages/blog-page'
import BMICalculatorPage from '@/pages/bmi-calculator-page'
import CalorieCalculatorPage from '@/pages/calorie-calculator-page'
import ClimbExplorePage from '@/pages/climb-explore-page'
import EventsFinderPage from '@/pages/events-finder-page'
import HomePage from '@/pages/home-page'
import SegmentTimeCalculatorPage from '@/pages/segment-time-calculator-page'
import ShopPage from '@/pages/shop-page'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import RequireAuth from './require-auth'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path='login' element={<div>Login</div>} />
      {/* <Route path="auth-success" element={<AuthSuccessPage />} /> */}
      <Route path='blog' element={<BlogPage />} />
      <Route path='shop' element={<ShopPage />} />
      <Route path='/tools/bmi-calculator' element={<BMICalculatorPage />} />
      <Route
        path='/tools/calorie-calculator'
        element={<CalorieCalculatorPage />}
      />
      <Route path='/tools/climb-explorer' element={<ClimbExplorePage />} />
      <Route
        path='/tools/segment-time-calculator'
        element={<SegmentTimeCalculatorPage />}
      />
      <Route path='/tools/events-finder' element={<EventsFinderPage />} />

      <Route
        path='unauthorized'
        element={<div>You are not authorized to view this page</div>}
      />

      <Route element={<RequireAuth />}>
        <Route path='profile' element={<div>User</div>}>
          <Route index element={<div>Profile</div>} />
          {/* <Route path="my-bucket" element={<UserBucketList />} /> */}
        </Route>
      </Route>

      <Route
        path='*'
        element={
          <PageLayout>
            <div>404 Not Found</div>
          </PageLayout>
        }
      />
    </Route>
  )
)
