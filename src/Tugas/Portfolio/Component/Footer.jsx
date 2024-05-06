export default function Footer() {
  return(
    <footer className="py-5 px-lg-5">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-auto">
          <p className="mb-0">Designed by <a href="#" className="fw-bold">Zikri Azzuri</a></p>
          </div>
          <div className="col-auto">
            <div className="social-links">
              <a href="#"><i className="lab la-twitter"></i></a>
              <a href="#"><i className="lab la-instagram"></i></a>
              <a href="#"><i className="lab la-dribbble"></i></a>
              <a href="#"><i className="lab la-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}