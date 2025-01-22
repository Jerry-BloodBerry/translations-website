import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const Service = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-16">
      {children}
    </div>
  )
}

interface ServiceImageProps {
  src: StaticImageData
  alt: string
  width: number
  height: number
  variant: 'left' | 'right'
  className?: string
}

const ServiceImage = (props: ServiceImageProps) => {
  return (
    <div
      className={cn('order-last', props.variant == 'left' && 'md:order-first')}
    >
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={cn(
          'max-w-full md:max-w-[350px] mx-auto mt-4 lg:mt-0',
          props.variant === 'left' ? 'lg:ml-0' : 'lg:mr-0',
          props.className
        )}
      />
    </div>
  )
}

const ServiceTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-2xl font-bold">{children}</h3>
}

const ServiceDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="mt-3">{children}</p>
}

const ServiceContent = ({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: 'left' | 'right'
}) => {
  return (
    <div
      className={cn(
        'max-w-full md:max-w-[400px]',
        variant == 'right' && 'md:ml-auto'
      )}
    >
      {children}
    </div>
  )
}

const ServiceCTA = ({ url, urlText }: { url: string; urlText: string }) => {
  return (
    <Link
      href={url}
      className="inline-block bg-[#CE2939] text-white transition-transform duration-200 text-md px-4 py-2 rounded-full mt-4 hover:translate-x-2 hover:-translate-y-1"
    >
      {urlText}
    </Link>
  )
}

Service.Image = ServiceImage
Service.Title = ServiceTitle
Service.Description = ServiceDescription
Service.Content = ServiceContent
Service.CallToAction = ServiceCTA

export default Service
