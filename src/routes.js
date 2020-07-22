import Homepage from './components/Homepage'
import Details from './components/Details'

export const routes =[
    {path:'', component: Homepage},
    {path:'/details/:name', component: Details}
]