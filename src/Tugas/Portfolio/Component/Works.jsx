export default function Works() {
  return(
    <section id="works" className="full-height px-lg-5">
      <div className="container">
        <div className="row pb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <h6 className="text-brand">Works</h6>
            <h1>My Recent Project</h1>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-6" data-aos="fade-up">
            <div className="card-custom rounded-4 bg-base shadow-effect">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="../src/assets/project-1.jpg" alt="project image"/>
              </div>
              <div className="card-custom-content p-4">
                <h4>Startup Landing Page</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla eius eveniet corrupti eaque.</p>
                <a href="#" className="link-custom">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="card-custom rounded-4 bg-base shadow-effect">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="../src/assets/project-2.png" alt="project image"/>
              </div>
              <div className="card-custom-content p-4">
                <h4>Startup Landing Page</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla eius eveniet corrupti eaque.</p>
                <a href="#" className="link-custom">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="card-custom rounded-4 bg-base shadow-effect">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="../src/assets/project-3.png" alt="project image"/>
              </div>
              <div className="card-custom-content p-4">
                <h4>Startup Landing Page</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla eius eveniet corrupti eaque.</p>
                <a href="#" className="link-custom">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="900">
            <div className="card-custom rounded-4 bg-base shadow-effect">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="../src/assets/project-4.png" alt="project image"/>
              </div>
              <div className="card-custom-content p-4">
                <h4>Startup Landing Page</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla eius eveniet corrupti eaque.</p>
                <a href="#" className="link-custom">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}