import React from 'react'

function Home() {
  return (
    <div>
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
      <Price />
      <Testimony />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home