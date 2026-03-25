import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import SagaSection from '../components/landing/SagaSection';
import BookSection from '../components/landing/BookSection';
import GallerySection from '../components/landing/GallerySection';
import ReviewsSection from '../components/landing/ReviewsSection';
import AuthorSection from '../components/landing/AuthorSection';
import PurchaseSection from '../components/landing/PurchaseSection';
import NewsletterSection from '../components/landing/NewsletterSection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SagaSection />
      <BookSection />
      <GallerySection />
      <ReviewsSection />
      <AuthorSection />
      <PurchaseSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
