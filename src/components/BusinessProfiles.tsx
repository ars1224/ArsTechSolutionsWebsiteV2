import '../styles/BusinessProfiles.css'


function BusinessProfiles() {
  return (
    <div className="business-profiles">

      <h3>
        Find Us Online
      </h3>


      <div className="business-profiles-list">

        {/* GOOGLE */}
        <a
          href="https://www.google.com/search?sca_esv=f490e9746bfcf51c&authuser=4&sxsrf=APpeQntAysziBLrk1gg7JRboaD4Eg-8YNA%3A1790335928811&q=ARS%20Tech%20Solutions&stick=H4sIAAAAAAAAAONgU1IxqLBIMTAwS7M0MEkxMUo0MrcyqLC0TLZMMjYzNktMNrFMNEtcxCrkGBSsEJKanKEQnJ9TWpKZn1cMACWooo09AAAA&mat=CSlv_BkCIjM5&ved=2ahUKEwiNu8KI0YmXAxWCs1YBHSLABA4QrMcEegQIMRAC"
          target="_blank"
          rel="noopener noreferrer"
          className="business-profile-link"
          aria-label="View ARS Tech Solutions on Google"
        >
          <span>Google</span>
        </a>


        {/* CLUTCH */}
        <a
          href="https://clutch.co/profile/ars-tech-solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="business-profile-link"
          aria-label="View ARS Tech Solutions on Clutch"
        >
          <span>Clutch</span>
        </a>

      </div>

    </div>
  )
}


export default BusinessProfiles