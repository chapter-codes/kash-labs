import { LoaderCircle } from "lucide-react";

export default function Spinner() {
  return (
    <div className="w-full flex justify-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
