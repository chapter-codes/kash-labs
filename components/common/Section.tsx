
type SectionProps = {
    title: string,
    description:string,
    style?: string
}


export default function Section({title, description, style}:SectionProps) {
  return (
    <div className={` my-10 ${style}`}>
      <h2 className="text-primary text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-secondary-foreground">{description}</p>
    </div>
  );
}
