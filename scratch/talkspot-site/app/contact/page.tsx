'use strict';

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Contact() {
  // Testimonial State
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

  // Form State
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
      
      {/* Page Title */}
      <section>
        <div>
          <img src="/nimg/contact-banner.jpg" alt="Contact Us Banner" style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      {/* Form and info section */}
      <section style={{ marginTop: '2rem', paddingBottom: '3rem' }}>
        <div className="auto-container">
          <div className="row align-items-center">
            {/* Form Column */}
            <div className="col-lg-8">
              <div className="default-form-area">
                <div className="sec-title">
                  <h1 style={{ color: 'blueviolet', marginBottom: '1.5rem' }}>Drop us a line</h1>
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
                          value={formData.interest}
                          onChange={handleInputChange}
                          style={{ width: '100%', height: '45px', borderRadius: '4px', border: '1px solid #ced4da', padding: '0 10px', fontSize: '14px' }}
                        >
                          <option>Interested In</option>
                          <option>ABA therapy</option>
                          <option>Speech Therapy</option>
                          <option>Occupational therapy</option>
                          <option>Consulting</option>
                          <option>special education</option>
                          <option>Oral Feeding</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 column">
                      <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <textarea 
                          name="message" 
                          className="form-control textarea required" 
                          value={formData.message} 
                          onChange={handleInputChange} 
                          placeholder="Message...." 
                          style={{ height: '120px' }}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group flex-box">
                        <div className="submit-btn">
                          <button className="theme-btn btn-style-one" type="submit" disabled={isSubmitting}>
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Contact Column */}
            <div className="col-lg-4 col-md-4">
              <div className="contact-info-three" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px 25px' }}>
                <div className="single-info" style={{ width: '100%', textAlign: 'center' }}>
                  <h4 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#1a1a2e' }}>Quick Contact</h4>
                  <div className="wrapper-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginBottom: 0 }}>
                    <a href="mailto:echostar.india@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '15px', color: '#444', fontWeight: 500 }}>
                      <i className="fa-solid fa-envelope" style={{ color: '#ff6f3c', fontSize: '16px' }}></i> echostar.india@gmail.com
                    </a>
                    <p style={{ margin: 0 }}>
                      <a href="tel:+91-9812506562" style={{ display: 'inline-flex', alignItems: 'center', border: 'none', justifyContent: 'center', gap: '10px', fontSize: '15px', color: '#444', fontWeight: 500 }}>
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



      {/* Callout Banner */}
      <section className="page-title" style={{ backgroundImage: 'url(/nimg/child.jpg)', padding: '6rem 0', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '3rem' }}>
        <div className="auto-container">
          <div className="content-box text-center">
            <h1 style={{ color: 'white', marginBottom: '1.5rem' }}>Get Touch With Us</h1>
            <center>
              <button className="button999" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Read More
              </button>
            </center>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section" style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
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

    </div>
  );
}
