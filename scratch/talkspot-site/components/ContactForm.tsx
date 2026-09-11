'use strict';

'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES } from '../constants/content';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields (Name, Phone, and Message).');
      return;
    }

    setStatus('submitting');

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Drop Us A Line</h3>
      <p className={styles.subtitle}>We will get back to you within 24 business hours.</p>

      {status === 'success' ? (
        <div className={styles.successWrapper}>
          <CheckCircle2 size={48} className={styles.successIcon} />
          <h4 className={styles.successTitle}>Thank You!</h4>
          <p className={styles.successText}>Your message has been sent successfully. Our support team will contact you shortly.</p>
          <button onClick={() => setStatus('idle')} className="btn btn-primary">
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {status === 'error' && (
            <div className={styles.errorAlert}>
              <AlertCircle size={20} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={styles.input}
              required
              disabled={status === 'submitting'}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.label}>Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit number"
                className={styles.input}
                required
                disabled={status === 'submitting'}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={styles.input}
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="service" className={styles.label}>Interested In</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.select}
              disabled={status === 'submitting'}
            >
              <option value="">Select a service / therapy</option>
              {SERVICES.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your child's needs"
              className={styles.textarea}
              rows={4}
              required
              disabled={status === 'submitting'}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <span className={styles.spinner}></span>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
