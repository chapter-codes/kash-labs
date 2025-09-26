import CustomDiv from "@/components/common/CustomDiv";
import Section from "@/components/common/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/server/home";
import Image from "next/image";

export default function Testimonial() {
  return (
    <CustomDiv style="">
      <Section
        title="Testimonials"
        description="Comprehensive design solutions for your business needs"
        style="w-full flex flex-col items-center mt-25!"
      />
      <Carousel>
        <CarouselContent className="relative flex gap-5 p-2 ml-0!">
          {testimonials.map((testimonial, index) => (
            <article className="self-stretch basis-1/2 shrink-0   bg-card-bg p-9 max-w-[560px] rounded-[18.5px]" key={testimonial.name + index}>
              <div className="flex gap-3 ">
                <Image
                  width={80}
                  height={80}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="size-20 rounded-full object-cover"
                />
                <div className="">
                  <h3 className="text-base font-medium">{testimonial.name}</h3>
                  <h4 className="text-[#666E7A] font-mulish mt-1">
                    {testimonial.role}
                  </h4>
                  <p className="text-secondary-foreground mt-8">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </CustomDiv>
  );
}
