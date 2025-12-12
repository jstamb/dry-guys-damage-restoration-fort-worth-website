'use client';

import React from 'react';
import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Phone, X } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { services } from '@/data/services';
import { neighborhoods } from '@/data/neighborhoods';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} aria-hidden="true"></div>
      <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white shadow-xl">
        <div className="flex items-center justify-between px-4 pt-5 pb-2">
          <Link href="/" onClick={handleLinkClick} className="text-xl font-bold text-primary-600">
            Dry Guys Fort Worth
          </Link>
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Links */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-200">
            <div className="space-y-2 py-6 px-4">
              <Accordion.Root type="single" collapsible className="w-full">
                <Accordion.Item value="services">
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-2 text-base font-medium text-gray-900 hover:text-gray-700">
                    Services
                    <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="pt-2 pb-4 pl-4">
                      {services.map((service) => (
                        <Link key={service.name} href={`/services/${service.slug}`} onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-primary-600">
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="locations">
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-2 text-base font-medium text-gray-900 hover:text-gray-700">
                    Locations
                    <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="pt-2 pb-4 pl-4">
                      {neighborhoods.map((location) => (
                        <Link key={location.name} href={`/locations/${location.slug}`} onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-primary-600">
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
              <Link href="/about" onClick={handleLinkClick} className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-6 border-t border-gray-200 py-6 px-4">
           <a
              href={`tel:${siteConfig.phone}`}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: {siteConfig.phone}
            </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
