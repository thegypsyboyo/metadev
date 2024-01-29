'use client';

import Image from 'next/image';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';
import Link from 'next/link';
// import { Button } from '@/components/ui/button';
import { sidebarLinks } from '@/constants/constants';
import { usePathname } from 'next/dist/client/components/navigation';

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="my-10 flex h-full flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      {/* Hamburger Menu */}
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 text-dark300_light900 border-none"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            Meta<span className="ml-1.5 text-primary-500">Devs</span>
          </p>
        </Link>

        <div>
          <SheetClose asChild>
            {/* Nav Content */}
            <NavContent />
          </SheetClose>

          {/* Not logged User */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
