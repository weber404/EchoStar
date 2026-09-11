'use strict';

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  // 1. Hero Banner Slider State
  const [heroIndex, setHeroIndex] = useState(0);
  const heroSlides = [
    {
      bg: '/nimg/test.jpg',
      title: 'Occupational \n Therapy',
      align: 'content-box',
      bgPos: 'center top'
    },
    {
      bg: '/nimg/talk.jpeg',
      title: 'EchoStar',
      align: 'content-box justify-content-center text-center',
      bgPos: 'center top'
    },
    {
      bg: '/nimg/talk2.jpeg',
      title: 'Speech Therapy',
      align: 'content-box justify-content-end',
      bgPos: 'center top'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 2. Services Slider State (Horizontal drag/scroll wrapper)
  const services = [
    { name: 'ABA Therapy', img: '/nimg/Aba therapy.jpg', link: '/services/abatherapy' },
    { name: 'Speech Therapy', img: '/nimg/speech.jpg', link: '/services/speech' },
    { name: 'Language & Communication Therapy', img: '/nimg/language.jpeg', link: '/services/language' },
    { name: 'Oral Feeding Therapy', img: '/nimg/oral.jpg', link: '/services/oralfeeding' },
    { name: 'Speech Clarity Therapy', img: '/nimg/speech clarity.webp', link: '/services/oralfeeding' },
    { name: 'Stuttering Stammering Therapy', img: '/nimg/stutering.jpeg', link: '/services/stutering' },
    { name: 'Special Education Therapy', img: '/nimg/special.jpg', link: '/services/specialedu' },
    { name: 'Occupational Therapy', img: '/nimg/Occupational.webp', link: '/services/occupation' }
  ];
  const [servicesIndex, setServicesIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setServicesIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 3. Welcome section image slider state
  const welcomeImages = ['/nimg/ab2.jpg', '/nimg/banner2.jpg'];
  const [welcomeImgIndex, setWelcomeImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWelcomeImgIndex((prev) => (prev + 1) % welcomeImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // 4. Testimonials Slider State
  const testimonials = [
    {
      img: '/nimg/man.jpeg',
      name: 'Rahul Rajput',
      text: 'My nephew Anya was facing issues with her hearing and speaking skills.thanks to EchoStar for providing the best possible treatment and helping her improve.'
    },
    {
      img: '/nimg/man3.png',
      name: 'Vishal Singha',
      text: 'I have a wonderful experience at EchoStar during my child’s Bera test. The staff was highly skilled and knowledgeable.'
    }
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // 5. Contact Form Handler
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Interested In',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'Interested In',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="page-wrapper">
      
      {/* Hero Banner Section */}
      <section className="banner-section style-six" style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
        <div className="swiper-container banner-slider" style={{ width: '100%', height: '100%' }}>
          <div className="swiper-wrapper" style={{ width: '100%', height: '100%' }}>
            {heroSlides.map((slide, idx) => (
              <div 
                key={idx} 
                className={`swiper-slide ${idx === heroIndex ? 'swiper-slide-active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: slide.bgPos || 'center top',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: idx === heroIndex ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                  zIndex: idx === heroIndex ? 1 : 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div className="content-outer" style={{ width: '100%' }}>
                  <div className={`auto-container ${slide.align}`}>
                    <div className="inner">
                      <h1 style={{ whiteSpace: 'pre-line', color: '#1b1f2a' }}>{slide.title}</h1>
                      <div className="link-box">
                        <Link href="/contact" className="theme-btn btn-style-sixteen">
                          <span>Contact Us</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation dots */}
          <div className="banner-slider-pagination style-two" style={{ position: 'absolute', bottom: '20px', zIndex: 10, width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {heroSlides.map((_, idx) => (
              <span 
                key={idx} 
                onClick={() => setHeroIndex(idx)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: idx === heroIndex ? '#e9212e' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Causes Section Two */}
      <section className="causes-section-two" style={{ padding: '4rem 0' }}>
        <div className="auto-container">
          <div className="cause-wrapper">
            <div className="row">
              {/* Cause Block 1 */}
              <div className="cause-block-two col-lg-4">
                <div className="inner-box">
                  <div className="image">
                    <img 
                      src="/nimg/speech-therapy.jpeg" 
                      style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'top' }} 
                      alt="Speech Therapy" 
                    />
                    <div className="overlay">
                      <Link href="/services/speech" className="theme-btn btn-style-seven">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="wrapper-box">
                      <h4><Link href="/services/speech">Speech Therapy</Link></h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cause Block 2 */}
              <div className="cause-block-two col-lg-4">
                <div className="inner-box">
                  <div className="image">
                    <img 
                      src="/nimg/Aba therapy.jpg" 
                      style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'top' }} 
                      alt="ABA Therapy" 
                    />
                    <div className="overlay">
                      <Link href="/services/abatherapy" className="theme-btn btn-style-seven">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="wrapper-box">
                      <h4><Link href="/services/abatherapy">ABA Therapy</Link></h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cause Block 3 */}
              <div className="cause-block-two col-lg-4">
                <div className="inner-box">
                  <div className="image">
                    <img 
                      src="/nimg/occupational-therapy.jpg" 
                      style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'top' }} 
                      alt="Occupational Therapy" 
                    />
                    <div className="overlay">
                      <Link href="/services/occupation" className="theme-btn btn-style-seven">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="wrapper-box">
                      <h4><Link href="/services/occupation">Occupational Therapy</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section style={{ marginBottom: '2rem', paddingTop: '3rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1>Welcome To EchoStar</h1>
          </center>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <div className="single-product-image-holder" style={{ position: 'relative', overflow: 'hidden', height: '350px', borderRadius: '8px' }}>
                {welcomeImages.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt="Clinic Image" 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: idx === welcomeImgIndex ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out'
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h3>About Us</h3>
                <div className="text" style={{ fontSize: '15px', color: '#777777', lineHeight: '26px' }}>
                  There are various reasons for speech delay and other speech-related issues. Here, we provide a 100% scientific and systematic approach to your child’s special needs and cater to a speedy recovery.
                  <br /><br />
                  In our work culture, we prioritize our patient’s needs, making us the pioneer speech and language therapy center in Gurgaon and many more cities.
                </div>
                <div className="point-block" style={{ marginTop: '1.5rem' }}>
                  <h4><span className="flaticon-tick"></span> Our Mission</h4>
                  <div className="text" style={{ fontSize: '15px', color: '#777777', lineHeight: '26px' }}>
                    Our mission is to treat speech and language disorders in people of every age. Our mission is to provide the best professional assistance to our patients and see them talking without any problem or delay.
                    <center style={{ marginTop: '1.5rem' }}>
                      <Link href="/about" className="button999" style={{ display: 'inline-block', textDecoration: 'none' }}>
                        Read More
                      </Link>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Slider Section */}
      <section style={{ backgroundColor: '#1e232e', padding: '4rem 0' }}>
        <center style={{ color: 'white', marginBottom: '2rem' }}>
          <h1 style={{ color: 'white' }}>Our Services</h1>
        </center>
        <div className="auto-container" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '2rem', transition: 'transform 0.5s ease', transform: `translateX(-${servicesIndex * 270}px)` }}>
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="content" 
                style={{ 
                  flexShrink: 0, 
                  width: '250px', 
                  backgroundColor: '#1b1f2a', 
                  border: '2px solid rgba(255,255,255,0.1)', 
                  borderRadius: '7px', 
                  overflow: 'hidden',
                  borderBottom: '4px solid #0099ff',
                  borderTop: '4px solid #0099ff'
                }}
              >
                <img src={service.img} style={{ height: '200px', width: '100%', objectFit: 'cover' }} alt={service.name} />
                <div className="text-content" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ color: 'white', fontSize: '16px', fontWeight: '500', height: '45px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {service.name}
                  </h3>
                  <Link href={service.link} className="btn" style={{ padding: '6px 16px', fontSize: '12px', marginTop: '10px', display: 'inline-block', textDecoration: 'none', color: '#1b1f2a' }}>
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Services Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2rem' }}>
            {services.map((_, idx) => (
              <span 
                key={idx} 
                onClick={() => setServicesIndex(idx)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: idx === servicesIndex ? '#0099ff' : 'rgba(255,255,255,0.2)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="whychoose-us-section-two" style={{ padding: '0px' }}>
        <div className="wavecontainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,149.3C672,149,768,171,864,197.3C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="sec-title">
                  <h1>Why Choose Us ?</h1>
                  <div className="text" style={{ fontSize: '15px', color: '#777777', lineHeight: '26px' }}>
                    EchoStar speech and language therapy center is a reputed name catering to speech and language-related issues of the number of children across the city.
                  </div>
                </div>
                <div className="whychoose-block-two">
                  <div className="content">
                    <h4>Our Vision :</h4>
                    <div className="text" style={{ fontSize: '14px', color: '#777777' }}>
                      We offer our patients robust, advanced, and personalized treatment and strive to bridge the gap by reaching out to them without hassle.
                    </div>
                  </div>
                </div>
                <div className="whychoose-block-two">
                  <div className="content">
                    <h4>Our Goal</h4>
                    <div className="text" style={{ fontSize: '14px', color: '#777777' }}>
                      We provide the best available therapy to each client as per their personalized needs. We offer tailor sessions to the clients, and our commitment to our work makes us stand out.
                    </div>
                  </div>
                </div>
                <div className="wrapper-box" style={{ marginTop: '2rem' }}>
                  <div className="contact-info-five">
                    <div className="icon-box"><span className="flaticon-phone-1"></span></div>
                    <h5>Need assistant for join with us?</h5>
                    <h4><a href="tel:+91-9812506562">+91-9812506562</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-block-two">
                  <div className="image-one"><img src="/nimg/ab1.jpg" style={{ height: '600px', objectFit: 'cover', width: '100%', borderRadius: '8px' }} alt="Therapist with kid" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funfact Section */}
      <section className="funfacts-section-two" style={{ backgroundImage: 'url(/images/resource/pattern.jpg)', backgroundAttachment: 'fixed' }}>
        <div className="auto-container">
          <div className="sec-title text-center light">
            <h1>SOME INTERESTING FACTS</h1>
          </div>
          <div className="outer-box">
            <div className="funfact-wrapper row">
              {/* Column 1 */}
              <div className="col-lg-4 counter-block-two">
                <div className="inner-box">
                  <div className="count-box">
                    <span className="count-text">10</span><span className="affix">K</span>
                  </div>
                  <div className="text" style={{ color: 'white' }}>Experience Year</div>
                </div>
              </div>
              {/* Column 2 */}
              <div className="col-lg-4 counter-block-two">
                <div className="inner-box">
                  <div className="count-box">
                    <span className="count-text">10000</span><span className="affix">+</span>
                  </div>
                  <div className="text" style={{ color: 'white' }}>Trained Children</div>
                </div>
              </div>
              {/* Column 3 */}
              <div className="col-lg-4 counter-block-two">
                <div className="inner-box">
                  <div className="count-box">
                    <span className="count-text">100</span><span className="affix">%</span>
                  </div>
                  <div className="text" style={{ color: 'white' }}>Happy Clients</div>
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
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-1.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 1" /></div>
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-2.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 2" /></div>
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-3.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 3" /></div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-4.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 4" /></div>
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-5.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 5" /></div>
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-6.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 6" /></div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-7.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 7" /></div>
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-8.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 8" /></div>
            <div className="col-md-4 col-sm-6"><img src="/nimg/gallery-9.jpg" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', marginBottom: '1.8rem', width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }} alt="Gallery 9" /></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="sec-bg-one" style={{ backgroundImage: 'url(/nimg/banner2.jpg)', opacity: 0.15 }}></div>
        <div className="sec-bg-two" style={{ backgroundImage: 'url(/nimg/test.jpg)', opacity: 0.15 }}></div>
        <div className="auto-container">
          <div className="row align-items-lg-center justify-content-lg-between">
            <div className="col-lg-8">
              <div className="testimonial-carousel-wrapper" style={{ position: 'relative', padding: '2rem 0' }}>
                <div className="testimonial-block-one" style={{ transition: 'opacity 0.5s ease' }}>
                  <div className="inner-box" style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '8px' }}>
                    <div className="author-box" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                      <div className="author-info" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div className="image">
                          <img src={testimonials[testimonialIndex].img} style={{ height: '70px', width: '70px', borderRadius: '50%', objectFit: 'cover' }} alt="Author" />
                        </div>
                        <div className="author-title" style={{ fontSize: '18px', fontWeight: 'bold' }}>{testimonials[testimonialIndex].name}</div>
                      </div>
                    </div>
                    <div className="content-box">
                      <div className="text" style={{ fontStyle: 'italic', fontSize: '15px', color: '#555', marginBottom: '15px' }}>
                        "{testimonials[testimonialIndex].text}"
                      </div>
                      <div className="rating" style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="fa fa-star" style={{ color: '#ffc107' }}></span>
                        ))}
                      </div>
                      <div className="quote"><span className="flaticon-quote"></span></div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Nav dots */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '1.5rem' }}>
                  {testimonials.map((_, idx) => (
                    <span 
                      key={idx} 
                      onClick={() => setTestimonialIndex(idx)}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: idx === testimonialIndex ? '#e9212e' : 'rgba(0,0,0,0.2)',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>

      {/* Form and Map Info Section */}
      <section style={{ marginTop: '2rem' }}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="default-form-area">
                <div className="sec-title">
                  <h1 style={{ color: 'blueviolet', marginBottom: '1.5rem' }}>Drop a line us</h1>
                </div>
                <form 
                  id="contact-form" 
                  onSubmit={handleFormSubmit}
                  className="contact-form" 
                  style={{ border: '1px solid black', padding: '2rem', borderRadius: '10px', backgroundColor: '#fcfcfc' }}
                >
                  {submitSuccess && (
                    <div style={{ padding: '12px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                      Your message has been sent successfully! Our coordinator will contact you shortly.
                    </div>
                  )}
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 column" style={{ marginBottom: '1rem' }}>
                      <div className="form-group">
                        <input 
                          type="text" 
                          name="name" 
                          className="form-control" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          placeholder="Name" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column" style={{ marginBottom: '1rem' }}>
                      <div className="form-group">
                        <input 
                          type="email" 
                          name="email" 
                          className="form-control required email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          placeholder="Email" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column" style={{ marginBottom: '1rem' }}>
                      <div className="form-group">
                        <input 
                          type="text" 
                          name="phone" 
                          className="form-control" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          placeholder="Phone" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column" style={{ marginBottom: '1rem' }}>
                      <div className="form-group">
                        <select 
                          name="interest" 
                          className="form-control" 
                          value={formData.interest} 
                          onChange={handleInputChange}
                        >
                          <option value="ABA Therapy">ABA Therapy</option>
                          <option value="Speech Therapy">Speech Therapy</option>
                          <option value="Occupational Therapy">Occupational Therapy</option>
                          <option value="Consulting">Consulting</option>
                          <option value="Special Education">Special Education</option>
                          <option value="Oral Feeding">Oral Feeding</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 column" style={{ marginBottom: '1rem' }}>
                      <div className="form-group">
                        <textarea 
                          name="message" 
                          className="form-control textarea required" 
                          value={formData.message} 
                          onChange={handleInputChange} 
                          placeholder="Message...." 
                          rows={4}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group flex-box" style={{ marginTop: '1.5rem' }}>
                        <div className="submit-btn">
                          <button 
                            className="theme-btn btn-style-one" 
                            type="submit" 
                            disabled={isSubmitting}
                            style={{ padding: '12px 35px', borderRadius: '30px', backgroundColor: '#ff6f3c', color: 'white', border: 'none', fontWeight: 'bold' }}
                          >
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4">
              <div className="contact-info-three" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px 25px' }}>
                <div className="single-info" style={{ width: '100%', textAlign: 'center' }}>
                  <h4 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#1a1a2e' }}>Quick Contact</h4>
                  <div className="wrapper-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginBottom: 0 }}>
                    <a href="mailto:echostar.india@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '15px', color: '#444', fontWeight: 500 }}>
                      <i className="fa-solid fa-envelope" style={{ color: '#ff6f3c', fontSize: '16px' }}></i> echostar.india@gmail.com
                    </a>
                    <p style={{ margin: 0 }}>
                      <a href="tel:+91-9812506562" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '15px', color: '#444', fontWeight: 500 }}>
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

      {/* Get in Touch banner */}
      <section className="page-title" style={{ backgroundImage: 'url(/nimg/child.jpg)', padding: '6rem 0', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '3rem' }}>
        <div className="auto-container">
          <div className="content-box text-center">
            <h1 style={{ color: 'white', marginBottom: '1.5rem' }}>Get Touch With Us</h1>
            <center>
              <Link href="/contact" className="button999" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Contact Us
              </Link>
            </center>
          </div>
        </div>
      </section>

    </div>
  );
}
