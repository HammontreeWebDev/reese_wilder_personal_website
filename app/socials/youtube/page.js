import SocialSection from "@/app/ui/common/SocialSection"

export default function YouTubePage() {
  return (
    <SocialSection
      platformName="YouTube"
      handle="reese.wilder"
      profileUrl="https://www.youtube.com/@reese.wilder"
      tagline="Full-length conversations, deep dives, and the visual side of the podcast."
      description="On YouTube, Reese plans to host full episodes, longer-form conversations, and selected highlights that are best experienced in a sit-down, watch-and-listen format. As the show rolls out to all major platforms, YouTube will be a home base for viewers who want to see body language, reactions, and the nuance that comes with face-to-face conversations."
      stats={[
        { label: 'Primary format', value: 'Long-form video & highlights' },
        { label: 'Focus', value: 'Full episodes & in-depth clips' },
        { label: 'Vibe', value: 'Thoughtful • Conversational • Intimate' },
      ]}
      secondaryLinks={[
        { label: 'Open YouTube channel', href: 'https://www.youtube.com/@reese.wilder' },
      ]}
      featuredPostEmbed={
        // Replace this with your actual YouTube embed (iframe)
        <div className="aspect-video w-full bg-black/60 flex items-center justify-center px-4 text-center text-xs text-[var(--steel-white)]/80">
          Featured YouTube video embed goes here — for example, a trailer or a highlight from an upcoming episode.
        </div>
      }
    />
  )
}
