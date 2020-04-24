import Head from "next/head"
import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>StudyBuddy</title>
      <link rel='shortcut icon' href='/favicon.png' />
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
        integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
        crossorigin='anonymous'
      />
      <link
        rel='stylesheet'
        href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/styles/atom-one-dark.min.css'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
        rel='stylesheet'></link>
    </Head>
    <Navigation />
    {children}
    <Footer />
  </div>
)

export default Layout
