import '../styles/FAQ.css'

type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  eyebrow?: string
  title?: string
  description?: string
  items: FAQItem[]
}

function FAQ({
  eyebrow = 'Frequently Asked Questions',
  title = 'Questions before getting started?',
  description,
  items
}: FAQProps) {
  return (
    <section className="faq-section">

      <div className="container faq-container">

        <div className="faq-heading">

          <p className="faq-eyebrow">
            {eyebrow}
          </p>

          <h2>
            {title}
          </h2>

          {description && (
            <p className="faq-description">
              {description}
            </p>
          )}

        </div>


        <div className="faq-list">

          {items.map((item) => (
            <details
              className="faq-item"
              key={item.question}
            >
              <summary className="faq-question">

                <span>
                  {item.question}
                </span>

                <span
                  className="faq-icon"
                  aria-hidden="true"
                >
                  +
                </span>

              </summary>

              <div className="faq-answer">
                <p>
                  {item.answer}
                </p>
              </div>

            </details>
          ))}

        </div>

      </div>

    </section>
  )
}

export default FAQ