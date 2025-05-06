'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars2Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from "../images/logo4.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
  { name: 'Home', label: "Главная", to: '/'},
  { name: 'Products', label: "Товары", to: '/products'},
  { name: 'Delivery', label: "Контакты и Доставка", to: '/delivery'} 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-white relative z-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars2Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center  sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                alt="JusiKids"
                src={Logo}
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden sm:ml-10 sm:block lg:ml-32">
              <div className="flex space-x-10 md:space-x-14 lg:space-x-16">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.to}
                    passHref
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.to === pathname ? 'border-b-4 border-b-gray-800' : 'transition-opacity duration-300 hover:opacity-65',
                      ' py-5 text-sm font-medium text-gray-900 uppercase tracking-wider relative group',
                    )}
                  >
                    {item.label}
                    <span className={item.to === pathname ? 'hidden' : 'absolute left-0 bottom-0 w-full h-1 bg-gray-900 transform translate-y-4 opacity-0 transition-all duration-300 transition-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover:translate-y-0 group-hover:opacity-80 will-change-transform'}></span>
                  </Link>
                ))}
              </div>
            </div>
            </div>
          </div>
      </div>

      <DisclosurePanel className="sm:hidden absolute w-full bg-white border-b">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.to}
              passHref
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.to === pathname ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.label}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
