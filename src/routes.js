import Homepage from './components/Homepage'
import Details from './components/Details'
import Admin from './components/Admin'

export const routes =[
    {path:'', component: Homepage},
    {path:'/details/:name', component: Details},
    {path:'/admin', component: Admin}
]