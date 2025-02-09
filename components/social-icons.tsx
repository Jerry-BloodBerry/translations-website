import { Facebook, Instagram, Linkedin } from 'lucide-react'

import SocialIcon from './social-icon'

const SocialIcons = ({
  size,
  withHoverEffect,
}: {
  size: 'small' | 'large'
  withHoverEffect?: boolean
}) => {
  return (
    <ul className="flex flex-row space-x-4 justify-center lg:justify-start lg:ml-2">
      <SocialIcon
        size={size}
        icon={Facebook}
        withHoverEffect={withHoverEffect}
        url="https://facebook.com"
      />
      <SocialIcon
        size={size}
        icon={Linkedin}
        withHoverEffect={withHoverEffect}
        url="https://linkedin.com"
      />
      <SocialIcon
        size={size}
        icon={Instagram}
        withHoverEffect={withHoverEffect}
        url="https://instagram.com"
      />
    </ul>
  )
}

export default SocialIcons
