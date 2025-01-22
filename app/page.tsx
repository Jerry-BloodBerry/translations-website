import Image from 'next/image'
import Link from 'next/link'
import correctionImg from '@/public/images/correction-services.png'
import onSiteTranslationsImg from '@/public/images/on-site-translations.jpg'
import qualityControlImg from '@/public/images/quality-control.png'
import translatingPic from '@/public/images/translating.jpg'
import voipPhoneTranslationsImg from '@/public/images/voip-phone-conference-translations.jpg'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

import Service from '@/components/service'

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
      <div id="services-intro" className="mt-10 py-10 bg-slate-50">
        <h2 className="text-3xl font-bold text-center mb-6">We Offer:</h2>
        <Service>
          <Service.Image
            src={qualityControlImg}
            alt="We offer Correction and Quality Control services"
            width={680}
            height={850}
            variant="right"
            className="max-w-[200px] md:max-w-[200px]"
          />
          <Service.Content variant="left">
            <Service.Title>High Quality Translations</Service.Title>
            <Service.Description>
              Our translators are known for their attention to detail and always
              deliver timely results. We offer translations for several language
              pairs and always include proofing as part of our service.
            </Service.Description>
            <Service.CallToAction
              url="/contact"
              urlText="Request translation"
            />
          </Service.Content>
        </Service>
        <Service>
          <Service.Image
            src={correctionImg}
            alt="We offer Correction and Quality Control services"
            width={680}
            height={850}
            variant="left"
          />
          <Service.Content variant="right">
            <Service.Title>Correction Services</Service.Title>
            <Service.Description>
              Already have a translation and need it to be checked by another
              translator? We have got you covered. We offer proofreading and
              correction services for all supported language pairs.
            </Service.Description>
            <Service.CallToAction url="/language-pairs" urlText="Show pairs" />
          </Service.Content>
        </Service>
        <Service>
          <Service.Image
            src={onSiteTranslationsImg}
            alt="We offer On-site and Cabin Translations"
            width={640}
            height={291}
            variant="right"
          />
          <Service.Content variant="left">
            <Service.Title>
              On-site / Cabin
              <br />
              Translations
            </Service.Title>
            <Service.Description>
              Need an on-site translation? We can help you with that. We offer
              translations for hourly wages specified for each language pair.
              You can find the wages table by clicking the link below.
            </Service.Description>
            <Service.CallToAction url="language-pairs" urlText="Show wages" />
          </Service.Content>
        </Service>
        <Service>
          <Service.Image
            src={voipPhoneTranslationsImg}
            alt="We offer VoIP and Phone Conference translation services"
            width={640}
            height={291}
            variant="left"
          />
          <Service.Content variant="right">
            <Service.Title>
              Phone/VoIP and Conference Translations
            </Service.Title>
            <Service.Description>
              We offer translations for phone/video calls, on-line conferences
              and meetings with translation performed in real time. We also
              provide services related to adding subtitles to existing
              recordings.
            </Service.Description>
            <Service.CallToAction url="contact" urlText="Contact Us" />
          </Service.Content>
        </Service>
      </div>
      <div
        id="working-with-us"
        className="my-12 mx-6 lg:mx-auto h-full flex flex-col items-center justify-center"
      >
        <div className="max-w-4xl w-full mx-6 xl:mx-0">
          <h2 className="text-3xl font-bold text-left">Working with us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <WorkWithUsStep />
          </div>
        </div>
      </div>
    </main>
  )
}

const WorkWithUsStep = () => {
  return (
    <div className="relative mt-10 max-w-[300px] px-4 pt-12 pb-8 mb-8 border-2 border-[#477050] rounded-xl">
      <WorkWithUsIcon icon={DocumentTextIcon} />
      <WorkWithUsTitle>Send Your Documents</WorkWithUsTitle>
      <WorkWithUsContent>
        Please send your documents to the following e-mail address:{' '}
        <a
          href="mailto:translations.request@acme.com?subject=Translation request"
          className="text-[#150f47] underline"
        >
          translations.request@acme.com
        </a>
        . After receiving the translation we will provide a quote within{' '}
        <b>24 hours</b>.
      </WorkWithUsContent>
    </div>
  )
}

const WorkWithUsTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4 text-lg font-bold text-center">{children}</div>
}

const WorkWithUsIcon = ({
  icon,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => {
  const Icon = icon
  return (
    <div className="absolute -top-[40px] left-[50%] translate-x-[-50%] h-[90px] w-[90px] mx-auto bg-white border-[#477050] border-4 rounded-full text-black text-center">
      <Icon className="size-12 text-black mx-auto mt-4" />
    </div>
  )
}

const WorkWithUsContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4 text-center">{children}</div>
}
