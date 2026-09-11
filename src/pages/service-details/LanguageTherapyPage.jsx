import React from 'react';
import PageBanner from '../../components/layout/PageBanner';

export default function LanguageTherapyPage() {
  return (
    <div className="page-wrapper">
      <PageBanner title="Language & Communication Therapy" breadcrumb="Language & Communication Therapy" />

      <section style={{ marginBottom: '2rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1 style={{ marginTop: '4rem', color: 'blueviolet' }}>Language & Communication Therapy</h1>
          </center>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <div className="single-item-carousel">
                <img src="/nimg/lang2.jpeg" alt="Language & Communication Therapy" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="text">
                  EchoStar is a leading provider of Language & Communication Therapy, dedicated to helping individuals overcome challenges in understanding and using language. Our team of skilled therapists works with children and adults to address a wide range of communication difficulties, including language delays, expressive and receptive language disorders, social communication challenges, and more.
                </div>
                <br />
                <div className="text">
                  At EchoStar, we believe that effective communication is the foundation of successful relationships and personal growth. Our therapy programs are tailored to each client's unique needs, focusing on enhancing their ability to understand and express themselves in various contexts. We use evidence-based techniques to improve language comprehension, vocabulary development, sentence structure, and conversational skills.
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
