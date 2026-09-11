import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function AboutPage() {
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
          <img src="/nimg/aboutus5 (1).jpg" alt="About EchoStar" width="100%" />
        </div>
      </section>

      {/* Welcome Section */}
      <section style={{ marginBottom: '2rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1 style={{ marginTop: '2rem', color: 'blueviolet' }}>Welcome To EchoStar</h1>
          </center>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
              >
                <SwiperSlide>
                  <div className="single-product-image-holder">
                    <img src="/nimg/ab2.jpg" alt="EchoStar Center" style={{ width: '100%' }} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-product-image-holder">
                    <img src="/nimg/banner2.jpg" alt="EchoStar Therapy" style={{ width: '100%' }} />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h3 style={{ marginTop: '2rem' }}>About Us -</h3>
                <div className="text">
                  There are various reasons for speech delay and other speech-related issues. Here, we provide a 100% scientific and systematic approach to your child’s special needs and cater to a speedy recovery. <br />
                  EchoStar offers you premier diagnostic and rehabilitation services as per your lifestyle. In our work culture, we prioritize our patient’s needs, making us the pioneer speech and language therapy center in Gurgaon and many more cities..
                </div>
                <div className="point-block">
                  <br />
                  <h4> <span className="flaticon-tick"></span> Our Mission :</h4>
                  <div className="text">
                    Our mission is to treat speech and language disorders in people of every age. Our mission is to provide the best professional assistance to our patients and see them talking without any problem or delay.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="whychoose-us-section-two" style={{ padding: '0px' }}>
        <div className="wavecontainer">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="sec-title">
                  <h1>Why Choose Us ?</h1>
                  <div className="text">
                    EchoStar Speech & Language Therapy Centre is a reputed name catering to speech and language-related issues of the number of children across the city.
                  </div>
                </div>
                <div className="whychoose-block-two">
                  <div className="content">
                    <h4>Our Vision :</h4>
                    <div className="text">
                      We offer our patients robust, advanced, and personalized treatment and strive to bridge the gap by reaching out to them without hassle.
                    </div>
                  </div>
                </div>
                <div className="whychoose-block-two">
                  <div className="content">
                    <h4>Our Goal</h4>
                    <div className="text">
                      We provide the best available therapy to each patient per their personalized needs. We offer tailor-made sessions to the patients, and our commitment to our work makes us stand out.
                    </div>
                  </div>
                </div>
                <div className="wrapper-box">
                  <div className="contact-info-five">
                    <div className="icon-box"><span className="flaticon-phone-1"></span></div>
                    <h5>Need assitant for join with us?</h5>
                    <h4><a href="tel:+91-9812506562">+91-9812506562</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-block-two">
                  <div className="image-one">
                    <img src="/nimg/ab1.jpg" style={{ height: '600px', width: '100%', objectFit: 'cover' }} alt="Why Choose Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="auto-container">
          <div className="row m-0 justify-content-md-between align-items-end" style={{ marginTop: '3rem' }}>
            <div className="sec-title light">
              <h1 style={{ color: 'black' }}>Team behind EchoStar</h1>
              <div className="text" style={{ color: 'black' }}>
                Our work would not be possible without the work of our dedicated team members.
              </div>
            </div>
            <div className="link-btn mb-50">
              <Link to="/about" className="theme-btn btn-style-one">
                <span>Meet All Members</span>
              </Link>
            </div>
          </div>
          <div className="wavecontainer">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="image-block-two">
                    <div className="image-one">
                      <img
                        src="/nimg/akash-chauhan.jpg"
                        style={{ borderRadius: '20px', width: '100%', maxHeight: '480px', objectFit: 'cover' }}
                        alt="Akash Chauhan"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="sec-title">
                    <h1>Akash Chauhan</h1>
                    <div className="text">
                      Akash Chauhan is an accomplished Speech Pathologist with 5 years of extensive experience in the field. As the Director of EchoStar, he leads a dedicated team of professionals committed to delivering exceptional speech and language therapy services. Akash's expertise lies in diagnosing and treating a wide range of communication disorders, helping individuals improve their speech, language, and overall communication skills. His leadership at EchoStar reflects his deep passion for empowering clients to overcome their challenges and achieve their full potential. Akash is known for his personalized approach to therapy, tailoring each intervention to meet the unique needs of his clients. His dedication to excellence and his ability to foster a supportive and effective therapeutic environment make him a respected figure in the field. Under his guidance, EchoStar continues to be a trusted center for those seeking high-quality speech therapy services.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
              <button className="button999">
                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Read More</Link>
              </button>
            </center>
          </div>
        </div>
      </section>
    </div>
  );
}
