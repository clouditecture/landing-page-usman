
import Background from "./Background"
import HeroContent from "./HeroContent"
import HeroVisuals from "./HeroVisuals"

const HeroSection = ({
  heading = "AI Simplifies Architecture Design",
  subheading = "Empower individuals and teams to create, manage, and collaborate on architecture projects with AI-driven tools.",
  primaryCTA = { text: "Get Started For Free", href: "#learn" },
  showVisuals = true,
}) => {
  return (
    <section className="relative min-h-[720px] md:min-h-[820px] xl:min-h-screen flex items-stretch overflow-hidden">
      {/* Background with gradient, ambient orbs, and edge images */}
      <Background fullHeight={false} showImages={true} />

      <div className="relative z-20 mx-auto w-full max-w-[1280px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 xl:pt-32 pb-40 md:pb-52 xl:pb-[420px]">
        <HeroContent heading={heading} subheading={subheading} primaryCTA={primaryCTA} />
      </div>

      {showVisuals && <HeroVisuals />}
    </section>
  )
}

export default HeroSection
