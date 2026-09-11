import React from 'react';
import PageBanner from '../../components/layout/PageBanner';

export default function OralFeedingPage() {
  return (
    <div className="page-wrapper">
      <PageBanner title="Speech Clarity and Oral Feeding Therapy" breadcrumb="Speech Clarity and Oral Feeding Therapy" />

      <section style={{ marginBottom: '2rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1 style={{ marginTop: '4rem', color: 'blueviolet' }}>Speech Clarity and Oral Feeding Therapy</h1>
          </center>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <div className="single-item-carousel">
                <img src="/nimg/feeding-therapy.jpg" alt="Speech Clarity and Oral Feeding Therapy" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="text">
                  EchoStar is dedicated to enhancing speech clarity and addressing oral feeding challenges through specialized therapy services. Our team of experienced therapists works with children and adults who face difficulties in articulating words clearly and managing oral motor skills essential for safe and effective feeding. We understand the critical role that speech clarity and oral feeding play in overall communication, nutrition, and quality of life.
                </div>
                <br />
                <div className="text">
                  Our Speech Clarity Therapy focuses on improving articulation, phonological processing, and muscle coordination to help clients speak more clearly and confidently. Whether addressing issues like apraxia, dysarthria, or other speech sound disorders, our approach is tailored to each individual's specific needs, ensuring that therapy is both effective and engaging.
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
