// Import React
import * as React from 'react'

// Define the component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// Set document title by using the built-in Head component
export const Head = () => <title>Home Page</title>

// Export component
export default IndexPage