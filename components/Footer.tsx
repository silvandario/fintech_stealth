import { logoutAccount } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = ({ user, type }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) router.push('/sign-in');
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text?.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <footer
      className={`footer flex items-center justify-between ${
        type === 'mobile' ? 'px-4 py-2' : 'px-6 py-4'
      }`}
    >
      {/* User Initial */}
      <div
        className={`footer_user flex items-center justify-center rounded-full bg-gray-200 ${
          type === 'mobile' ? 'w-8 h-8' : 'w-10 h-10'
        }`}
      >
        <p
          className={`text-gray-700 font-bold ${
            type === 'mobile' ? 'text-sm' : 'text-lg'
          }`}
        >
          {user?.firstName?.[0]}
        </p>
      </div>

      {/* User Info */}
      <div
        className={`flex flex-col ${
          type === 'mobile' ? 'ml-2 w-full' : 'ml-4'
        }`}
      >
        <h1
          className={`truncate font-semibold text-gray-700 ${
            type === 'mobile' ? 'text-sm' : 'text-base'
          }`}
        >
          {truncateText(user?.firstName || '', 8)}
        </h1>
        <p
          className={`truncate text-gray-600 ${
            type === 'mobile' ? 'text-xs' : 'text-sm'
          }`}
        >
          {truncateText(user?.email || '', 10)}
        </p>
      </div>

      {/* Logout Icon */}
      <div
        className={`footer_image cursor-pointer ${
          type === 'mobile' ? 'w-6 h-6' : 'w-8 h-8'
        } ml-auto`}
        onClick={handleLogOut}
      >
        <Image
          src="/icons/logout.svg"
          alt="Logout"
          width={24} // Ensure appropriate dimensions
          height={24}
        />
      </div>
    </footer>
  );
};

export default Footer;