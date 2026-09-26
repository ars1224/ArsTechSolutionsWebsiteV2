import '../styles/Legal.css'
import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'

import {
  createBreadcrumbSchema
} from '../data/structuredData'

function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="Read the ARS Tech Solutions privacy policy and learn how personal information submitted through the website is collected, used and handled."
        path="/privacy"
      />

      <StructuredData
        data={
          createBreadcrumbSchema(
            'Privacy Policy',
            '/privacy'
          )
        }
      />
      {/* =========================
          HERO
      ========================= */}

      <section className="legal-hero">

        <div className="container legal-hero-container">

          <p className="legal-eyebrow">
            Privacy
          </p>

          <h1>
            Privacy Policy
          </h1>

          <p className="legal-intro">
            This Privacy Policy explains how ARS Tech Solutions
            collects, uses, stores and protects personal information
            provided through this website.
          </p>

          <p className="legal-updated">
            Last updated: 21 September 2026
          </p>

        </div>

      </section>


      {/* =========================
          POLICY
      ========================= */}

      <section className="legal-content-section">

        <div className="container legal-content">


          {/* INTRODUCTION */}

          <article className="legal-block">

            <h2>
              1. About this policy
            </h2>

            <p>
              ARS Tech Solutions is a New Zealand-based digital
              solutions business providing website design,
              development, web applications, website improvements
              and technology-related services.
            </p>

            <p>
              We respect your privacy and aim to handle personal
              information responsibly and in accordance with
              New Zealand privacy requirements.
            </p>

          </article>


          {/* INFORMATION COLLECTED */}

          <article className="legal-block">

            <h2>
              2. Information we collect
            </h2>

            <p>
              When you contact ARS Tech Solutions through our website,
              we may collect information that you voluntarily provide,
              including:
            </p>

            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Existing website address</li>
              <li>The service you are interested in</li>
              <li>Information included in your enquiry or project message</li>
            </ul>

            <p>
              We aim to collect only information that is reasonably
              necessary for responding to enquiries and providing our
              services.
            </p>

          </article>


          {/* PURPOSE */}

          <article className="legal-block">

            <h2>
              3. Why we collect your information
            </h2>

            <p>
              Personal information submitted through this website may
              be used to:
            </p>

            <ul>
              <li>Respond to your enquiry</li>
              <li>Understand your project or support requirements</li>
              <li>Prepare quotes or discuss potential services</li>
              <li>Communicate with you about requested services</li>
              <li>Provide and improve our services</li>
              <li>Maintain appropriate business records</li>
              <li>Meet legal or regulatory obligations where required</li>
            </ul>

            <p>
              We do not collect personal information simply because
              it may be useful in the future.
            </p>

          </article>


          {/* FORM */}

          <article className="legal-block">

            <h2>
              4. Website enquiries
            </h2>

            <p>
              Information submitted through our enquiry form is used
              for the purpose of reviewing and responding to your
              enquiry.
            </p>

            <p>
              Providing optional information such as your phone number,
              business name or existing website helps us better
              understand your enquiry, but you do not need to provide
              optional information unless it is relevant to your
              request.
            </p>

          </article>


          {/* THIRD PARTIES */}

          <article className="legal-block">

            <h2>
              5. Service providers
            </h2>

            <p>
              ARS Tech Solutions may use third-party technology
              providers to operate, host, secure or support this
              website and its enquiry functionality.
            </p>

            <p>
              Personal information may be processed by those providers
              where this is reasonably necessary to provide the
              relevant service.
            </p>

            <p>
              We do not sell your personal information to advertisers
              or other third parties.
            </p>

          </article>


          {/* DISCLOSURE */}

          <article className="legal-block">

            <h2>
              6. Sharing personal information
            </h2>

            <p>
              We will generally only disclose personal information
              where it is necessary for the purpose for which it was
              collected, where you have authorised the disclosure,
              where a service provider needs the information to
              provide a service to us, or where disclosure is required
              or permitted by law.
            </p>

          </article>


          {/* SECURITY */}

          <article className="legal-block">

            <h2>
              7. Security
            </h2>

            <p>
              We take reasonable steps to protect personal information
              against loss, misuse and unauthorised access,
              modification or disclosure.
            </p>

            <p>
              However, no online service or method of electronic
              storage can guarantee absolute security.
            </p>

          </article>


          {/* RETENTION */}

          <article className="legal-block">

            <h2>
              8. How long we keep information
            </h2>

            <p>
              Personal information will only be retained for as long
              as it is reasonably required for the purpose for which
              it was collected, for legitimate business requirements,
              or where retention is required by law.
            </p>

            <p>
              Information that is no longer reasonably required may
              be deleted or securely disposed of.
            </p>

          </article>


          {/* ACCESS */}

          <article className="legal-block">

            <h2>
              9. Accessing or correcting your information
            </h2>

            <p>
              You may ask us for access to personal information we
              hold about you or request that incorrect information
              be corrected.
            </p>

            <p>
              To make a privacy request, contact:
            </p>

            <a
              href="mailto:contact@arstechsolutions.com"
              className="legal-email"
            >
              contact@arstechsolutions.com
            </a>

          </article>


          {/* COOKIES */}

          <article className="legal-block">

            <h2>
              10. Cookies and analytics
            </h2>

            <p>
              If ARS Tech Solutions introduces analytics, advertising
              technologies or other non-essential tracking tools in
              the future, this policy will be updated to explain what
              information is collected and how those technologies are
              used.
            </p>

          </article>


          {/* EXTERNAL LINKS */}

          <article className="legal-block">

            <h2>
              11. External websites
            </h2>

            <p>
              Our website may contain links to websites or services
              operated by other organisations.
            </p>

            <p>
              ARS Tech Solutions is not responsible for the privacy
              practices or content of external websites. You should
              review the privacy information provided by those
              services before providing them with personal
              information.
            </p>

          </article>


          {/* CHANGES */}

          <article className="legal-block">

            <h2>
              12. Changes to this policy
            </h2>

            <p>
              We may update this Privacy Policy when our website,
              services, technology providers or privacy practices
              change.
            </p>

            <p>
              The latest version will be published on this page with
              the date of the most recent update.
            </p>

          </article>


          {/* CONTACT */}

          <article className="legal-block">

            <h2>
              13. Contact us
            </h2>

            <p>
              If you have a question or concern about how ARS Tech
              Solutions handles personal information, please contact:
            </p>

            <div className="legal-contact">

              <strong>
                ARS Tech Solutions
              </strong>

              <span>
                Rolleston, Canterbury, New Zealand
              </span>

              <a href="mailto:contact@arstechsolutions.com">
                contact@arstechsolutions.com
              </a>

            </div>

          </article>

        </div>

      </section>

      

    </>
  )
}


export default Privacy