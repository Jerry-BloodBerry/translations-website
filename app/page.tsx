import Image from "next/image";
import translatingPic from "@/public/images/translating.jpg";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
export default function Home() {
    return (
        <main className="w-full justify-center mx-auto">
            <div
                id="hero"
                className="relative bg-[url('/images/budapest-evening-mobile.jpg')] bg-cover bg-no-repeat bg-center md:bg-left md:bg-[url('/images/budapest-evening.jpg')] w-full h-[600px] md:h-[500px]"
            >
                <div className="max-w-6xl mx-auto h-full flex flex-col items-center md:justify-center">
                    <div className="mx-6 xl:mx-0 mt-20 md:mt-0">
                        <h1 className="max-w-5xl text-white text-5xl leading-[64px] md:text-6xl font-bold md:leading-[80px]">
                            Accurate and Affordable Translations
                        </h1>
                        <p className="max-w-[450px] mt-2 md:mt-6 text-white text-lg md:text-2xl">
                            Delivered by professional translators with over 20 years of experience.
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
            <div id="what-we-do" className="my-12 mx-6 lg:mx-auto h-full flex items-center justify-center">
                <div className="max-w-5xl w-full flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between mx-6 xl:mx-0">
                    <div>
                        <h2 className="text-3xl font-bold text-left">What We Do</h2>
                        <p className="max-w-[540px] mx-auto mt-4 text-xl">
                            We offer <b>high quality</b> translations for both individuals and businesses specializing
                            in translations to and from <b>Hungarian</b>. We cover all kinds of documents ranging from
                            business documents to medical records, books, legal documents and more.
                        </p>
                        <Link
                            href={"/about"}
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
                        className="max-w-full md:max-w-[420px] mb-8 lg:mb-0"
                    />
                </div>
            </div>
            <div id="services-intro" className="mt-10 py-5">
                <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
                <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="px-6 py-3 mx-8 md:mx-0 bg-white shadow-lg rounded-lg flex flex-col justify-between">
                        <h3 className="text-xl font-bold">High Quality Translations</h3>
                        <div className="my-3">
                            <p>
                                Our translators are known for their attention to detail and always deliver timely
                                results. We offer translations for several language pairs and always include proofing as
                                part of our service.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-white hover:bg-[#CE2939] text-black hover:text-white transition-colors duration-200 text-md px-4 py-2 border hover:border-[#CE2939] rounded-full mt-3"
                            >
                                Request translation
                            </Link>
                        </div>
                    </div>
                    <div className="px-6 py-3 mx-8 md:mx-0 bg-white shadow-lg rounded-lg flex flex-col justify-between">
                        <h3 className="text-xl font-bold">Correction</h3>
                        <div className="my-3">
                            <p>
                                Already have a translation and need it to be checked by another translator? We have got
                                you covered. We offer proofreading and correction services for all supported language
                                pairs.
                            </p>
                            <Link
                                href="language-pairs"
                                className="inline-block bg-white hover:bg-[#CE2939] text-black hover:text-white transition-colors duration-200 text-md px-4 py-2 border hover:border-[#CE2939] rounded-full mt-3"
                            >
                                Show pairs
                            </Link>
                        </div>
                    </div>
                    <div className="px-6 py-3 mx-8 md:mx-0 bg-white shadow-lg rounded-lg flex flex-col justify-between">
                        <h3 className="text-xl font-bold">On-site/Cabin translations</h3>
                        <div className="my-3">
                            <p>
                                Need an on-site translation? We can help you with that. We offer translations for hourly
                                wages specified for each language pair. You can find the wages table by clicking the
                                link below.
                            </p>
                            <Link
                                href="language-pairs"
                                className="inline-block bg-white hover:bg-[#CE2939] text-black hover:text-white transition-colors duration-200 text-md px-4 py-2 border hover:border-[#CE2939] rounded-full mt-3"
                            >
                                Show wages
                            </Link>
                        </div>
                    </div>
                    <div className="px-6 py-3 mx-8 md:mx-0 bg-white shadow-lg rounded-lg flex flex-col justify-between">
                        <h3 className="text-xl font-bold">Phone/VoIP Translations</h3>
                        <div className="my-3">
                            <p>
                                We offer translations for on-line conferences and meetings with translation performed in
                                real time. We also provide services related to adding subtitles to existing recordings.
                            </p>
                            <Link
                                href="language-pairs"
                                className="inline-block bg-white hover:bg-[#CE2939] text-black hover:text-white transition-colors duration-200 text-md px-4 py-2 border hover:border-[#CE2939] rounded-full mt-3"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
