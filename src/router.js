import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Library from './views/Library.vue'
import Executives from './views/Executives.vue'
import NewsEvents from './views/News&Events.vue'
import Gallery from './views/Gallery.vue'
import Meetups from './views/Meetup/meetUps.vue';
import CreateMeetUps from './views/Meetup/createMeetUps.vue'
import Profile from './views/User/profile.vue'
import SignUp from './views/User/signUp.vue'
import SignIn from './views/User/signIn.vue'
import MeetUp from './views/Meetup/meetUp.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Library',
      name: 'Library',
      component: Library

    },

    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery

    },
    {
      path: '/News&Events',
      name: 'News&Events',
      component: NewsEvents

    },
    {
      path: '/Executives',
      name: 'Executives',
      component: Executives

    }, {
      path: '/meetUps',
      name: 'Meetups',
      component: Meetups
    },

    {
      path: '/meetUp/new',
      name: 'CreateMeetUps',
      component: CreateMeetUps
    },
    {
      path: '/meetups/:id',
      name: "MeeuUp",
      props: true,
      component: MeetUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    }
  ]
})