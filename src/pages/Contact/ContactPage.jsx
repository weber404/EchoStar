import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Interested In',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      {/* Top Banner */}
      <section>
        <div>
          <img src="/nimg/contact-banner.jpg" alt="Contact EchoStar" width="100%" />
        </div>
      </section>

      {/* Form Section */}
      <section style={{ marginTop: '2rem' }}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="default-form-area">
                <div className="sec-title">
                  <h1 style={{ color: 'blueviolet' }}>Drop us a line </h1>
                </div>
                {submitted && (
                  <div className="alert alert-success" style={{ marginBottom: '1rem' }}>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                <form
                  id="contact-form"
                  name="contact_form"
                  className="contact-form"
                  onSubmit={handleSubmit}
                  style={{ border: '1px solid black', padding: '1rem', borderRadius: '10px' }}
                >
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control required email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <select
                          name="service"
                          className="form-control"
                          value={formData.service}
                          onChange={handleChange}
                          style={{ width: '100%', height: '50px' }}
                        >
                          <option value="Interested In">Interested In</option>
                          <option value="ABA therapy">ABA therapy</option>
                          <option value="Speech Therapy">Speech Therapy</option>
                          <option value="Occupational therapy">Occupational therapy</option>
                          <option value="Consulting">Consulting</option>
                          <option value="special education">special education</option>
                          <option value="Oral Feeding">Oral Feeding</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 column">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control textarea required"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message...."
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="form-group flex-box">
                        <div className="submit-btn">
                          <button className="theme-btn btn-style-one" name="submit" type="submit">
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div
                className="contact-info-three"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '40px 25px'
                }}
              >
                <div className="single-info" style={{ width: '100%', textAlign: 'center' }}>
                  <h4 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#1a1a2e' }}>
                    Quick Contact
                  </h4>
                  <div
                    className="wrapper-box"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginBottom: 0 }}
                  >
                    <a
                      href="mailto:echostar.india@gmail.com"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        fontSize: '15px',
                        color: '#444',
                        fontWeight: 500
                      }}
                    >
                      <i className="fa-solid fa-envelope" style={{ color: '#ff6f3c', fontSize: '16px' }}></i> echostar.india@gmail.com
                    </a>
                    <p style={{ margin: 0 }}>
                      <a
                        href="tel:+91-9812506562"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          fontSize: '15px',
                          color: '#444',
                          fontWeight: 500
                        }}
                      >
                        <i className="fa-solid fa-phone" style={{ color: '#ff6f3c', fontSize: '16px' }}></i> +91-9812506562
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      {/* CTA Section */}
      <section className="page-title" style={{ backgroundImage: 'url(/nimg/child.jpg)', padding: '6rem' }}>
        <div className="auto-container">
          <div className="content-box">
            <h1>Get Touch With Us</h1>
            <center>
              <button className="button999">Read More</button>
            </center>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="sec-bg-one" style={{ backgroundImage: 'url(/nimg/banner2.jpg)' }}></div>
        <div className="sec-bg-two" style={{ backgroundImage: 'url(/nimg/test.jpg)' }}></div>
        <div className="auto-container">
          <div className="row align-items-lg-center justify-content-lg-between">
            <div className="col-lg-8">
              <div className="testimonial-carousel-wrapper">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                >
                  <SwiperSlide>
                    <div className="testimonial-block-one">
                      <div className="inner-box">
                        <div className="author-box">
                          <div className="author-info">
                            <div className="image">
                              <img src="/nimg/man.jpeg" style={{ height: '99px' }} alt="Rahul Rajput" />
                            </div>
                            <div className="author-title">Rahul Rajput</div>
                          </div>
                        </div>
                        <div className="content-box">
                          <div className="text">
                            My nephew Anya was facing issues with her hearing and speaking skills.thanks to EchoStar for providing the best possible treatment and helping her improve.
                          </div>
                          <div className="rating">
                            <a href="#"><span className="fa fa-star"></span></a>
                            <a href="#"><span className="fa fa-star"></span></a>
                            <a href="#"><span className="fa fa-star"></span></a>
                            <a href="#"><span className="fa fa-star"></span></a>
                            <a href="#"><span className="fa fa-star"></span></a>
                          </div>
                          <div className="quote">
                            <span className="flaticon-quote"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial-block-one">
                      <div className="inner-box">
                        <div className="author-box">
                          <div className="author-info">
                            <div className="image">
                              <img src="/nimg/man3.png" style={{ height: '99px' }} alt="Vishal Singha" />
                            </div>
                            <div className="author-title">Vishal Singha</div>
                          </div>
                        </div>
                        <div className="content-box">
                          <div className="text">
                            I have a wonderful experience at EchoStar during my child’s Bera test. The staff was highly skilled and knowledgeable.
                          </div>
                          <div className="rating">
                            <a href="#"><span className="fa fa-star"></span></a>
                            <a href="#"><span className="fa fa-star"></span></a>
                            <a href="#"><span className="fa fa-star"></span></a>
                            <a href="#"><span className="fa fa-star"></span></a>
                            <a href="#"><span className="fa fa-star"></span></a>
                          </div>
                          <div className="quote">
                            <span className="flaticon-quote"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
