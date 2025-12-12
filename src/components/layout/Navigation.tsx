'use client';

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/data/services';
import { neighborhoods } from '@/data/neighborhoods';

const Navigation: React.FC = () => {
  return (
    <NavigationMenu.Root className="relative z-10 flex items-center justify-center">
      <NavigationMenu.List className="center shadow-black/20 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-gray-700 outline-none hover:bg-gray-100 focus:shadow-[0_0_0_2px] focus:shadow-primary-500">
            Services{' '}
            <ChevronDown
              className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.name}>
                   <NavigationMenu.Link asChild>
                    <Link href={`/services/${service.slug}`} className="focus:shadow-primary-500 hover:bg-gray-100 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]">
                      <div className="mb-[5px] font-medium leading-[1.2] text-gray-900">{service.name}</div>
                      <p className="text-mauve4 text-[14px] leading-[1.3] text-gray-600">{service.description}</p>
                    </Link>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-gray-700 outline-none hover:bg-gray-100 focus:shadow-[0_0_0_2px] focus:shadow-primary-500">
            Locations{' '}
            <ChevronDown
              className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-4">
              {neighborhoods.map((location) => (
                 <li key={location.name}>
                   <NavigationMenu.Link asChild>
                    <Link href={`/locations/${location.slug}`} className="focus:shadow-primary-500 hover:bg-gray-100 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]">
                      <div className="font-medium leading-[1.2] text-gray-900">{location.name}</div>
                    </Link>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/about" className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-gray-700 no-underline outline-none hover:bg-gray-100 focus:shadow-[0_0_0_2px] focus:shadow-primary-500">
              About Us
            </Link>
           </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default Navigation;
