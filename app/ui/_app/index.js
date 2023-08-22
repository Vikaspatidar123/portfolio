import Navigation from "../Navigation"

function App({ Component, pageProps }) {
    return <Navigation> <Component {...pageProps} /></Navigation>

  }
  
export default App