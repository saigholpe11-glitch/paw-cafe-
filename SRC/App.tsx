import { useState } from 'react';
import { initialCafeConfig, CafeConfig, ResidentPet } from './data/cafeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Experience } from './components/Experience';
import { MeetThePets } from './components/MeetThePets';
import { FoodAndDrinks } from './components/FoodAndDrinks';
import { VisitingGuide } from './components/VisitingGuide';
import { ReviewsCollage } from './components/ReviewsCollage';
import { GalleryInstagram } from './components/GalleryInstagram';
import { FaqSection } from './components/FaqSection';
import { EventsBanner } from './components/EventsBanner';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { BookingModal } from './components/BookingModal';
import { PetModal } from './components/PetModal';
import { MenuPdfModal } from './components/MenuPdfModal';
import { BusinessFactsEditor } from './components/BusinessFactsEditor';

export default function App() {
  const [config, setConfig] = useState<CafeConfig>(initialCafeConfig);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<ResidentPet | null>(null);

  const handleUpdateConfig = (newConfig: CafeConfig) => {
    setConfig(newConfig);
  };

  const handleResetConfig = () => {
    setConfig(initialCafeConfig);
  };

  const handleBookWithPet = (_petName: string) => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-800 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* 1. Sticky Top Navigation */}
      <Navbar
        config={config}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          config={config}
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenMenu={() => setIsMenuModalOpen(true)}
        />

        {/* 3. Our Story */}
        <OurStory config={config} />

        {/* 4. The Experience */}
        <Experience />

        {/* 5. Meet the Pets (Horizontally scrolling gallery of 8 resident animals) */}
        <MeetThePets onSelectPet={setSelectedPet} />

        {/* 6. Food & Drinks (Tabbed menu highlights & view full menu CTA) */}
        <FoodAndDrinks
          config={config}
          onOpenMenuModal={() => setIsMenuModalOpen(true)}
        />

        {/* 7. Visiting Guide (How it works, house rules, pet policy & pricing) */}
        <VisitingGuide
          config={config}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 8. Reviews (Collage-style wall with taped/pinned cards) */}
        <ReviewsCollage />

        {/* 9. Gallery & Instagram (Masonry grid & follow CTA) */}
        <GalleryInstagram config={config} />

        {/* 10. FAQ (Accordion with 7 cafe-specific questions) */}
        <FaqSection config={config} />

        {/* 11. Events and Celebrations (Birthdays, barkdays & meetups) */}
        <EventsBanner
          config={config}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 12. Visit Us (Address, hours, map, metro, parking, call/whatsapp, enquiry form) */}
        <VisitUs config={config} />
      </main>

      {/* 13. Footer */}
      <Footer config={config} />

      {/* Mobile Floating Bottom Call / WhatsApp Action Bar */}
      <MobileFloatingBar
        config={config}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Modals & Slide-over Drawers */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        config={config}
      />

      <PetModal
        pet={selectedPet}
        onClose={() => setSelectedPet(null)}
        onBookWithPet={handleBookWithPet}
      />

      <MenuPdfModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        config={config}
      />

      {/* Business Facts live editor / placeholder switcher */}
      <BusinessFactsEditor
        config={config}
        onUpdateConfig={handleUpdateConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
