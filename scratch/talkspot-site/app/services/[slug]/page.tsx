'use strict';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, SITE_INFO } from '../../../constants/content';
import { ChevronRight, Phone, MessageSquare, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

interface ServicePageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function ServicePage({ params }: ServicePageProps) {
  // Await the params for Next.js 15 compatibility
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get other services for the sidebar directory
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <div className={styles.servicePage}>
      {/* 1. Page Header Banner */}
      <section className="page-title" style={{ backgroundImage: "url('/nimg/ABA-Therapy-Banner-Image-2.jpg')" }}>
        <div className="auto-container">
          <div className="content-box">
            <h1>{service.title}</h1>
            <ul className="bread-crumb">
              <li><Link href="/"><span className="fa fa-home"></span></Link></li>
              <li>{service.title}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.contentGrid}>
            
            {/* Left Column: Therapy details */}
            <div className={styles.detailsCol}>
              <div className={styles.imageFallback}>
                <div className={styles.imageOverlayText}>
                  <h3>Specialized Clinical Setup</h3>
                  <p>Individualized treatment rooms equipped with modern tools.</p>
                </div>
              </div>

              <h2 className={styles.detailTitle}>About {service.title}</h2>
              <div className={styles.paragraphs}>
                {service.longDesc.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Bullet benefits */}
              <div className={styles.benefitsSection}>
                <h3 className={styles.benefitsTitle}>Key Benefits & Focus Areas</h3>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitCard}>
                    <CheckCircle size={20} className={styles.benefitIcon} />
                    <span>Individual attention & custom pace</span>
                  </div>
                  <div className={styles.benefitCard}>
                    <CheckCircle size={20} className={styles.benefitIcon} />
                    <span>Parent guidance & home routines</span>
                  </div>
                  <div className={styles.benefitCard}>
                    <CheckCircle size={20} className={styles.benefitIcon} />
                    <span>Certified Speech & Behavior therapists</span>
                  </div>
                  <div className={styles.benefitCard}>
                    <CheckCircle size={20} className={styles.benefitIcon} />
                    <span>Structured assessment reports & timelines</span>
                  </div>
                </div>
              </div>

              {/* Consultation Callout */}
              <div className={styles.calloutCard}>
                <ShieldCheck size={36} className={styles.calloutIcon} />
                <div>
                  <h4>Standard Diagnostic Assessment</h4>
                  <p>Our initial diagnostic reviews isolate articulation, motor planning, behavioral cues, and receptive levels before recommending class frequencies.</p>
                  <a href={SITE_INFO.telUrl} className="btn btn-primary" style={{ marginTop: '12px' }}>
                    <Phone size={16} />
                    <span>Book Diagnostic Session</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar directory & Quick info */}
            <div className={styles.sidebarCol}>
              
              {/* Directory */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarCardTitle}>Our Therapies</h3>
                <div className={styles.directory}>
                  {SERVICES.map((s) => (
                    <Link 
                      key={s.slug} 
                      href={`/services/${s.slug}`}
                      className={`${styles.directoryItem} ${s.slug === slug ? styles.activeDirectory : ''}`}
                    >
                      <span>{s.title}</span>
                      <ChevronRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Urgent Callout Card */}
              <div className={`${styles.sidebarCard} ${styles.ctaCard}`}>
                <h3 className={styles.ctaCardTitle}>Need Help?</h3>
                <p>Have questions about your child's behavior, pronunciation, or sensory responses?</p>
                <div className={styles.ctaNumberBox}>
                  <Phone size={24} className={styles.ctaPhoneIcon} />
                  <div>
                    <span>Call Support</span>
                    <a href={SITE_INFO.telUrl}>{SITE_INFO.primaryPhone}</a>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <span>Message Us</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
