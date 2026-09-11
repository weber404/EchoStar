'use strict';

'use client';

import React, { useState, useEffect } from 'react';

export default function About() {
  // Welcome section image slider state
  const welcomeImages = ['/nimg/ab2.jpg', '/nimg/banner2.jpg'];
  const [welcomeImgIndex, setWelcomeImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWelcomeImgIndex((prev) => (prev + 1) % welcomeImages.length);
    }, 4500);
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
      
      {/* Page Title / Top Image Banner */}
      <section>
        <div>
          <img src="/nimg/aboutus5 (1).jpg" alt="About Us Banner" style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      {/* Welcome Section */}
      <section style={{ marginBottom: '2rem', paddingTop: '3rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1 style={{ marginTop: '2rem', color: 'blueviolet' }}>Welcome To EchoStar</h1>
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
                <h3 style={{ marginTop: '2rem' }}>About Us -</h3>
                <div className="text" style={{ fontSize: '15px', color: '#777777', lineHeight: '26px' }}>
                  There are various reasons for speech delay and other speech-related issues. Here, we provide a 100% scientific and systematic approach to your child’s special needs and cater to a speedy recovery.
                  <br /><br />
                  EchoStar offers you premier diagnostic and rehabilitation services as per your lifestyle. In our work culture, we prioritize our patient’s needs, making us the pioneer speech and language therapy center in Gurgaon and many more cities.
                </div>
                <div className="point-block" style={{ marginTop: '1.5rem' }}>
                  <h4><span className="flaticon-tick"></span> Our Mission :</h4>
                  <div className="text" style={{ fontSize: '15px', color: '#777777', lineHeight: '26px' }}>
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
                      We provide the best available therapy to each patient per their personalized needs. We offer tailor-made sessions to the patients, and our commitment to our work makes us stand out.
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
                  <div className="image-one"><img src="/nimg/ab1.jpg" style={{ height: '600px', objectFit: 'cover', width: '100%', borderRadius: '8px' }} alt="Therapist with child" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="auto-container">
          <div className="row m-0 justify-content-md-between align-items-end" style={{ marginBottom: '3rem' }}>
            <div className="sec-title light">
              <h1 style={{ color: 'black' }}>Team behind EchoStar</h1>
              <div className="text" style={{ color: 'black', fontSize: '15px' }}>Our work would not be possible without the work of our dedicated team members.</div>
            </div>
          </div>

          {/* Akash Chauhan */}
          <div className="wavecontainer" style={{ marginBottom: '4rem' }}>
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="image-block-two">
                    <div className="image-one">
                      <img src="/nimg/akash-chauhan.jpg" style={{ borderRadius: '20px', width: '100%', maxHeight: '480px', objectFit: 'cover' }} alt="Akash Chauhan" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="sec-title">
                    <h1>Akash Chauhan</h1>
                    <div className="text" style={{ fontSize: '15px', color: '#777777', lineHeight: '26px' }}>
                      Akash Chauhan is an accomplished Speech Pathologist with 5 years of extensive experience in the field. As the Director of EchoStar, he leads a dedicated team of professionals committed to delivering exceptional speech and language therapy services. Akash's expertise lies in diagnosing and treating a wide range of communication disorders, helping individuals improve their speech, language, and overall communication skills. His leadership at EchoStar reflects his deep passion for empowering clients to overcome their challenges and achieve their full potential. Akash is known for his personalized approach to therapy, tailoring each intervention to meet the unique needs of his clients. His dedication to excellence and his ability to foster a supportive and effective therapeutic environment make him a respected figure in the field. Under his guidance, EchoStar continues to be a trusted center for those seeking high-quality speech therapy services.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vikas Chauhan */}
          <div className="wavecontainer">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="image-block-two">
                    <div className="image-one">
                      <img src="/nimg/Untitled design (3).png" style={{ borderRadius: '20px', width: '100%', maxHeight: '450px', objectFit: 'cover' }} alt="Vikas Chauhan" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="sec-title">
                    <h1>Vikas Chauhan</h1>
                    <div className="text" style={{ fontSize: '15px', color: '#777777', lineHeight: '26px' }}>
                      Vikas Chauhan is a dedicated Speech, Language, and Swallow Specialist with a strong academic foundation from Osmania University. As an alumnus, he has developed a deep expertise in assessing and treating various speech, language, and swallowing disorders. Vikas gained valuable hands-on experience during his training at Medanta Hospital in Gurugram, one of India's leading healthcare institutions. This experience honed his skills in managing complex cases and providing comprehensive care. Currently, Vikas is a key member of the team at EchoStar, where he continues to apply his specialized knowledge to help clients overcome communication and swallowing challenges. His commitment to improving patient outcomes and his ability to connect with clients on a personal level make him an integral part of the EchoStar team. Vikas's background and experience ensure that he provides high-quality, evidence-based therapy to those in need.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Form and Map Info Section */}
      <section style={{ marginTop: '2rem', paddingBottom: '3rem' }}>
        <div className="auto-container">
          <div className="row align-items-center">
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

      {/* Get Touch With Us Callout Banner */}
      <section className="page-title" style={{ backgroundImage: 'url(/nimg/child.jpg)', padding: '6rem 0', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="auto-container">
          <div className="content-box text-center">
            <h1 style={{ color: 'white', marginBottom: '1.5rem' }}>Get Touch With Us</h1>
            <center>
              <button className="button999" onClick={() => window.location.href='/contact'}>
                Read More
              </button>
            </center>
          </div>
        </div>
      </section>

    </div>
  );
}
