import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback } from '@okta/okta-vue'
import { navigationGuard } from '@okta/okta-vue'
import HomeComponent from '@/components/Home2'
import LoginComponent from '@/components/Login'
import ProfileComponent from '@/components/Profile'
import MessagesComponent from '@/components/Messages'
//import FunAuthChallengeComponent from 'components/FunAuthChallengeComponent'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/profile',
      component: ProfileComponent,
      meta: {
        requiresAuth: true
      }
    },
     /* {path: '/FunAuthChallenge',
      component: FunAuthChallengeComponent,
      beforeEnter(to,from,next){
        window.location.href ="https://funauth.io"
      },
      meta: {
        requiresAuth: true
      }
    }, */
    {
      path: '/messages',
      component: MessagesComponent,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(navigationGuard)

export default router
