import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import correctionImg from '@/public/images/correction-services.png'
import onSiteTranslationsImg from '@/public/images/on-site-translations.jpg'
import qualityControlImg from '@/public/images/quality-control.png'
import translatingPic from '@/public/images/translating.jpg'
import voipPhoneTranslationsImg from '@/public/images/voip-phone-conference-translations.jpg'

import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className="w-full justify-center mx-auto">
      <div
        id="hero"
        className="relative bg-[url('/images/budapest-evening-mobile.jpg')] bg-cover bg-no-repeat bg-center md:bg-left md:bg-[url('/images/budapest-evening.jpg')] w-full h-[500px]"
      >
        <div className="max-w-6xl mx-auto h-full flex flex-col items-center md:justify-center">
          <div className="mx-6 xl:mx-0 mt-20 md:mt-0">
            <h1 className="max-w-4xl text-white text-5xl leading-[64px] md:text-6xl font-bold md:leading-[80px]">
              Accurate and Affordable Translations
            </h1>
            <p className="max-w-[450px] mt-2 md:mt-6 text-white text-lg md:text-2xl">
              Delivered by professional translators with over 20 years of
              experience.
            </p>
            <button
              id="hero-cta"
              className=" bg-white hover:bg-[#CE2939] text-black hover:text-white px-10 py-3 mt-8 md:mt-6 font-bold rounded-full hover:translate-x-1 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div
        id="what-we-do"
        className="my-12 mx-6 lg:mx-auto h-full flex items-center justify-center"
      >
        <div className="max-w-4xl w-full flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between mx-6 xl:mx-0">
          <div>
            <h2 className="text-3xl font-bold text-left">What We Do</h2>
            <p className="max-w-[540px] mx-auto mt-4 text-xl">
              We offer <b>high quality</b> translations for both individuals and
              businesses specializing in translations to and from{' '}
              <b>Hungarian</b>. We cover all kinds of documents ranging from
              business documents to medical records, books, legal documents and
              more.
            </p>
            <Link
              href={'/about'}
              className="inline-block bg-[#477050] hover:bg-[#CE2939] transition-all duration-200 text-white px-10 py-3 mt-8 md:mt-6 font-bold rounded-full"
            >
              About Us
            </Link>
          </div>
          <Image
            src={translatingPic}
            alt="What We Do"
            width={420}
            height={313}
            className="max-w-full md:max-w-[340px] mb-8 lg:mb-0"
          />
        </div>
      </div>
      <div id="services-intro" className="mt-10 py-5 bg-slate-50">
        <h2 className="text-3xl font-bold text-center mb-6">We Offer:</h2>
        <Service>
          <ServiceImage
            src={qualityControlImg}
            alt="We offer Correction and Quality Control services"
            width={680}
            height={850}
            variant="right"
            className="max-w-[200px] md:max-w-[200px]"
          />
          <ServiceContent variant="left">
            <ServiceTitle>High Quality Translations</ServiceTitle>
            <ServiceDescription>
              Our translators are known for their attention to detail and always
              deliver timely results. We offer translations for several language
              pairs and always include proofing as part of our service.
            </ServiceDescription>
            <ServiceCTA url="/contact" urlText="Request translation" />
          </ServiceContent>
        </Service>
        <Service>
          <ServiceImage
            src={correctionImg}
            alt="We offer Correction and Quality Control services"
            width={680}
            height={850}
            variant="left"
          />
          <ServiceContent variant="right">
            <ServiceTitle>Correction Services</ServiceTitle>
            <ServiceDescription>
              Already have a translation and need it to be checked by another
              translator? We have got you covered. We offer proofreading and
              correction services for all supported language pairs.
            </ServiceDescription>
            <ServiceCTA url="/language-pairs" urlText="Show pairs"></ServiceCTA>
          </ServiceContent>
        </Service>
        <Service>
          <ServiceImage
            src={onSiteTranslationsImg}
            alt="We offer On-site and Cabin Translations"
            width={640}
            height={291}
            variant="right"
          />
          <ServiceContent variant="left">
            <ServiceTitle>
              On-site / Cabin
              <br />
              Translations
            </ServiceTitle>
            <ServiceDescription>
              Need an on-site translation? We can help you with that. We offer
              translations for hourly wages specified for each language pair.
              You can find the wages table by clicking the link below.
            </ServiceDescription>
            <ServiceCTA url="language-pairs" urlText="Show wages" />
          </ServiceContent>
        </Service>
        <Service>
          <ServiceImage
            src={voipPhoneTranslationsImg}
            alt="We offer VoIP and Phone Conference translation services"
            width={640}
            height={291}
            variant="left"
          />
          <ServiceContent variant="right">
            <ServiceTitle>Phone/VoIP and Conference Translations</ServiceTitle>
            <ServiceDescription>
              We offer translations for phone/video calls, on-line conferences
              and meetings with translation performed in real time. We also
              provide services related to adding subtitles to existing
              recordings.
            </ServiceDescription>
            <ServiceCTA url="contact" urlText="Contact Us" />
          </ServiceContent>
        </Service>
      </div>
    </main>
  )
}

const Service = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-full lg:max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mx-0 md:mx-6 lg:mx-auto">
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
      className={cn(
        'order-last px-12 md:px-0',
        props.variant == 'left' && 'md:order-first'
      )}
    >
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={cn(
          'max-w-full md:max-w-[350px] mx-auto',
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
        'max-w-full px-12 md:px-0 md:max-w-[400px]',
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
