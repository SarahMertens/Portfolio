export type Scene = 'open' | 'reef' | 'sand' | 'wreck' | 'deep';

export function getScene(pathname: string): Scene {
  const parts = pathname.split('/').filter(Boolean).slice(1);
  if (parts[0] === 'projects') return parts.length > 1 ? 'sand' : 'reef';
  if (parts[0] === 'about') return 'wreck';
  if (parts[0] === 'contact' || parts[0] === 'thanks') return 'deep';
  return 'open';
}

export const sceneAssets: Record<
  Scene,
  { creature: string; width: number; height: number; seabed: string }
> = {
  open: { creature: 'whale-shark', width: 1000, height: 420, seabed: 'seabed' },
  reef: { creature: 'school', width: 900, height: 640, seabed: 'seabed-reef' },
  sand: {
    creature: 'jellyfish',
    width: 360,
    height: 620,
    seabed: 'seabed-sand',
  },
  wreck: {
    creature: 'turtle',
    width: 700,
    height: 560,
    seabed: 'seabed-wreck',
  },
  deep: { creature: 'manta', width: 900, height: 520, seabed: 'seabed-deep' },
};
