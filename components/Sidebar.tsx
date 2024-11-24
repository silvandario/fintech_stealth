'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import PlaidLink from './PlaidLink';

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-3">
        {/* Logo */}
        <Link href="/" className="mb-8 cursor-pointer flex items-center gap-2">
          <Image 
            src="/icons/logo.svg"
            width={28} // Adjusted size
            height={28}
            alt="Lumi logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Lumi</h1>
        </Link>

        {/* Links */}
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-5"> {/* Reduced size */}
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

        {/* PlaidLink */}
        <PlaidLink user={user} />
      </nav>

      {/* Footer */}
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;