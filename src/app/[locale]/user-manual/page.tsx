'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageSelector } from '@/components/LanguageSelector';
import Footer from '@/components/Footer';
import { ArrowLeft, Book, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function UserManualPage() {
  const t = useTranslations();
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>(['employee-guide']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => router.push('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('common.back')}
            </Button>
            <h1 className="text-xl font-semibold flex items-center">
              <Book className="w-5 h-5 mr-2" />
              {t('userManual.title')}
            </h1>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">{t('userManual.title')}</CardTitle>
            <CardDescription>{t('userManual.subtitle')}</CardDescription>
          </CardHeader>
        </Card>

        {/* Employee Guide Section */}
        <Card className="mb-6">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection('employee-guide')}
          >
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{t('userManual.employeeGuide')}</CardTitle>
              {expandedSections.includes('employee-guide') ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </CardHeader>
          {expandedSections.includes('employee-guide') && (
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">1. {t('userManual.homePage')}</h3>
                <p className="text-gray-600 mb-3">{t('userManual.homePageDesc')}</p>
                <div className="my-4 rounded-lg overflow-hidden border">
                  <Image 
                    src="/images/01-home-page.png" 
                    alt="Home page" 
                    width={800}
                    height={400}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. {t('userManual.bookingKitchen')}</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
                  <p className="text-blue-800 font-medium mb-2">{t('userManual.bookingRestrictions')}</p>
                  <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                    <li><strong>{t('userManual.restriction1')}</strong></li>
                    <li><strong>{t('userManual.restriction2')}</strong></li>
                    <li>{t('userManual.restriction3')}</li>
                  </ul>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>{t('userManual.bookingStep1')}</li>
                  <li>{t('userManual.bookingStep2')}</li>
                  <li>{t('userManual.bookingStep3')}</li>
                  <li>{t('userManual.bookingStep4')}</li>
                  <li>{t('userManual.bookingStep5')}</li>
                  <li>{t('userManual.bookingStep6')}</li>
                  <li>{t('userManual.bookingStep7')}</li>
                  <li>{t('userManual.bookingStep8')}</li>
                  <li>{t('userManual.bookingStep9')}</li>
                  <li>{t('userManual.bookingStep10')}</li>
                  <li>{t('userManual.bookingStep11')}</li>
                  <li>{t('userManual.bookingStep12')}</li>
                  <li>{t('userManual.bookingStep13')}</li>
                </ol>
                <div className="my-4 space-y-4">
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/02-booking-form-employee-search.png" 
                      alt="Booking form" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/03-calendar-availability.png" 
                      alt="Calendar availability" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/04-time-slot-selection.png" 
                      alt="Time slot selection" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/05-signature-pad.png" 
                      alt="Signature pad" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/06-booking-success.png" 
                      alt="Booking success" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. {t('userManual.managingBookings')}</h3>
                <p className="text-gray-600 mb-3">{t('userManual.managingBookingsDesc')}</p>
                <div className="my-4 space-y-4">
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/07-manage-booking-page.png" 
                      alt="Manage booking page" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/08-booking-details.png" 
                      alt="Booking details" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">4. {t('userManual.changeRequests')}</h3>
                <p className="text-gray-600 mb-3">{t('userManual.changeRequestsDesc')}</p>
                <div className="my-4 rounded-lg overflow-hidden border">
                  <Image 
                    src="/images/09-change-request-form.png" 
                    alt="Change request form" 
                    width={800}
                    height={400}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">5. {t('userManual.cleanupChecklist')}</h3>
                <p className="text-gray-600 mb-3">{t('userManual.cleanupChecklistDesc')}</p>
                <div className="my-4 space-y-4">
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/11-cleanup-checklist.png" 
                      alt="Cleanup checklist" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <Image 
                      src="/images/12-kitchen-image-upload.png" 
                      alt="Kitchen image upload" 
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Quick Reference Section */}
        <Card className="mb-6">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection('quick-reference')}
          >
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{t('userManual.quickReference')}</CardTitle>
              {expandedSections.includes('quick-reference') ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </CardHeader>
          {expandedSections.includes('quick-reference') && (
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">{t('userManual.employeeWorkflow')}</h3>
                <p className="text-gray-600">{t('userManual.employeeWorkflowDesc')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('userManual.bookingStatusMeanings')}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>{t('status.booked')}:</strong> {t('userManual.bookedDesc')}</li>
                  <li><strong>{t('status.completed')}:</strong> {t('userManual.completedDesc')}</li>
                  <li><strong>{t('status.cancelled')}:</strong> {t('userManual.cancelledDesc')}</li>
                  <li><strong>{t('status.noShow')}:</strong> {t('userManual.noShowDesc')}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('userManual.approvalStatusMeanings')}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>{t('status.approved')}:</strong> {t('userManual.approvedDesc')}</li>
                  <li><strong>{t('status.pending')}:</strong> {t('userManual.pendingDesc')}</li>
                  <li><strong>{t('status.rejected')}:</strong> {t('userManual.rejectedDesc')}</li>
                  <li><strong>{t('status.changeRequested')}:</strong> {t('userManual.changeRequestedDesc')}</li>
                </ul>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Best Practices Section */}
        <Card className="mb-6">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection('best-practices')}
          >
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{t('userManual.bestPractices')}</CardTitle>
              {expandedSections.includes('best-practices') ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </CardHeader>
          {expandedSections.includes('best-practices') && (
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li><strong>{t('userManual.bookEarly')}:</strong> {t('userManual.bookEarlyDesc')}</li>
                <li><strong>{t('userManual.saveBookingNumber')}:</strong> {t('userManual.saveBookingNumberDesc')}</li>
                <li><strong>{t('userManual.completeCleanup')}:</strong> {t('userManual.completeCleanupDesc')}</li>
                <li><strong>{t('userManual.requestChangesEarly')}:</strong> {t('userManual.requestChangesEarlyDesc')}</li>
                <li><strong>{t('userManual.checkAvailability')}:</strong> {t('userManual.checkAvailabilityDesc')}</li>
                <li><strong>{t('userManual.contactAdmin')}:</strong> {t('userManual.contactAdminDesc')}</li>
              </ol>
            </CardContent>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
}
