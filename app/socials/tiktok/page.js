import SocialSection from "@/app/ui/common/SocialSection";
import TikTokIcon from "@/app/ui/icons/TikTok";

export default function TikTokPage() {
  return (
    <SocialSection
      platformName="TikTok"
      handle="reese_wilder"
      profileUrl="https://www.tiktok.com/@reese_wilder"
      tagline="Short, punchy clips from longer conversations — plus spontaneous thoughts in between."
      description="On TikTok, Reese breaks down podcast moments into quick, scroll-friendly clips. Expect memorable quotes, strong takeaways, and real talk about life, faith, and growth. You’ll also see occasional off-the-cuff videos where Reese shares what’s on his mind as he prepares new episodes for release across all major podcast platforms."
      stats={[
        { label: 'Primary format', value: 'Vertical short-form video' },
        { label: 'Focus', value: 'Episode clips & key takeaways' },
        { label: 'Vibe', value: 'Direct • Honest • High-energy' },
      ]}
      secondaryLinks={[
        { label: 'Open TikTok profile', href: 'https://www.tiktok.com/@reese_wilder' },
      ]}
      featuredPostEmbed={
        // Replace this with your actual TikTok embed (iframe / blockquote)
        <div className="aspect-[9/16] w-full bg-black/60 flex items-center justify-center px-4 text-center text-xs text-[var(--steel-white)]/80">
          Featured TikTok embed goes here — for example, a clip from a favorite podcast moment.
        </div>
      }
      Icon={TikTokIcon}
    />
  )
}
