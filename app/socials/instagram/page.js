import SocialSection from "@/app/ui/common/SocialSection"
import InstagramIcon from "@/app/ui/icons/InstagramIcon"

export default function InstagramPage() {
  return (
    <SocialSection
      platformName="Instagram"
      handle="reese.wilder"
      profileUrl="https://instagram.com/reese.wilder"
      tagline="Snapshots of real life, honest thoughts, and the stories behind each episode."
      description="On Instagram, Reese shares a mix of day-to-day moments, behind-the-scenes shots from recording sessions, and short reflections that tie into upcoming or recent podcast episodes. It’s the best place to get to know Reese as a person—before, during, and after the conversations you’ll hear on the show."
      stats={[
        { label: 'Primary format', value: 'Reels, Stories & Photo posts' },
        { label: 'Focus', value: 'Personal moments & podcast highlights' },
        { label: 'Vibe', value: 'Real • Relatable • Reflective' },
      ]}
      secondaryLinks={[
        { label: 'Open Instagram profile', href: 'https://instagram.com/reese.wilder' },
      ]}
      featuredPostEmbed={
        // Replace this with your actual Instagram embed (iframe / blockquote component)
        <div className="aspect-[4/5] w-full bg-black/60 flex items-center justify-center px-4 text-center text-xs text-[var(--steel-white)]/80">
          Featured Instagram post embed goes here — for example, a Reel teaser for a new podcast episode.
        </div>
      }
      Icon={InstagramIcon}
    />
  )
}