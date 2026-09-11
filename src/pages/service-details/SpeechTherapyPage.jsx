import React from 'react';
import PageBanner from '../../components/layout/PageBanner';

export default function SpeechTherapyPage() {
  return (
    <div className="page-wrapper">
      <PageBanner title="Speech Therapy" breadcrumb="Speech Therapy" />

      <section style={{ marginBottom: '2rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1 style={{ marginTop: '2rem', color: 'blueviolet' }}>Speech Therapy</h1>
          </center>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <div className="single-item-carousel">
                <img src="/nimg/OIP.jpeg" alt="Speech Therapy" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="text">
                  EchoStar is a trusted provider of speech therapy services, committed to helping individuals of all ages enhance their communication skills. Our expert speech-language pathologists work with a diverse range of clients, from young children learning to speak to adults facing challenges with speech and language. We specialize in treating a variety of conditions, including articulation disorders, language delays, stuttering, voice disorders, and more.
                </div>
                <br />
                <div className="text">
                  At EchoStar, we understand that effective communication is key to personal and social success. That's why we offer personalized therapy plans tailored to each client's specific needs and goals. Our approach is holistic, focusing not only on speech production but also on building language comprehension, social communication, and cognitive-communication skills.
                </div>
                <br />
                <div className="text">
                  We place a strong emphasis on collaboration with families and caregivers, providing them with the tools and strategies to support progress at home. This partnership ensures that therapy is consistent and effective, helping clients achieve meaningful and lasting improvements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
