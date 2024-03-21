export default function SectionHeader({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[2px] w-[20px] bg-foreground" />
      <h2 className="text-2xl font-extralight">{text}</h2>
      <div className="h-[2px] grow bg-gradient-to-r from-foreground " />
    </div>
  );
}
