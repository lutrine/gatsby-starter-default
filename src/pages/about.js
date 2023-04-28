import * as React from "react"

// Define component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        Hi there! My name is Caden, and I'm a computer science student at Cal
        State San Marcos! Currently, I'm experimenting with building websites
        using Gatsby.
      </p>
    </main>
  )
}

// Gatsby Head allows you to export metadata to the document head of pages (e.g. title, description)
export const Head = () => {
  ;<>
    <title>About Me</title>
    <meta
      name="description"
      content="The description of the about page, which I built with Gatsby!"
    />
  </>
}

// Export component
export default AboutPage
