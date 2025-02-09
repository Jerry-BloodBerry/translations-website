import { LucideProps } from 'lucide-react'

import { cn } from '@/lib/utils'

const SocialIcon = ({
  icon,
  url,
  size,
  withHoverEffect,
}: {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  url: string
  size: 'small' | 'large'
  withHoverEffect?: boolean
}) => {
  const Icon = icon
  return (
    <li>
      <a
        href={url}
        target="_blank"
        className={cn(
          `block border-2 border-[#CE2939] bg-white text-[#CE2939] rounded-full h-${getHeightBasedOnSize(size)} w-${getHeightBasedOnSize(size)} text-center transition-all ease-in-out duration-200`,
          withHoverEffect && 'hover:bg-[#CE2939] hover:text-white'
        )}
      >
        <Icon
          size={getIconSize(size)}
          className={cn('block mx-auto mt-[6px]', size == 'large' && 'mt-2')}
        />
      </a>
    </li>
  )
}

const getHeightBasedOnSize = (size: 'small' | 'large') => {
  switch (size) {
    case 'small':
      return '8'
    case 'large':
      return '12'
  }
}

const getIconSize = (size: 'small' | 'large') => {
  switch (size) {
    case 'small':
      return '16'
    case 'large':
      return '24'
  }
}

export default SocialIcon
