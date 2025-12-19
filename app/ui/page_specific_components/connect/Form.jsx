import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="bg-[var(--matte-black)] py-25">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden px-6 py-10 sm:px-10 xl:p-12">
              {/* Background accents */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-br from-[var(--electric-violet)]/25 via-[var(--matte-black)]/0 to-[var(--neon-coral)]/20"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(120%_90%_at_0%_0%,black,transparent)]"
              >
                <svg className="absolute inset-0 h-full w-full" fill="none">
                  <defs>
                    <pattern
                      id="contact-grid"
                      width="48"
                      height="48"
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M48 0H0V48" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#contact-grid)" />
                </svg>
              </div>

              <h3 className="relative text-lg font-medium text-[var(--steel-white)]">
                Contact information
              </h3>
              <p className="relative mt-6 max-w-3xl text-base text-[var(--soft-lilac)]/90">
                For bookings, guest inquiries, partnerships, or general questions—send a note and we’ll follow up.
              </p>

              <dl className="relative mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-[var(--steel-white)]/90">
                  <PhoneIcon aria-hidden="true" className="size-6 shrink-0 text-[var(--soft-lilac)]/80" />
                  <a
                    href="tel:+1-555-123-4567"
                    className="ml-3 underline underline-offset-4 decoration-white/15 hover:text-[var(--neon-coral)] hover:decoration-[var(--neon-coral)]"
                  >
                    +1 (555) 123-4567
                  </a>
                </dd>

                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-[var(--steel-white)]/90">
                  <EnvelopeIcon aria-hidden="true" className="size-6 shrink-0 text-[var(--soft-lilac)]/80" />
                  <a
                    href="mailto:support@workcation.com"
                    className="ml-3 underline underline-offset-4 decoration-white/15 hover:text-[var(--neon-coral)] hover:decoration-[var(--neon-coral)]"
                  >
                    support@workcation.com
                  </a>
                </dd>
              </dl>

              <ul role="list" className="relative mt-8 flex space-x-10">
                <li>
                  <a href="#" className="text-[var(--soft-lilac)]/80 hover:text-[var(--steel-white)]">
                    <span className="sr-only">Facebook</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-6">
                      <path
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[var(--soft-lilac)]/80 hover:text-[var(--steel-white)]">
                    <span className="sr-only">GitHub</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-6">
                      <path
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[var(--soft-lilac)]/80 hover:text-[var(--steel-white)]">
                    <span className="sr-only">X</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-6">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-[var(--steel-white)]">Send a message</h3>
              <p className="mt-2 text-sm text-[var(--soft-lilac)]/85">
                Share a quick note and we’ll respond as soon as possible.
              </p>

              <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-[var(--steel-white)]">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[var(--steel-white)] shadow-xs placeholder:text-[var(--soft-lilac)]/60 focus:border-[var(--neon-coral)] focus:ring-[var(--neon-coral)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-[var(--steel-white)]">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[var(--steel-white)] shadow-xs placeholder:text-[var(--soft-lilac)]/60 focus:border-[var(--neon-coral)] focus:ring-[var(--neon-coral)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--steel-white)]">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[var(--steel-white)] shadow-xs placeholder:text-[var(--soft-lilac)]/60 focus:border-[var(--neon-coral)] focus:ring-[var(--neon-coral)]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--steel-white)]">
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-[var(--soft-lilac)]/70">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      autoComplete="tel"
                      aria-describedby="phone-optional"
                      className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[var(--steel-white)] shadow-xs placeholder:text-[var(--soft-lilac)]/60 focus:border-[var(--neon-coral)] focus:ring-[var(--neon-coral)]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--steel-white)]">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[var(--steel-white)] shadow-xs placeholder:text-[var(--soft-lilac)]/60 focus:border-[var(--neon-coral)] focus:ring-[var(--neon-coral)]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--steel-white)]">
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-[var(--soft-lilac)]/70">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-max"
                      className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[var(--steel-white)] shadow-xs placeholder:text-[var(--soft-lilac)]/60 focus:border-[var(--neon-coral)] focus:ring-[var(--neon-coral)]"
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-[var(--neon-coral)] px-6 py-3 text-base font-medium text-[var(--matte-black)] shadow-xs hover:opacity-90 focus:ring-2 focus:ring-[var(--neon-coral)] focus:ring-offset-2 focus:ring-offset-[var(--matte-black)] focus:outline-hidden sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>

              <p className="mt-4 text-xs text-[var(--soft-lilac)]/70">
                Prefer email? You can also reach us directly and we’ll respond ASAP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
