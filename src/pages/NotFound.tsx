import Button from '../components/Button'

import '../styles/NotFound.css'
import PageMeta from '../components/PageMeta'


function NotFound() {
  return (
    <>
    <PageMeta
      title="Page Not Found"
      description="The requested page could not be found on the ARS Tech Solutions website."
      path="/404"
      noIndex
    />
    <section className="not-found">

      <div className="container not-found-container">

        <p className="not-found-code">
          404
        </p>

        <h1>
          Looks like this page
          <span> doesn’t exist.</span>
        </h1>

        <p className="not-found-description">
          The page may have been moved, removed or the address
          may have been entered incorrectly.
        </p>

        <div className="not-found-actions">

          <Button
            to="/"
            variant="primary"
            size="large"
          >
            Back to Home
            <span>→</span>
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            size="large"
          >
            Contact ARS
          </Button>

        </div>

      </div>

    </section>
    </>
    
  )
}


export default NotFound