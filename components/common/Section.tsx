import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  description: string;
  style?: string;
  className?: string;
};

export default function Section({title, description, style, className=""}:SectionProps) {
  return (
    <div className={cn(` my-10 ${style}`, className)}>
      <h2 className="text-primary text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-secondary-foreground">{description}</p>
    </div>
  );
}
