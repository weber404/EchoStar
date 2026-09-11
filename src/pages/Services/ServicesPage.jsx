import React from 'react';
import PageBanner from '../../components/layout/PageBanner';

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <PageBanner title="ABA Therapy" breadcrumb="ABA Therapy" />

      <section style={{ marginBottom: '2rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1 style={{ marginTop: '2rem', color: 'blueviolet' }}>ABA Therapy</h1>
          </center>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <div className="single-item-carousel">
                <img src="/nimg/Aba%20therapy.jpg" alt="ABA Therapy" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="text">
                  At EchoStar, we are dedicated to enhancing the lives of individuals with developmental challenges through Applied Behavior Analysis (ABA) therapy. Our team of experienced therapists works closely with clients and their families to develop personalized treatment plans tailored to each individual's unique needs. We believe in fostering growth, independence, and improved communication skills in a supportive and compassionate environment. By utilizing evidence-based practices, EchoStar is committed to making a positive impact on the lives of those we serve, empowering them to reach their full potential.
                </div>
                <br />
                <div className="text">
                  At EchoStar, we specialize in providing Applied Behavior Analysis (ABA) therapy for children, helping them to overcome developmental challenges and thrive. Our child-centered approach focuses on creating a nurturing environment where each child's unique strengths and needs are addressed. Through individualized therapy plans, we work closely with families to develop effective strategies that promote positive behavior, communication, and social skills. Our goal is to empower children to reach their full potential, ensuring they have the tools and support they need for a brighter future.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
