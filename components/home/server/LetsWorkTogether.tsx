import CustomDiv from "@/components/common/CustomDiv";
import Section from "@/components/common/Section";
import ContactForm from "@/components/home/client/contactForm";
import Image from 'next/image'
import Link from "next/link";

// action
import { handleContactForm } from "../action";

export default async function LetsWorkTogether() {
  return (
    <div className="bg-bg-3 py-[4.25rem] mt-19 mb-0">
      <CustomDiv style="flex  md:gap-16">
        <div className="basis-1/2 ">
          <Section title="Let’s work together" description="" style="my-0!" />
          <p className="text-secondary-foreground mt-8">
            At Kashlabs, we’re passionate about bringing ideas to life through
            clean, creative, and user-focused design. Whether you're looking to
            build a standout brand, launch a website, or enhance user
            experience, we’re ready to collaborate and make it happen.
          </p>
          <p className="text-secondary-foreground mt-6">
            Let’s turn your vision into reality.
          </p>

          <div className="flex gap-1 items-center mt-16">
            <Image
              src="/icons/whatsapp.png"
              height={24}
              width={24}
              alt="whatsapp logo"
              className="w-6 h-auto "
            />
            <Link href="https%3A%2F%2Fwa.me%2F2348093757442" className="text-sm text-secondary-foreground underline capitalize">whatsapp</Link>
          </div>
        </div>
        <ContactForm action={handleContactForm} />
      </CustomDiv>
    </div>
  );
}
