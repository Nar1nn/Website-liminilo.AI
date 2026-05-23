import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
}