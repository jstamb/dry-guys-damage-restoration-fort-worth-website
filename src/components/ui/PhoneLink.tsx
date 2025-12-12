import * as React from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhoneLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  phoneNumber: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

const PhoneLink = React.forwardRef<HTMLAnchorElement, PhoneLinkProps>((
  { phoneNumber, children, showIcon = true, className, ...props },
  ref
) => {
  const formattedNumber = phoneNumber.replace(/\D/g, '');

  return (
    <a
      ref={ref}
      href={`tel:${formattedNumber}`}
      className={cn(
        'inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm',
        className
      )}
      {...props}
    >
      {showIcon && <Phone className="h-4 w-4" />}
      {children || phoneNumber}
    </a>
  );
});

PhoneLink.displayName = 'PhoneLink';

export { PhoneLink };
