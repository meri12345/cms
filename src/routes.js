import Homepage from './components/Homepage'
import Details from './components/Details'
import Admin from './components/Admin'
import Edit from './components/Edit'
import Create from './components/Create'

export const routes =[
    {path:'', component: Homepage},
    {path:'/details/:name', component: Details},
    {path:'/admin', component: Admin},
    {path:'/admin/edit/:name', component: Edit},
    {path:'/admin/create', component: Create}
]