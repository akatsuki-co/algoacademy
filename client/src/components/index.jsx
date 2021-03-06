import React from 'react'
import Navigation from './partials/Navigation'
import Footer from './partials/Footer'
import Cards from './cards/Cards'
import Header from './partials/Header'
import Contribute from './contribute/Contribute'
import QuizHome from './quiz/QuizHome'
import LogIn from './auth/LogIn'
import LogOut from './auth/LogOut'
import SignUp from './auth/SignUp'
import Faq from './faq/Faq'
import WithTableOfContents from './content/WithTableOfContents'
import { Switch, Route } from 'react-router-dom'
import shortid from 'shortid'

const pages = [
  {
    path: '/',
    exact: true,
    components: (
      <>
        <Header />
        <Cards />
      </>
    ),
  },
  {
    path: '/python',
    exact: false,
    components: <WithTableOfContents path='python' />,
  },
  {
    path: '/javascript',
    exact: false,
    components: <WithTableOfContents path='javascript' />,
  },
  {
    path: '/go',
    exact: false,
    components: <WithTableOfContents path='go' />,
  },
  {
    path: '/cpp',
    exact: false,
    components: <WithTableOfContents path='cpp' />,
  },
  {
    path: '/c',
    exact: false,
    components: <WithTableOfContents path='c' />,
  },
  {
    path: '/java',
    exact: false,
    components: <WithTableOfContents path='java' />,
  },
  {
    path: '/ruby',
    exact: false,
    components: <WithTableOfContents path='ruby' />,
  },
  {
    path: '/contribute',
    exact: false,
    components: <Contribute />,
  },
  {
    path: '/quiz',
    exact: false,
    components: <QuizHome />,
  },
  {
    path: '/logIn',
    exact: false,
    components: <LogIn />,
  },
  {
    path: '/logOut',
    exact: false,
    components: <LogOut />,
  },
  {
    path: '/signUp',
    exact: false,
    components: <SignUp />,
  },
  {
    path: '/faq',
    exact: false,
    components: <Faq />,
  },
  {
    path: '/',
    exact: false,
    components: () => <h2 className="text-center py-5">Page not found</h2>,
  },
]

const AppRouter = () => {
  const allPages = pages.map(({ path, exact, components }) => {
    return (
      <Route path={path} exact={exact} key={shortid.generate()}>
        {components}
      </Route>
    )
  })
  return (
    <>
      <Navigation></Navigation>
      <Switch>{allPages}</Switch>
      <Footer></Footer>
    </>
  )
}

export default AppRouter
