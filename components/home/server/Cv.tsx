import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
// import { cv } from "@/assets";

interface CvProps {
  trigger: React.ReactNode;
}

export const CV = ({ trigger }: CvProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="bg-footer-bg pb-[3.0625rem] pt-[4.9375rem] block  px-0  h-svh  min-h-[44.6875rem] max-h-[44.6875rem] my-auto  top-[45%] -translate-y-1/2 -translate-x-1/2 left-1/2 rounded-[20px] custom-sizing overflow-hidden"
      >
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription className=" h-full max-h-[36.6875rem] overflow-y-auto ">
            <div className="absolute top-4 right-4 w-full flex justify-end">
              <SheetClose asChild>
                <X className="w-5 h-5" />
              </SheetClose>
            </div>
            {/* <iframe
              src="https://drive.google.com/file/d/17ZXDQC0aog9n5ztN0Nhv3fbNcw2oNTY-/preview"
              // src={}
              className="w-full h-[37.5rem] bg-none! rounded-[20px] "
            ></iframe> */}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CV;
