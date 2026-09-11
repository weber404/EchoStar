import React from 'react';
import PageBanner from '../../components/layout/PageBanner';

export default function SpecialEducationPage() {
  return (
    <div className="page-wrapper">
      <PageBanner title="Special Education Therapy" breadcrumb="Special Education Therapy" />

      <section style={{ marginBottom: '2rem' }}>
        <div className="auto-container">
          <center style={{ paddingBottom: '1rem' }}>
            <h1 style={{ marginTop: '4rem', color: 'blueviolet' }}>Special Education Therapy</h1>
          </center>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <div className="single-item-carousel">
                <img src="/nimg/special.jpg" alt="Special Education Therapy" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="text">
                  EchoStar is committed to providing Special Education Therapy that supports the unique learning needs of children with developmental and learning disabilities. Our team of specialized educators and therapists work collaboratively to create individualized education plans (IEPs) tailored to each child's strengths, challenges, and goals. We believe that every child has the potential to succeed, and our therapy is designed to unlock that potential by addressing the specific learning difficulties they may face.
                </div>
                <br />
                <div className="text">
                  Our Special Education Therapy focuses on enhancing cognitive, social, emotional, and academic skills. We employ evidence-based strategies and interventions to help children overcome barriers to learning, improve their focus, and develop essential life skills. Our approach is holistic, considering not just academic performance but also the child’s overall well-being and social development.
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
