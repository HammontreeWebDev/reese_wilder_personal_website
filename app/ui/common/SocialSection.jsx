export default function SocialSection({
  platformName,       // "Instagram" | "TikTok" | "YouTube"
  handle,             // e.g. "reese.wilder"
  profileUrl,         // full URL to the profile
  Icon,               // optional React component for the platform icon
  tagline,            // short line like "Behind-the-scenes moments & daily life"
  description,        // longer paragraph for the main content
  stats = [],         // [{ label: "Followers", value: "12.3k" }, ...]
  secondaryLinks = [],// [{ label: "View all Reels", href: "#" }, ...]
  featuredPostEmbed,  // React node with iframe / blockquote / etc.
}) {
  return (
    <div className="flex min-h-full flex-col bg-[var(--matte-black)] text-[var(--steel-white)]">
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-24 sm:px-6 lg:px-8">
        {/* LEFT COLUMN – Platform summary / quick links */}
        <aside className="sticky top-24 hidden w-44 shrink-0 lg:block">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--electric-violet)] to-[var(--neon-coral)]">
                {Icon ? (
                  <Icon className="h-6 w-6 text-[var(--steel-white)]" aria-hidden="true" />
                ) : (
                  <span className="text-sm font-semibold uppercase">
                    {platformName?.[0] ?? "R"}
                  </span>
                )}
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--soft-lilac)]/80">
                  Reese on {platformName}
                </p>
                <p className="text-sm font-semibold">{platformName}</p>
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[var(--soft-lilac)] underline underline-offset-4 hover:text-[var(--neon-coral)]"
                >
                  @{handle}
                </a>
              </div>
            </div>

            {tagline && (
              <p className="mt-4 text-xs text-[var(--soft-lilac)]/90">
                {tagline}
              </p>
            )}

            {stats.length > 0 && (
              <dl className="mt-5 space-y-2 text-xs">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between">
                    <dt className="text-[var(--soft-lilac)]/80">{stat.label}</dt>
                    <dd className="font-semibold">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {secondaryLinks.length > 0 && (
              <div className="mt-5 border-t border-white/10 pt-4 space-y-2">
                {secondaryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-xs font-medium text-[var(--steel-white)] hover:text-[var(--neon-coral)]"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* MAIN COLUMN – Narrative / content description */}
        <main className="flex-1">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--soft-lilac)]/80">
              Social Spotlight
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {platformName} with Reese Wilder
            </h1>
            <p className="mt-4 text-sm text-[var(--soft-lilac)]/90">
              Honest moments, behind-the-scenes glimpses, and the heartbeat behind every conversation.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Column: What to expect */}
            <section className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-base font-semibold">
                What you’ll find on {platformName}
              </h2>
              <p className="text-sm text-[var(--soft-lilac)]/90">
                {description ??
                  `From early episode ideas to final published conversations, ${platformName} is where Reese shares the
                  journey behind the podcast—not just the polished moments. Expect real stories, honest reflections,
                  and content that feels like sitting down for a real, unfiltered talk.`}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--soft-lilac)]">
                <li>• Sneak peeks of upcoming podcast episodes and themes.</li>
                <li>• Behind-the-scenes of recording days, planning, and editing.</li>
                <li>• Candid moments, life updates, and takeaways that didn’t make the final cut.</li>
              </ul>
            </section>

            {/* Column: Cross-platform links */}
            <section className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-base font-semibold">Find Reese everywhere</h2>
              <p className="text-sm text-[var(--soft-lilac)]/90">
                Whether you like to scroll, watch, or just listen in the background, you can follow Reese across
                platforms to catch different angles of the same story and stay up to date as new episodes roll out.
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="https://instagram.com/reese.wilder"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 text-xs font-semibold">
                      📸
                    </span>
                    <span>
                      <span className="block font-medium">Instagram</span>
                      <span className="block text-[0.7rem] text-[var(--soft-lilac)]">
                        @reese.wilder
                      </span>
                    </span>
                  </span>
                  <span className="text-xs text-[var(--soft-lilac)]">View profile →</span>
                </a>

                <a
                  href="https://www.tiktok.com/@reese_wilder"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-fuchsia-500 text-xs font-semibold">
                      🎙️
                    </span>
                    <span>
                      <span className="block font-medium">TikTok</span>
                      <span className="block text-[0.7rem] text-[var(--soft-lilac)]">
                        @reese_wilder
                      </span>
                    </span>
                  </span>
                  <span className="text-xs text-[var(--soft-lilac)]">Watch clips →</span>
                </a>

                <a
                  href="https://www.youtube.com/@reese.wilder"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 text-xs font-semibold">
                      ▶️
                    </span>
                    <span>
                      <span className="block font-medium">YouTube</span>
                      <span className="block text-[0.7rem] text-[var(--soft-lilac)]">
                        @reese.wilder
                      </span>
                    </span>
                  </span>
                  <span className="text-xs text-[var(--soft-lilac)]">Play videos →</span>
                </a>
              </div>
            </section>
          </div>
        </main>

        {/* RIGHT COLUMN – Featured post */}
        <aside className="sticky top-24 hidden w-96 shrink-0 xl:block">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--soft-lilac)]/80">
              Featured {platformName} Post
            </p>
            <p className="mt-1 text-sm text-[var(--soft-lilac)]/90">
              A recent moment that captures where Reese is in the conversation right now.
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
              {featuredPostEmbed || (
                <div className="flex h-64 items-center justify-center px-4 text-center text-xs text-[var(--soft-lilac)]/80">
                  Embed a featured {platformName} post here (episode teaser, highlight clip, or promo snippet).
                </div>
              )}
            </div>

            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[var(--steel-white)] hover:text-[var(--neon-coral)]"
            >
              View more on {platformName} →
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}
