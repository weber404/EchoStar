import React from 'react';
import PageBanner from '../../components/layout/PageBanner';

export default function OccupationalTherapyPage() {
  return (
    <div className="page-wrapper">
      <PageBanner title="Occupational Therapy" breadcrumb="Occupational Therapy" />

      <section style={{ marginBottom: '2rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1 style={{ marginTop: '4rem', color: 'blueviolet' }}>Occupational Therapy</h1>
          </center>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <div className="single-item-carousel">
                <img src="/nimg/occupational-therapy.jpg" alt="Occupational Therapy" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="text">
                  EchoStar is a leading provider of Occupational Therapy, dedicated to helping individuals of all ages achieve greater independence and improve their daily living skills. Our team of skilled occupational therapists works closely with children and adults to address a wide range of physical, cognitive, and sensory challenges. We create personalized therapy plans that focus on enhancing the skills necessary for everyday activities, whether at home, school, work, or in the community.
                </div>
                <br />
                <div className="text">
                  Our Occupational Therapy services are designed to support individuals with developmental delays, sensory processing issues, motor skill difficulties, and other conditions that impact their ability to perform daily tasks. At EchoStar, we use evidence-based approaches to develop fine motor skills, improve coordination, enhance sensory integration, and build self-care abilities.
                </div>
                <br />
                <div className="text">
                  We believe in a holistic approach to therapy, which includes collaborating with families, caregivers, and educators to ensure that progress extends beyond the therapy sessions. By providing practical strategies and support, we help our clients apply the skills they learn in real-life situations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
