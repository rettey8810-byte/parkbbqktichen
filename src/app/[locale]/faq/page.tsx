'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageSelector } from '@/components/LanguageSelector';
import Footer from '@/components/Footer';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const t = useTranslations();
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>(['general']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const faqs = {
    general: [
      {
        q: t('faq.q1'),
        a: t('faq.a1')
      },
      {
        q: t('faq.q2'),
        a: t('faq.a2')
      },
      {
        q: t('faq.q3'),
        a: t('faq.a3')
      },
      {
        q: t('faq.q4'),
        a: t('faq.a4')
      },
      {
        q: t('faq.q5'),
        a: t('faq.a5')
      }
    ],
    booking: [
      {
        q: t('faq.q6'),
        a: t('faq.a6')
      },
      {
        q: t('faq.q7'),
        a: t('faq.a7')
      }
    ],
    management: [
      {
        q: t('faq.q3'),
        a: t('faq.a3')
      },
      {
        q: t('faq.q4'),
        a: t('faq.a4')
      }
    ],
    cleanup: [
      {
        q: t('faq.q5'),
        a: t('faq.a5')
      }
    ]
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
              <HelpCircle className="w-5 h-5 mr-2" />
              {t('faq.title')}
            </h1>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">{t('faq.title')}</CardTitle>
            <CardDescription>{t('faq.subtitle')}</CardDescription>
          </CardHeader>
        </Card>

        {/* General Questions */}
        <Card className="mb-6">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection('general')}
          >
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{t('faq.generalQuestions')}</CardTitle>
              {expandedSections.includes('general') ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </CardHeader>
          {expandedSections.includes('general') && (
            <CardContent className="space-y-4">
              {faqs.general.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        {/* Booking Questions */}
        <Card className="mb-6">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection('booking')}
          >
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{t('faq.bookingQuestions')}</CardTitle>
              {expandedSections.includes('booking') ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </CardHeader>
          {expandedSections.includes('booking') && (
            <CardContent className="space-y-4">
              {faqs.booking.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        {/* Booking Management Questions */}
        <Card className="mb-6">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection('management')}
          >
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{t('faq.adminQuestions')}</CardTitle>
              {expandedSections.includes('management') ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </CardHeader>
          {expandedSections.includes('management') && (
            <CardContent className="space-y-4">
              {faqs.management.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        {/* Cleanup Questions */}
        <Card className="mb-6">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection('cleanup')}
          >
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{t('faq.bookingQuestions')}</CardTitle>
              {expandedSections.includes('cleanup') ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </CardHeader>
          {expandedSections.includes('cleanup') && (
            <CardContent className="space-y-4">
              {faqs.cleanup.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        {/* Contact Support */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl">Still Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">For technical issues or questions not covered here, please contact support:</p>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> support@villa-park.com.mv</p>
              <p className="text-gray-700"><strong>Phone:</strong> [Add support phone number]</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
