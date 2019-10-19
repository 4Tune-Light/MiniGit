import Home from './components/Home.vue';
import Repositories from './components/Repositories.vue';
import Readme from './components/Readme.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/repositories/:username', component: Repositories },
    { path: '/repositories/:username/:repo', component: Readme },
];

export default routes