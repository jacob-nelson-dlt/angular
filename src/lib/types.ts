export type IconSvgObject = readonly (readonly [string, Record<string, any>])[];

export type IconName = string;

export interface IconMetadata {
  name: IconName;
  category: string;
  tags: string[];
  pack: string;
}

export interface IconData {
  icon: IconSvgObject;
  metadata: IconMetadata;
}

export interface HugeiconsProps {
  size?: string | number;
  strokeWidth?: number;
  icon: IconSvgObject;
  altIcon?: IconSvgObject;
  color?: string;
  class?: string;
  showAlt?: boolean;
} 