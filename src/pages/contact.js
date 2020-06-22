import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="contact webdev" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          {/* It uses Formspree to handle backend message */}
          <form action="https://formspree.io/xrgykjgo" method="POST">
            <div class="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email_replyto"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <button type="submit">submit here</button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
