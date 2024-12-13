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
  { name: 'Drive Awareness', href: '#', icon: SignalIcon },
  { name: 'Capture Leads', href: '#', icon: ClipboardDocumentCheckIcon },
  { name: 'Build Trust', href: '#', icon: UserGroupIcon },
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
  { href: '/for-dev-rels-two', label: 'Services' },
  { href: '/why-us', label: 'Why Us?' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/book-call', label: 'Book a Call' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => {
        if (label === 'Why Us?') {
          return (
            <div key={label} className="relative flex">
              <Popover className="relative">
                <PopoverButton className="text-gray-950 data-[hover]:bg-black/[2.5%] flex items-center px-4 py-6">
                  {label}
                  <ChevronDownIcon className="text-gray-500 ml-2 h-4 w-4" />
                </PopoverButton>
                <PopoverPanel className="bg-white ring-black/5 absolute left-1/2 z-50 mt-2 w-screen max-w-4xl -translate-x-1/2 rounded-xl shadow-lg ring-1">
                  <div className="p-6 lg:p-5">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                      <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                        <div>
                          <h3 className="text-gray-500 text-sm font-medium">
                            Use Cases
                          </h3>
                          <div className="mt-6 flow-root">
                            <div className="-my-2">
                              {useCases.map((item) => (
                                <PopoverButton
                                  as={Link}
                                  key={item.name}
                                  href={item.href}
                                  className="text-gray-900 flex gap-x-4 py-2 text-sm font-semibold"
                                >
                                  <item.icon
                                    aria-hidden="true"
                                    className="text-gray-400 h-6 w-6 flex-none"
                                  />
                                  {item.name}
                                </PopoverButton>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-gray-500 text-sm font-medium">
                            Who We Help
                          </h3>
                          <div className="mt-6 flow-root">
                            <div className="-my-2">
                              {whoWeHelp.map((item) => (
                                <PopoverButton
                                  as={Link}
                                  key={item.name}
                                  href={item.href}
                                  className="text-gray-900 flex gap-x-4 py-2 text-sm font-semibold"
                                >
                                  <item.icon
                                    aria-hidden="true"
                                    className="text-gray-400 h-6 w-6 flex-none"
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
                                className="bg-gray-100 aspect-[2/1] w-full rounded-lg object-cover"
                                height={200}
                                width={300}
                              />
                              <div className="ring-gray-900/10 absolute inset-0 rounded-lg ring-1 ring-inset" />
                            </div>
                            <div>
                              <div className="text-gray-600 flex items-center gap-x-4 text-sm">
                                <time dateTime={post.datetime}>
                                  {post.date}
                                </time>
                                <PopoverButton
                                  as={Link}
                                  href={post.category.href}
                                  className="bg-gray-50 hover:bg-gray-100 relative z-10 rounded-full px-3 py-1.5 text-xs font-medium"
                                >
                                  {post.category.title}
                                </PopoverButton>
                              </div>
                              <h4 className="text-gray-900 mt-2 text-sm font-semibold">
                                <PopoverButton as={Link} href={post.href}>
                                  <span className="absolute inset-0" />
                                  {post.title}
                                </PopoverButton>
                              </h4>
                              <p className="text-gray-600 mt-2 text-sm">
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
              className="text-gray-950 data-[hover]:bg-black/[2.5%] flex items-center px-4 py-3 text-base font-medium"
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
      className="data-[hover]:bg-black/5 flex size-12 items-center justify-center self-center rounded-lg lg:hidden"
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
              className="text-gray-950 px-6 text-base font-medium"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="border-black/5 absolute inset-x-0 top-0 border-t" />
        <div className="border-black/5 absolute inset-x-0 top-2 border-t" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header">
      <div className="relative flex justify-around">
        <div className="relative flex gap-6 py-3">
          <Link href="/" title="Home">
            <Image src="/draft-temp.png" alt="Logo" width={180} height={72} />
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
