import React from 'react'
import Cards from '../components/cards/Cards'
import Header from '../components/partials/Header'
import Python from './Python'
import Go from './Go'
import Cpp from './C++'
import C from './C'
import Javascript from './Javascript'
import Java from './Java'
import Contribute from '../components/contribute/Contribute'
import QuizHome from './QuizHome'

const pages = [
  {
    path: '/',
    exact: true,
    components: (
      <>
        <Header />, <Cards />
      </>
    ),
  },
  {
    path: '/python',
    exact: false,
    components: <Python />,
  },
  {
    path: '/javascript',
    exact: false,
    components: <Javascript />,
  },
  {
    path: '/go',
    exact: false,
    components: <Go />,
  },
  {
    path: '/c++',
    exact: false,
    components: <Cpp />,
  },
  {
    path: '/c',
    exact: false,
    components: <C />,
  },
  {
    path: '/java',
    exact: false,
    components: <Java />,
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
    path: '/',
    exact: false,
    components: () => <h2 className="text-center py-5">Page not found</h2>,
  },
]

export default pages
