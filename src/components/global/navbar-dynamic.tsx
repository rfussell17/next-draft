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
import React, { useEffect, useState } from 'react'
import { Link } from './link'

const NAVIGATION_CONFIG = {
  useCases: [
    { name: 'Drive Awareness', href: '/drive-awareness', icon: SignalIcon },
    {
      name: 'Capture Leads',
      href: '/capture-leads',
      icon: ClipboardDocumentCheckIcon,
    },
    { name: 'Build Trust', href: '/build-trust', icon: UserGroupIcon },
  ],
  whoWeHelp: [
    { name: 'For Marketers', href: '/for-marketers', icon: GlobeAltIcon },
    { name: 'For DevRels', href: '/for-dev-rels', icon: CodeBracketIcon },
  ],
  recentPosts: [
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
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi.',
    },
  ],
  links: [
    { href: '/why-us', label: 'Why Us?' },
    { href: './#lead-generation-package', label: 'Lead Generation' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/playbook', label: 'Playbook' },
    { href: '/about', label: 'Company' },
    { href: '/call', label: 'Book Discovery Call' },
  ],
}

const STYLES = {
  transition: 'transition-colors duration-300 ease-in-out',
  linkBase: 'text-lg font-medium',
  mobileLink: 'px-6 py-2 text-base font-medium text-gray-900 hover:bg-gray-50',
  popoverButton:
    'flex gap-x-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900',
  menuIcon: 'h-6 w-6 flex-none text-gray-700',
}

const getNavStyles = (hasScrolled: boolean) => ({
  text: `text-gray-800 ${hasScrolled ? 'tablet:text-gray-800' : 'tablet:text-white'}`,
  background: `bg-white ${hasScrolled ? 'tablet:bg-white/95 tablet:backdrop-blur-sm tablet:shadow-md' : 'tablet:bg-transparent'}`,
  hoverBg: `hover:bg-gray-100/80 ${hasScrolled ? 'tablet:hover:bg-gray-100/80' : 'tablet:hover:bg-white/10'}`,
  logo: hasScrolled
    ? '/draft/logos/draftlogo_main_filled.svg'
    : '/draft/logos/draftlogo_base_white.svg',
})

interface NavbarProps {
  banner?: React.ReactNode
}

export function DynamicNavbar({ banner }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const styles = getNavStyles(hasScrolled)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const WhyUsPopover = () => (
    <Popover className="relative">
      <PopoverButton
        className={`flex items-center px-4 py-6 ${STYLES.linkBase} ${styles.hoverBg} ${STYLES.transition}`}
      >
        Why Us?
        <ChevronDownIcon
          className={`ml-2 h-4 w-4 ${styles.text} ${STYLES.transition}`}
        />
      </PopoverButton>
      <PopoverPanel className="absolute left-1/2 z-50 mt-2 w-screen max-w-4xl -translate-x-1/2 rounded-xl bg-white shadow-lg ring-1 ring-black/5">
        <div className="p-6 lg:p-5">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
              <NavSection
                title="Use Cases"
                items={NAVIGATION_CONFIG.useCases}
              />
              <NavSection
                title="Who We Help"
                items={NAVIGATION_CONFIG.whoWeHelp}
              />
            </div>
            <RecentPosts posts={NAVIGATION_CONFIG.recentPosts} />
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )

  const NavSection = ({ title, items }: { title: string; items: any[] }) => (
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-6 flow-root">
        <div className="-my-2">
          {items.map((item) => (
            <PopoverButton
              as={Link}
              key={item.name}
              href={item.href}
              className={STYLES.popoverButton}
            >
              <item.icon aria-hidden="true" className={STYLES.menuIcon} />
              {item.name}
            </PopoverButton>
          ))}
        </div>
      </div>
    </div>
  )

  const RecentPosts = ({
    posts,
  }: {
    posts: typeof NAVIGATION_CONFIG.recentPosts
  }) => (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <h3 className="sr-only">Recent posts</h3>
      {posts.map((post) => (
        <article key={post.id} className="relative flex flex-col gap-y-6">
          <div className="relative flex-none">
            <Image
              alt="image post"
              src={post.imageUrl}
              className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover"
              height={200}
              width={300}
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div>
            <div className="flex items-center gap-x-4 text-sm text-gray-600">
              <time dateTime={post.datetime}>{post.date}</time>
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
            <p className="mt-2 text-sm text-gray-600">{post.description}</p>
          </div>
        </article>
      ))}
    </div>
  )

  const DesktopNav = () => (
    <nav className={`hidden items-center tablet:flex ${styles.text}`}>
      {NAVIGATION_CONFIG.links.map(({ href, label }) =>
        label === 'Why Us?' ? (
          <WhyUsPopover key={label} />
        ) : (
          <Link
            key={href}
            href={href}
            className={`px-4 py-3 ${STYLES.linkBase} ${styles.text} ${styles.hoverBg} ${STYLES.transition}`}
          >
            {label}
          </Link>
        ),
      )}
    </nav>
  )

  const MobileNav = () => (
    <DisclosurePanel className="bg-white tablet:hidden">
      <div className="flex flex-col py-2">
        {NAVIGATION_CONFIG.links.map(({ href, label }) => (
          <Link key={href} href={href} className={STYLES.mobileLink}>
            {label}
          </Link>
        ))}
      </div>
    </DisclosurePanel>
  )

  return (
    <Disclosure
      as="header"
      className={`fixed left-0 right-0 top-0 z-50 ${styles.background} ${STYLES.transition}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link href="/" title="Home" className="block tablet:hidden">
              <Image
                src="/draft/logos/draftlogo_main_filled.svg"
                alt="Logo"
                width={180}
                height={72}
                priority
              />
            </Link>
            <Link href="/" title="Home" className="hidden tablet:block">
              <Image
                src={styles.logo}
                alt="Logo"
                width={180}
                height={72}
                priority
                className={STYLES.transition}
              />
            </Link>
            {banner && (
              <div className="hidden items-center tablet:flex">{banner}</div>
            )}
          </div>

          <DesktopNav />

          <DisclosureButton
            className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100/80 lg:hidden"
            aria-label="Open main menu"
          >
            <Bars2Icon className="h-6 w-6" />
          </DisclosureButton>
        </div>

        <MobileNav />
      </div>
    </Disclosure>
  )
}

export default DynamicNavbar
