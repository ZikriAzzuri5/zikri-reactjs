export default function Contact() {
  return(
    <section id="contact" className="full-height px-lg-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4" data-aos="fade-up">
            <h6 className="text-brand">Contact</h6>
            <h1>Interested Working Together ? Lets talk</h1>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
            <form action="#" className="row g-lg-3 gy-3">
              <div className="form-group col-md-6">
                <input type="text" className="form-control" placeholder="enter your name" />
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" placeholder="enter your email" />
              </div>
              <div className="form-group col-12">
                <input type="text" className="form-control" placeholder="enter your subject" />
              </div>
              <div className="form-group col-12">
                <textarea name="" id="" className="form-control" cols="30" rows="4" placeholder="enter your message" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-brand">Contact Me</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}