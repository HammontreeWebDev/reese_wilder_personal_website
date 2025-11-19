'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
  {
    name: 'About',
    href: '/about/meet-reese',
    children: [
      { name: 'Meet Reese', href: '/about/meet-reese' },
      { name: 'FAQ', href: '/about/faq' },
    ],
  },
  {
    name: 'Socials',
    href: '/socials/instagram',
    children: [
      { name: 'Instagram', href: '/socials/instagram' },
      { name: 'YouTube', href: '/socials/youtube' },
      { name: 'TikTok', href: '/socials/tiktok' },
    ],
  },
]

const navigation2 = [
  { name: 'Connect', href: '/connect' },
  { name: 'Podcast', href: '/podcast' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300
        ${
          scrolled
            ? 'bg-[var(--steel-white)] text-[var(--matte-black)] shadow-md'
            : 'bg-transparent text-[var(--steel-white)]'
        }
        hover:bg-[var(--steel-white)] hover:text-[var(--matte-black)]
      `}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* LEFT SIDE NAV (desktop) */}
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {navigation.map((item) =>
              item.children ? (
                // DROPDOWN
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm/6 font-semibold"
                  >
                    {item.name}
                    <ChevronDownIcon
                      className="h-4 w-4 transition-transform duration-150 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  </a>
                  {/* Dropdown panel */}
                  <div
                    className="
                      invisible opacity-0 translate-y-1
                      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                      absolute left-0 mt-3 min-w-[180px] rounded-lg bg-[var(--steel-white)]
                      text-[var(--matte-black)] shadow-lg ring-1 ring-black/5
                      transition-all duration-150
                    "
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium hover:bg-black/5"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>

        {/* LOGO / NAME */}
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Reese Wilder</span>
          <p className="trade-winds-regular text-2xl">Reese Wilder</p>
        </a>

        {/* RIGHT SIDE NAV (desktop) */}
        <div className="hidden lg:flex lg:gap-x-12 flex flex-1 justify-end">
          {navigation2.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-steel-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Reese Wilder</span>
              <p>Reese Wilder</p>
            </a>
            <div className="flex flex-1 justify-end">
              {navigation2.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE NAV LINKS */}
          <div className="mt-6 space-y-4">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <p className="text-sm/6 font-semibold uppercase text-gray-500">
                    {item.name}
                  </p>
                  <div className="mt-1 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
