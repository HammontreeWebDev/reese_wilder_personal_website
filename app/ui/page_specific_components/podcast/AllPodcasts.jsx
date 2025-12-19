import { Fragment } from 'react'
import { CheckIcon, MinusIcon, PlusIcon } from '@heroicons/react/16/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

/**
 * Podcast Page (Deliverables)
 * • List of external podcast platforms (YouTube, Spotify, Apple Podcasts)
 * • Buttons linking to each platform
 * • Short description of the podcast
 * • Mobile/Tablet Responsive Layout
 *
 * Notes:
 * - Uses your existing dark aesthetic + CSS vars: --matte-black, --steel-white, --soft-lilac, --electric-violet, --neon-coral
 * - Reuses your existing “cards + comparison table + mobile tabs” layout pattern
 * - Replaces pricing copy with podcast destinations + rollout status
 */

const platforms = [
  {
    name: 'YouTube',
    description: 'Full episodes, highlights, and video-first extras.',
    href: 'https://www.youtube.com/@reese.wilder',
    status: 'Live / Coming Soon',
    highlights: [
      { description: 'Full episode video uploads' },
      { description: 'Short highlight clips' },
      { description: 'Episode premieres & playlists' },
      { description: 'Chapters & timestamps', disabled: true },
      { description: 'Live Q&A streams', disabled: true },
      { description: 'Community polls', disabled: true },
    ],
  },
  {
    name: 'Spotify',
    description: 'Audio episodes on-the-go with easy sharing.',
    href: '#',
    status: 'Rolling out soon',
    highlights: [
      { description: 'Audio episodes' },
      { description: 'Shareable links' },
      { description: 'Episode notifications', disabled: true },
      { description: 'Show notes & links', disabled: true },
      { description: 'Ratings & reviews', disabled: true },
      { description: 'Clips (if enabled)', disabled: true },
    ],
  },
  {
    name: 'Apple Podcasts',
    description: 'The classic place to subscribe and stay updated.',
    href: '#',
    status: 'Rolling out soon',
    highlights: [
      { description: 'Subscribe + automatic downloads' },
      { description: 'Ratings & reviews', disabled: true },
      { description: 'Episode notifications', disabled: true },
      { description: 'Show notes & links', disabled: true },
      { description: 'Top charts visibility', disabled: true },
      { description: 'Listen on all Apple devices', disabled: true },
    ],
  },
]

const sections = [
  {
    name: 'Availability',
    features: [
      { name: 'Where you can watch full episodes', tiers: { YouTube: true, Spotify: false, 'Apple Podcasts': false } },
      { name: 'Where you can listen to audio episodes', tiers: { YouTube: false, Spotify: true, 'Apple Podcasts': true } },
      { name: 'Highlights / short clips', tiers: { YouTube: true, Spotify: false, 'Apple Podcasts': false } },
      { name: 'Subscribe / follow alerts', tiers: { YouTube: true, Spotify: true, 'Apple Podcasts': true } },
    ],
  },
  {
    name: 'Episode Extras',
    features: [
      { name: 'Show notes & links', tiers: { YouTube: true, Spotify: false, 'Apple Podcasts': false } },
      { name: 'Chapters / timestamps', tiers: { YouTube: false, Spotify: false, 'Apple Podcasts': false } },
      { name: 'Ratings & reviews', tiers: { YouTube: false, Spotify: false, 'Apple Podcasts': false } },
      { name: 'Playlists / seasons organization', tiers: { YouTube: true, Spotify: false, 'Apple Podcasts': false } },
    ],
  },
  {
    name: 'Best For',
    features: [
      { name: 'Watching + listening', tiers: { YouTube: 'Best', Spotify: '—', 'Apple Podcasts': '—' } },
      { name: 'Audio on the move', tiers: { YouTube: 'Good', Spotify: 'Best', 'Apple Podcasts': 'Best' } },
      { name: 'Sharing clips', tiers: { YouTube: 'Best', Spotify: '—', 'Apple Podcasts': '—' } },
      { name: 'Leaving a review', tiers: { YouTube: '—', Spotify: '—', 'Apple Podcasts': 'Best' } },
    ],
  },
]

export default function AllPodcasts() {
  return (
    <div className="bg-[var(--matte-black)] py-24 sm:py-32 text-[var(--steel-white)]">
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--soft-lilac)]/80">
          Podcast Page
        </p>
        <h1 className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-pretty">
          Watch or listen—wherever you like.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-pretty text-[var(--soft-lilac)]/90 max-lg:mx-auto sm:text-xl/8">
          Reese’s podcast is rolling out across major platforms. Pick your favorite destination below to catch full episodes,
          highlights, and updates as new releases go live.
        </p>
      </div>

      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 top-48 bottom-0 bg-[radial-gradient(circle_at_center_center,rgba(124,58,237,0.35),rgba(255,92,141,0.22),transparent_70%)] lg:bg-[radial-gradient(circle_at_center_150%,rgba(124,58,237,0.35),rgba(255,92,141,0.22),transparent_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          {/* PLATFORM CARDS */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="-m-2 grid grid-cols-1 rounded-4xl bg-white/2.5 shadow-[inset_0_0_2px_1px_#ffffff32] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-4xl p-2 shadow-black/5">
                  <div className="rounded-3xl bg-white/5 p-10 pb-9 ring-1 ring-white/10 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-sm font-semibold text-[var(--neon-coral)]">
                          {p.name} <span className="sr-only">platform</span>
                        </h2>
                        <p className="mt-2 text-sm/6 text-pretty text-[var(--soft-lilac)]/90">{p.description}</p>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-[var(--soft-lilac)]/80">
                        {p.status}
                      </span>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-4xl font-semibold text-[var(--steel-white)]">
                        {p.name === 'YouTube' ? 'Video' : 'Audio'}
                      </div>
                      <div className="text-sm text-[var(--soft-lilac)]/80">
                        <p>primary format</p>
                        <p>for this platform</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <a
                        href={p.href}
                        target={p.href === '#' ? undefined : '_blank'}
                        rel={p.href === '#' ? undefined : 'noreferrer'}
                        aria-label={`Open ${p.name}`}
                        className="inline-block rounded-md bg-[var(--neon-coral)] px-3.5 py-2 text-center text-sm/6 font-semibold text-[var(--matte-black)] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--neon-coral)]"
                      >
                        {p.href === '#' ? 'Link coming soon' : `Open ${p.name}`}
                      </a>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-sm/6 font-medium text-[var(--steel-white)]">What you’ll get here:</h3>
                      <ul className="mt-3 space-y-3">
                        {p.highlights.map((h) => (
                          <li
                            key={h.description}
                            data-disabled={h.disabled}
                            className="group flex items-start gap-4 text-sm/6 text-[var(--soft-lilac)]/90 data-disabled:text-[var(--soft-lilac)]/50"
                          >
                            <span className="inline-flex h-6 items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-4 fill-[var(--soft-lilac)]/70 group-data-disabled:fill-[var(--soft-lilac)]/40"
                              />
                            </span>
                            {h.disabled ? <span className="sr-only">Not included:</span> : null}
                            {h.description}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--soft-lilac)]/70">
                          Quick note
                        </p>
                        <p className="mt-2 text-sm text-[var(--soft-lilac)]/90">
                          {p.name === 'YouTube'
                            ? 'Best for full-length episodes with visuals, reactions, and highlights you can share.'
                            : 'Perfect for listening while driving, working, or whenever you want the conversation in the background.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* OPTIONAL “TRUST” ROW — replaced generic logos with podcast-friendly placeholders */}
          <div className="flex justify-between py-16 opacity-70 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-6 max-sm:gap-y-4 sm:py-24">
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--soft-lilac)]/70">New Episodes</div>
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--soft-lilac)]/70">Guest Conversations</div>
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--soft-lilac)]/70">Real Stories</div>
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--soft-lilac)]/70">Clip Highlights</div>
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--soft-lilac)]/70">Rollout Updates</div>
          </div>
        </div>
      </div>

      {/* COMPARISON */}
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <table className="w-full text-left max-sm:hidden">
          <caption className="sr-only">Platform comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {platforms.map((p) => (
                <th key={p.name} scope="col" className="p-0">
                  <div className="text-sm font-semibold text-[var(--neon-coral)]">
                    {p.name} <span className="sr-only">platform</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-0" />
              {platforms.map((p) => (
                <td key={p.name} className="px-0 pt-3 pb-0">
                  <a
                    href={p.href}
                    target={p.href === '#' ? undefined : '_blank'}
                    rel={p.href === '#' ? undefined : 'noreferrer'}
                    aria-label={`Open ${p.name}`}
                    className="inline-block rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-[var(--steel-white)] inset-ring inset-ring-white/5 hover:bg-white/20"
                  >
                    {p.href === '#' ? 'Soon' : 'Open'}
                  </a>
                </td>
              ))}
            </tr>
          </thead>

          {sections.map((section) => (
            <tbody key={section.name} className="group">
              <tr>
                <th scope="colgroup" colSpan={4} className="px-0 pt-10 pb-0 group-first-of-type:pt-5">
                  <div className="-mx-4 rounded-lg bg-white/5 px-4 py-3 text-sm/6 font-semibold text-[var(--steel-white)] ring-1 ring-white/10">
                    {section.name}
                  </div>
                </th>
              </tr>

              {section.features.map((feature) => (
                <tr key={feature.name} className="border-b border-white/10 last:border-none">
                  <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-[var(--soft-lilac)]/90">
                    {feature.name}
                  </th>

                  {platforms.map((p) => (
                    <td key={p.name} className="p-4 max-sm:text-center">
                      {typeof feature.tiers[p.name] === 'string' ? (
                        <>
                          <span className="sr-only">{p.name}:</span>
                          <span className="text-sm/6 text-[var(--steel-white)]">{feature.tiers[p.name]}</span>
                        </>
                      ) : (
                        <>
                          {feature.tiers[p.name] === true ? (
                            <CheckIcon aria-hidden="true" className="inline-block size-4 fill-[var(--neon-coral)]" />
                          ) : (
                            <MinusIcon aria-hidden="true" className="inline-block size-4 fill-white/35" />
                          )}

                          <span className="sr-only">
                            {feature.tiers[p.name] === true ? `Available on ${p.name}` : `Not available on ${p.name}`}
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>

        {/* MOBILE TABS */}
        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {platforms.map((p) => (
              <Tab
                key={p.name}
                className="w-1/3 border-b border-white/10 py-4 text-base/8 font-medium text-[var(--neon-coral)] not-focus-visible:focus:outline-none data-selected:border-[var(--neon-coral)]"
              >
                {p.name}
              </Tab>
            ))}
          </TabList>

          <TabPanels as={Fragment}>
            {platforms.map((p) => (
              <TabPanel key={p.name} className="focus:outline-none">
                <a
                  href={p.href}
                  target={p.href === '#' ? undefined : '_blank'}
                  rel={p.href === '#' ? undefined : 'noreferrer'}
                  className="mt-8 block rounded-md bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-[var(--steel-white)] inset-ring inset-ring-white/5 hover:bg-white/20"
                >
                  {p.href === '#' ? 'Link coming soon' : `Open ${p.name}`}
                </a>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--soft-lilac)]/70">
                    {p.status}
                  </p>
                  <p className="mt-2 text-sm text-[var(--soft-lilac)]/90">{p.description}</p>
                </div>

                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <div className="-mx-6 mt-10 rounded-lg bg-white/5 px-6 py-3 text-sm/6 font-semibold text-[var(--steel-white)] ring-1 ring-white/10 group-first-of-type:mt-5">
                      {section.name}
                    </div>
                    <dl>
                      {section.features.map((feature) => (
                        <div key={feature.name} className="grid grid-cols-2 border-b border-white/10 py-4 last:border-none">
                          <dt className="text-sm/6 font-normal text-[var(--soft-lilac)]/90">{feature.name}</dt>
                          <dd className="text-center">
                            {typeof feature.tiers[p.name] === 'string' ? (
                              <span className="text-sm/6 text-[var(--steel-white)]">{feature.tiers[p.name]}</span>
                            ) : (
                              <>
                                {feature.tiers[p.name] === true ? (
                                  <CheckIcon aria-hidden="true" className="inline-block size-4 fill-[var(--neon-coral)]" />
                                ) : (
                                  <MinusIcon aria-hidden="true" className="inline-block size-4 fill-white/35" />
                                )}
                                <span className="sr-only">{feature.tiers[p.name] === true ? 'Yes' : 'No'}</span>
                              </>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Fragment>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>

        {/* SIMPLE “PODCAST DESCRIPTION” BLOCK (deliverable) */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--soft-lilac)]/80">
            About the podcast
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--steel-white)]">
            Real conversations. Real takeaways.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--soft-lilac)]/90">
            Reese’s show is built around honest discussion—life, growth, faith, and the kind of perspective that sticks with you.
            Expect guests, solo reflections, and practical moments you can apply immediately.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.youtube.com/@reese.wilder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--neon-coral)] px-5 py-3 text-sm font-semibold text-[var(--matte-black)] hover:opacity-90"
            >
              Watch on YouTube
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-[var(--steel-white)] hover:bg-white/10"
            >
              Spotify (coming soon)
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-[var(--steel-white)] hover:bg-white/10"
            >
              Apple Podcasts (coming soon)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
