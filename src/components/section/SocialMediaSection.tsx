import SocialMedia from "@/data/SocialMedia"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const SocialMediaSection = () => {
    return(
        <>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">Social Media</h2>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4 mt-6 max-w-6xl">
              <AnimatedTooltip items={SocialMedia} />
            </div>
          </div>
        </div>
        </>
    )
}

export default SocialMediaSection