'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageSelector } from '@/components/LanguageSelector';
import Footer from '@/components/Footer';
import { ArrowLeft, Book, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

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
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. {t('userManual.managingBookings')}</h3>
                <p className="text-gray-600">{t('userManual.managingBookingsDesc')}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">4. {t('userManual.changeRequests')}</h3>
                <p className="text-gray-600">{t('userManual.changeRequestsDesc')}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">5. {t('userManual.cleanupChecklist')}</h3>
                <p className="text-gray-600">{t('userManual.cleanupChecklistDesc')}</p>
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
              <CardTitle className="text-xl">Quick Reference</CardTitle>
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
                <h3 className="font-semibold mb-2">Employee Workflow</h3>
                <p className="text-gray-600">Open App → Click Book Now → Fill Details → Sign → Get Credentials → Use Kitchen → Complete Cleanup → Book Again</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Booking Status Meanings</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Booked:</strong> Booking is confirmed and approved</li>
                  <li><strong>Completed:</strong> Booking has been used and cleanup verified</li>
                  <li><strong>Cancelled:</strong> Booking was cancelled</li>
                  <li><strong>No Show:</strong> Employee did not show up for the booking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Approval Status Meanings</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Approved:</strong> Booking is approved</li>
                  <li><strong>Pending:</strong> Waiting for admin approval</li>
                  <li><strong>Rejected:</strong> Booking was rejected</li>
                  <li><strong>Change Requested:</strong> Employee requested to change date/time</li>
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
              <CardTitle className="text-xl">Best Practices</CardTitle>
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
                <li><strong>Book Early:</strong> Book your slot in advance to ensure availability</li>
                <li><strong>Save Credentials:</strong> Save your booking number and password securely</li>
                <li><strong>Complete Cleanup:</strong> Always complete the cleanup checklist to avoid blocking future bookings</li>
                <li><strong>Request Changes Early:</strong> If you need to change your booking, request changes as early as possible</li>
                <li><strong>Check Availability:</strong> Use the calendar to check slot availability before booking</li>
                <li><strong>Contact Admin:</strong> If you need help, contact admin instead of making multiple bookings</li>
              </ol>
            </CardContent>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
}
