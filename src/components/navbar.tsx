'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  SignalIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Link } from './link'

const useCases = [
  { name: 'Drive Awareness', href: '/drive-awareness', icon: SignalIcon },
  {
    name: 'Capture Leads',
    href: '/capture-leads',
    icon: ClipboardDocumentCheckIcon,
  },
  { name: 'Build Trust', href: '/build-trust', icon: UserGroupIcon },
]

const whoWeHelp = [
  { name: 'For Marketers', href: '/for-marketers', icon: GlobeAltIcon },
  { name: 'For DevRels', href: '/for-dev-rels', icon: CodeBracketIcon },
]

const recentPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?auto=format&fit=crop&w=3603&q=80',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse.',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?auto=format&fit=crop&w=3270&q=80',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi.',
  },
]

const links = [
  { href: '/why-us', label: 'Why Us?' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/book-discovery-call', label: 'Book Discovery Call' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden text-primary lg:flex">
      {links.map(({ href, label }) => {
        if (label === 'Why Us?') {
          return (
            <div key={label} className="relative flex">
              <Popover className="relative">
                <PopoverButton className="flex items-center px-4 py-6 font-medium text-primary data-[hover]:bg-black/[2.5%]">
                  {label}
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500" />
                </PopoverButton>
                <PopoverPanel className="absolute left-1/2 z-50 mt-2 w-screen max-w-4xl -translate-x-1/2 rounded-xl bg-white shadow-lg ring-1 ring-black/5">
                  <div className="p-6 lg:p-5">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                      <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Use Cases
                          </h3>
                          <div className="mt-6 flow-root">
                            <div className="-my-2">
                              {useCases.map((item) => (
                                <PopoverButton
                                  as={Link}
                                  key={item.name}
                                  href={item.href}
                                  className="flex gap-x-4 py-2 text-sm font-semibold text-gray-700"
                                >
                                  <item.icon
                                    aria-hidden="true"
                                    className="h-6 w-6 flex-none text-gray-700"
                                  />
                                  {item.name}
                                </PopoverButton>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Who We Help
                          </h3>
                          <div className="mt-6 flow-root">
                            <div className="-my-2">
                              {whoWeHelp.map((item) => (
                                <PopoverButton
                                  as={Link}
                                  key={item.name}
                                  href={item.href}
                                  className="flex gap-x-4 py-2 text-sm font-semibold text-gray-700"
                                >
                                  <item.icon
                                    aria-hidden="true"
                                    className="h-6 w-6 flex-none text-gray-700"
                                  />
                                  {item.name}
                                </PopoverButton>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <h3 className="sr-only">Recent posts</h3>
                        {recentPosts.map((post) => (
                          <article
                            key={post.id}
                            className="relative flex flex-col gap-y-6"
                          >
                            <div className="relative flex-none">
                              <Image
                                alt=""
                                src={post.imageUrl}
                                className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover"
                                height={200}
                                width={300}
                              />
                              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div>
                              <div className="flex items-center gap-x-4 text-sm text-gray-600">
                                <time dateTime={post.datetime}>
                                  {post.date}
                                </time>
                                <PopoverButton
                                  as={Link}
                                  href={post.category.href}
                                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium hover:bg-gray-100"
                                >
                                  {post.category.title}
                                </PopoverButton>
                              </div>
                              <h4 className="mt-2 text-sm font-semibold text-gray-900">
                                <PopoverButton as={Link} href={post.href}>
                                  <span className="absolute inset-0" />
                                  {post.title}
                                </PopoverButton>
                              </h4>
                              <p className="mt-2 text-sm text-gray-600">
                                {post.description}
                              </p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            </div>
          )
        }
        return (
          <div key={href} className="relative flex">
            <Link
              href={href}
              className="flex items-center px-4 py-3 text-base font-medium text-gray-700 data-[hover]:bg-black/[2.5%]"
            >
              {label}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }) => (
          <div key={href} className="transition-opacity duration-200">
            <Link
              href={href}
              className="px-6 text-base font-medium text-gray-950"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header">
      <div className="relative m-auto flex max-w-7xl justify-around text-center">
        <div className="relative flex gap-6 py-3">
          <Link href="/" title="Home">
            <Image
              src="/draft/logos/draftlogo_main_filled.svg"
              alt="Logo"
              width={180}
              height={72}
            />
          </Link>
          {banner && (
            <div className="relative hidden items-center p-3 lg:flex">
              {banner}
            </div>
          )}
        </div>
        <DesktopNav />
        <MobileNavButton />
      </div>
      <MobileNav />
    </Disclosure>
  )
}
