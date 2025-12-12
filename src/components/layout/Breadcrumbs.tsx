import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type BreadcrumbItem = {
  name: string;
  href: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const breadcrumbItems = [{ name: 'Home', href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto my-4 px-4 sm:px-6 lg:px-8">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap"
      >
        {breadcrumbItems.map((item, index) => (
          <li
            key={item.href}
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className={`flex items-center ${
                // Hide intermediate crumbs on small screens for brevity
                index > 0 && index < breadcrumbItems.length - 1 ? 'hidden sm:flex' : ''
            }`}
          >
            {index > 0 && (
              <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-400 mx-2" />
            )}
            <Link
              href={item.href}
              itemProp="item"
              className={`${index === breadcrumbItems.length - 1 ? 'text-gray-700 font-medium' : 'hover:text-primary-600'}`}
            >
              <span itemProp="name">{item.name}</span>
            </Link>
            <meta itemProp="position" content={(index + 1).toString()} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
