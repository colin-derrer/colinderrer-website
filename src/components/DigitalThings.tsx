export default function DigitalThings({ title }: { title: string }) {
  return (
    <div className="w-full px-2 py-2 text-4xl font-thin transition-all border-b last:border-none border-foreground hover:px-4 hover:bg-foreground hover:text-background">
      <p className="pointer-events-none">{title}</p>
    </div>
  );
}
