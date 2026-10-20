type IconProps = { size?: number; className?: string };

const defaults = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight({ size = 20, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaults}><path d="M7 17 17 7M7 7h10v10" /></svg>;
}

export function ArrowRight({ size = 20, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaults}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function CodeIcon({ size = 24, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaults}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></svg>;
}

export function LayersIcon({ size = 24, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaults}><path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
}

export function MessageIcon({ size = 24, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaults}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" /><path d="M8 10h8M8 14h5" /></svg>;
}

export function LocationIcon({ size = 20, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaults}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export function LinkedInIcon({ size = 20, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaults}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...defaults}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
}
