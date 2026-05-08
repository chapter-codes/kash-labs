import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  description: string;
  style?: string;
  className?: string;
  descriptionClassName?: string;
};

export default function Section({title, description, style, className="", descriptionClassName=""}:SectionProps) {
  return (
    <div className={cn(` my-10 ${style}`, className)}>
      <h2 className="text-primary text-2xl font-semibold mb-4">{title}</h2>
      <p className={cn("text-secondary-foreground", descriptionClassName)}>
        {description}
      </p>
    </div>
  );
}
