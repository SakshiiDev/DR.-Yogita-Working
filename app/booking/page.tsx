import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { BookingProvider } from "@/contexts/booking-context"
import BookingPageContent from "@/components/booking/booking-page-content"
import FooterSection from "@/components/footer-section"

export const metadata = {
  title: "Book an Appointment | Dr. Yogita Physiotherapy",
  description:
    "Schedule your physiotherapy appointment with Dr. Yogita. Choose from available dates and times for your treatment.",
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingComponent />
    </Suspense>
  );
}

function BookingComponent() {
  const searchParams = useSearchParams();
  // Aapka existing logic yahan likhein
  return (
    <BookingProvider>
      <main className="min-h-screen bg-rose-50/30 pt-20">
        <BookingPageContent />
        <FooterSection />
      </main>
    </BookingProvider>
  );
}
