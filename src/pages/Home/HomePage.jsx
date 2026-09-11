import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Counter from '../../components/ui/Counter';
import LightboxModal from '../../components/ui/LightboxModal';

const galleryHomeImages = [
  { id: 1, src: '/newimgg/gallery-1.jpg', alt: 'Gallery 1' },
  { id: 2, src: '/newimgg/gallery-2.jpg', alt: 'Gallery 2' },
  { id: 3, src: '/newimgg/gallery-3.jpg', alt: 'Gallery 3' },
  { id: 4, src: '/newimgg/gallery-4.jpg', alt: 'Gallery 4' },
  { id: 5, src: '/newimgg/gallery-5.jpg', alt: 'Gallery 5' },
  { id: 6, src: '/newimgg/gallery-6.jpg', alt: 'Gallery 6' },
  { id: 7, src: '/newimgg/gallery-7.jpg', alt: 'Gallery 7' },
  { id: 8, src: '/newimgg/gallery-8.jpg', alt: 'Gallery 8' },
  { id: 9, src: '/newimgg/gallery-9.jpg', alt: 'Gallery 9' }
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    form_name: '',
    form_email: '',
    form_phone: '',
    form_service: 'Interested In',
    form_message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      {/* Banner Section */}
      <section className="banner-section style-six">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="banner-slider"
        >
          {/* Slide 1 */}
          <SwiperSlide
            style={{
              backgroundImage: 'url(/newimgg/test.jpg)',
              backgroundPosition: 'center top',
              backgroundSize: 'cover'
            }}
          >
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>Occupational <br /> Therapy</h1>
                  <div className="link-box">
                    <Link to="/contact" className="theme-btn btn-style-sixteen">
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide
            style={{
              backgroundImage: 'url(/newimgg/talk.jpeg)',
              backgroundPosition: 'center top',
              backgroundSize: 'cover'
            }}
          >
            <div className="content-outer">
              <div className="content-box justify-content-center">
                <div className="inner text-center">
                  <h1>EchoStar</h1>
                  <div className="link-box">
                    <Link to="/contact" className="theme-btn btn-style-sixteen">
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide
            style={{
              backgroundImage: 'url(/newimgg/talk2.jpeg)',
              backgroundPosition: 'center top',
              backgroundSize: 'cover'
            }}
          >
            <div className="content-outer">
              <div className="content-box justify-content-end">
                <div className="inner">
                  <h1>Speech Therapy</h1>
                  <div className="link-box">
                    <Link to="/contact" className="theme-btn btn-style-sixteen">
                      <span>Contact us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 3 Featured Cause Blocks */}
      <section className="causes-section-two">
        <div className="auto-container">
          <div className="cause-wrapper">
            <div className="row">
              {/* Block 1 */}
              <div className="cause-block-two col-lg-4">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/newimgg/speech-therapy.jpeg"
                      style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        borderRadius: '4px'
                      }}
                      alt="Speech Therapy"
                    />
                    <div className="overlay">
                      <Link to="/speech" className="theme-btn btn-style-seven">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="wrapper-box">
                      <h4>
                        <Link to="/speech">Speech Therapy</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div className="cause-block-two col-lg-4">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/newimgg/aba.jpeg"
                      style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        borderRadius: '4px'
                      }}
                      alt="ABA Therapy"
                    />
                    <div className="overlay">
                      <Link to="/abatherapy" className="theme-btn btn-style-seven">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="wrapper-box">
                      <h4>
                        <Link to="/abatherapy">ABA Therapy</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div className="cause-block-two col-lg-4">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/newimgg/tt.jpeg"
                      style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        borderRadius: '4px'
                      }}
                      alt="Occupational Therapy"
                    />
                    <div className="overlay">
                      <Link to="/occupation" className="theme-btn btn-style-seven">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="wrapper-box">
                      <h4>
                        <Link to="/occupation">Occupational Therapy</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      {/* Welcome Section */}
      <section style={{ marginBottom: '2rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1>Welcome To EchoStar</h1>
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
                    <img src="/nimg/ab2.jpg" alt="EchoStar" style={{ width: '100%' }} />
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
                <h3>About Us</h3>
                <div className="text">
                  There are various reasons for speech delay and other speech-related issues. Here, we provide a 100% scientific and systematic approach to your child’s special needs and cater to a speedy recovery. <br />
                  In our work culture, we prioritize our patient’s needs, making us the pioneer speech and language therapy center in Gurgaon and many more cities..
                </div>
                <div className="point-block">
                  <br />
                  <h4> <span className="flaticon-tick"></span> Our Mission</h4>
                  <div className="text">
                    Our mission is to treat speech and language disorders in people of every age. Our mission is to provide the best professional assistance to our patients and see them talking without any problem or delay.
                    <center>
                      <button className="button999">
                        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>Read More</Link>
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Coverflow Service Carousel */}
      <section style={{ backgroundColor: '#1e232e' }}>
        <center style={{ color: 'white', paddingTop: '2rem' }}>
          <h1>Our Services</h1>
        </center>
        <section className="collection">
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            initialSlide={2}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            className="mySwiper"
          >
            <SwiperSlide className="content">
              <img src="/nimg/Aba%20therapy.jpg" alt="ABA Therapy" />
              <div className="text-content">
                <h3 style={{ color: 'white' }}>ABA Therapy</h3>
                <Link to="/abatherapy"><button className="btn">Read more</button></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="content">
              <img src="/nimg/speech.jpg" alt="Speech Therapy" />
              <div className="text-content">
                <h3 style={{ color: 'white' }}>Speech Therapy</h3>
                <Link to="/speech"><button className="btn">Read more</button></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="content">
              <img src="/nimg/language.jpeg" alt="Language Therapy" />
              <div className="text-content">
                <h3 style={{ color: 'white' }}>Language & Communication Therapy</h3>
                <Link to="/language"><button className="btn">Read more</button></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="content">
              <img src="/nimg/oral.jpg" alt="Oral Feeding" />
              <div className="text-content">
                <h3 style={{ color: 'white' }}>Oral Feeding Therapy</h3>
                <Link to="/oralfeeding"><button className="btn">Read more</button></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="content">
              <img src="/nimg/speech%20clarity.webp" alt="Speech Clarity" />
              <div className="text-content">
                <h3 style={{ color: 'white' }}>Speech Clarity Therapy</h3>
                <Link to="/oralfeeding"><button className="btn">Read more</button></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="content">
              <img src="/nimg/sluttering.jpeg" alt="Stuttering" />
              <div className="text-content">
                <h3 style={{ color: 'white' }}>Stuttering Stammering Therapy</h3>
                <Link to="/stutering"><button className="btn">Read more</button></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="content">
              <img src="/nimg/special.jpg" alt="Special Education" />
              <div className="text-content">
                <h3 style={{ color: 'white' }}>Special Education Therapy</h3>
                <Link to="/specialedu"><button className="btn">Read more</button></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="content">
              <img src="/nimg/Occupational.webp" alt="Occupational Therapy" />
              <div className="text-content">
                <h3 style={{ color: 'white' }}>Occupational Therapy</h3>
                <Link to="/occupation"><button className="btn">Read more</button></Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>

      {/* Therapy Services Checklist Section */}
      <section className="talkspot-services echostar-services">
        <div className="container">
          <div className="section-title">
            <span>What We Do</span>
            <h2>Therapy Services</h2>
          </div>
          <div className="service-wrapper">
            <div className="service-image">
              <img src="/newimgg/service1.jpeg" alt="EchoStar Therapy" />
            </div>
            <div className="service-list">
              <div className="service-item">Communication Skills Development</div>
              <div className="service-item">Speech Therapy for Articulation & Pronunciation</div>
              <div className="service-item">Language Development Programs</div>
              <div className="service-item">Occupational Therapy for Daily Living Skills</div>
              <div className="service-item">Oral Behavior Analysis (ABA) Therapy</div>
              <div className="service-item">Sensory Integration & Processing Therapy</div>
              <div className="service-item">Cognitive Function Skills Training</div>
              <div className="service-item">Child Speech Therapy</div>
              <div className="service-item">Occupational Therapy</div>
              <div className="service-item">Autism Support Programs</div>
              <div className="service-item">Early Intervention Programs</div>
              <div className="service-item">Speech Therapy for Children</div>
              <div className="service-item">Pediatric Occupational Therapy</div>
              <div className="service-item">Autism Spectrum Disorder (ASD) Support</div>
              <div className="service-item">Language & Learning Assessments</div>
              <div className="service-item">Feeding & Swallowing Therapy</div>
              <div className="service-item">Parent & Caregiver Training</div>
              <div className="service-item">Speech Therapy Services</div>
              <div className="service-item">Occupational Therapy Services</div>
              <div className="service-item">Sensory Integration Therapy</div>
              <div className="service-item">Language & Communication Therapy</div>
              <div className="service-item">Augmentative Communication Support</div>
              <div className="service-item">Non-Verbal Communication Support</div>
              <div className="service-item">Down Syndrome Therapy</div>
              <div className="service-item">Expressive Language Therapy</div>
              <div className="service-item">Sentence Formation Therapy</div>
              <div className="service-item">Self-Care Skills Training</div>
              <div className="service-item">Remedial Therapy</div>
              <div className="service-item">Fluency Therapy</div>
              <div className="service-item">Fine Motor Skill Therapy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Adult Therapy Services Checklist (Reverse Layout) */}
      <section className="talkspot-services echostar-services talkspot-services-reverse echostar-services-reverse">
        <div className="container">
          <div className="service-wrapper reverse-layout">
            <div className="service-list">
              <div className="service-item">Adult Occupational Therapy</div>
              <div className="service-item">Neurological Rehabilitation</div>
              <div className="service-item">Orthopedic Rehabilitation</div>
              <div className="service-item">Visual Motor Skills Training</div>
              <div className="service-item">Visual Perceptual Skills Training</div>
              <div className="service-item">Play Therapy</div>
              <div className="service-item">Social Skills Training</div>
              <div className="service-item">Occupational Therapy Consultation</div>
              <div className="service-item">Occupational Therapy Assessments</div>
              <div className="service-item">Pre-vocational Skills Training</div>
              <div className="service-item">Feeding and Swallowing Therapy</div>
              <div className="service-item">Early Intervention</div>
              <div className="service-item">Speech Therapy for Children and Adults</div>
              <div className="service-item">Autism Therapy Program</div>
              <div className="service-item">ABA Therapy Services</div>
              <div className="service-item">Occupational Therapy Support</div>
              <div className="service-item">Speech & Language Therapy</div>
              <div className="service-item">Sensory Integration Therapy</div>
              <div className="service-item">Play Therapy Sessions</div>
              <div className="service-item">Group Therapy Programs</div>
              <div className="service-item">Early Intervention Speech Therapy</div>
              <div className="service-item">Speech Therapy</div>
              <div className="service-item">Language and Communication Therapy</div>
              <div className="service-item">Oral Placement Therapy</div>
              <div className="service-item">Speech Clarity and Feeding</div>
              <div className="service-item">Adult Speech Therapy</div>
              <div className="service-item">Stammering Treatment</div>
              <div className="service-item">Stuttering Treatment</div>
              <div className="service-item">Kids Speech Therapy – Late Speaking Child Treatment</div>
              <div className="service-item">Occupational Therapy</div>
              <div className="service-item">ABA Therapy</div>
              <div className="service-item">Special Education</div>
              <div className="service-item">Group Therapy</div>
              <div className="service-item">Feeding Therapy</div>
              <div className="service-item">Behaviour Modification Therapy</div>
              <div className="service-item">Autism Therapy</div>
              <div className="service-item">Sensory Integration Therapy</div>
              <div className="service-item">Handwriting Improvement</div>
              <div className="service-item">Fine Motor Skills Development</div>
              <div className="service-item">Gross Motor Skills Development</div>
              <div className="service-item">Cognitive Rehabilitation</div>
              <div className="service-item">Stroke Rehabilitation</div>
            </div>
            <div className="service-image">
              <img src="/newimgg/service2.jpeg" alt="Adult Therapy" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Wave SVG */}
      <section className="whychoose-us-section-two" style={{ padding: '0px' }}>
        <div className="wavecontainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,149.3C672,149,768,171,864,197.3C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
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
                      We provide the best available therapy to each client as per their personalized needs. We offer tailor sessions to the clients, and our commitment to our work makes us stand out.
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

      {/* Funfacts / Counter Section */}
      <section className="funfacts-section-two" style={{ backgroundImage: 'url(/images/background/bg-12.jpg)' }}>
        <div className="auto-container">
          <div className="sec-title text-center light">
            <h1>SOME INTERESTING FACTS</h1>
          </div>
          <div className="outer-box">
            <div className="funfact-wrapper row">
              <div className="col-lg-4 counter-block-two">
                <div className="inner-box">
                  <Counter stop={10} affix="K" speed={2500} />
                  <div className="text">Experience Year</div>
                </div>
              </div>
              <div className="col-lg-4 counter-block-two">
                <div className="inner-box">
                  <Counter stop={10000} affix="+" speed={2500} />
                  <div className="text">Traind Children</div>
                </div>
              </div>
              <div className="col-lg-4 counter-block-two">
                <div className="inner-box">
                  <Counter stop={100} affix="%" speed={2500} />
                  <div className="text">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ paddingBottom: '3rem', paddingTop: '3rem' }}>
        <center>
          <h1 style={{ color: 'black', marginBottom: '2.5rem' }}>Our Gallery</h1>
        </center>
        <div className="auto-container">
          <div className="row">
            {galleryHomeImages.slice(0, 3).map((item, index) => (
              <div className="col-md-4 col-sm-6" key={item.id}>
                <img
                  src={item.src}
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
                    marginBottom: '1.8rem',
                    width: '100%',
                    height: '360px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  alt={item.alt}
                  onClick={() => setLightboxIndex(index)}
                />
              </div>
            ))}
          </div>
          <div className="row">
            {galleryHomeImages.slice(3, 6).map((item, index) => (
              <div className="col-md-4 col-sm-6" key={item.id}>
                <img
                  src={item.src}
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
                    marginBottom: '1.8rem',
                    width: '100%',
                    height: '360px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  alt={item.alt}
                  onClick={() => setLightboxIndex(index + 3)}
                />
              </div>
            ))}
          </div>
          <div className="row">
            {galleryHomeImages.slice(6, 9).map((item, index) => (
              <div className="col-md-4 col-sm-6" key={item.id}>
                <img
                  src={item.src}
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
                    marginBottom: '1.8rem',
                    width: '100%',
                    height: '360px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  alt={item.alt}
                  onClick={() => setLightboxIndex(index + 6)}
                />
              </div>
            ))}
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

      {/* Drop a line us / Form Section */}
      <section style={{ marginTop: '2rem' }}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="default-form-area">
                <div className="sec-title">
                  <h1 style={{ color: 'blueviolet' }}>Drop a line us</h1>
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
                          name="form_name"
                          className="form-control"
                          value={formData.form_name}
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
                          name="form_email"
                          className="form-control required email"
                          value={formData.form_email}
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
                          name="form_phone"
                          className="form-control"
                          value={formData.form_phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <select
                          name="form_service"
                          className="form-control"
                          value={formData.form_service}
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
                          name="form_message"
                          className="form-control textarea required"
                          value={formData.form_message}
                          onChange={handleChange}
                          placeholder="Message...."
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="form-group flex-box">
                        <div className="submit-btn">
                          <button className="theme-btn btn-style-one" type="submit">
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
                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
              </button>
            </center>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      <LightboxModal
        images={galleryHomeImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryHomeImages.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < galleryHomeImages.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}
