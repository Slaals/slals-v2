// src/app/routes.ts
import {HomeComponent} from './components/home';
import {AboutComponent} from './components/about';
import {BlogComponent} from './components/blog';
import {ProjectComponent} from './components/project';
import {InterestsComponent} from './components/interests';

export default [
  {path: '/', component: HomeComponent, name: 'Home', useAsDefault: true},
  {path: '/about', component: AboutComponent, name: 'About'},
  {path: '/blog', component: BlogComponent, name: 'Blog'},
  {path: '/project', component: ProjectComponent, name: 'Project'},
  {path: '/interests', component: InterestsComponent, name: 'Interests'}
];
