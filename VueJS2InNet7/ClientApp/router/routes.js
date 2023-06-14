import HomePage from 'views/dashboard/index';
import NotFound from 'views/not-found';
export const routes = [
    { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home', show: true, level: 1 },
    { name: 'Dashboard', path: '/dashboard', component: HomePage, display: 'Home', icon: 'home', show: true, level: 1 },
    { name: 'NotFound', path: '*', component: NotFound, display: 'NotFound', icon: 'find', show: true, level: 1 },
]