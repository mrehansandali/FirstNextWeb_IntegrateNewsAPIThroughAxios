
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Rehan First Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" />
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className={`container ${Navcss.mrcontainer}`}>
            <div className={Navcss.mrlogo}>
              <a className="navbar-brand" href="#"><h1><GiHunterEyes /></h1></a>
              <h2>HuntingCODER</h2>
            </div>
            <button className={`navbar-toggler ${Navcss.mrNR}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className={`navbar-toggler-icon ${Navcss.mrTI}`} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">


              <form className={`d-flex ${Navcss.mrform} mx-auto`} role="search">
                <div className={Navcss.searchInput}>
                  <button type="submit" className={Navcss.mrsearchbtn}>
                    <FaSearch />
                  </button>
                  <input className={Navcss.mrsearchField} type="text" placeholder="Search" />
                </div>
              </form>


              <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${Navcss.mrul}`}>
                <li className="nav-item mx-2">
                  <Link className={`nav-link active ${Navcss.mrLI}`} aria-current="page" href="/FindPeople">Find People</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className={`nav-link active ${Navcss.mrLI} ${Navcss.mrmsg}`} href="/Messages">Messages <span><TbSquareNumber5 /></span>
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link href="/MyContacts" className={`nav-link active ${Navcss.mrLI}`}>My Contacts</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link href="/UserProfile" className={`nav-link active ${Navcss.mrLI} ${Navcss.mruser}`}>
                    <Image
                      src={user}
                      alt="user icon"
                    />
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>



      </div> */}
    </>
  )
}
