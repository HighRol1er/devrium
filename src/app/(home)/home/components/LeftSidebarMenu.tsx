'use client';

import {
  Bookmark,
  MessageCircleCode,
  HomeIcon,
  LucideProps,
  Settings,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface iAppProps {
  id: number;
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}

export const leftMenu: iAppProps[] = [
  {
    id: 0,
    name: 'Home',
    href: '/home',
    icon: HomeIcon,
  },
  {
    id: 1,
    name: 'Questions',
    href: '/home/question',
    icon: MessageCircleCode,
  },
  {
    id: 2,
    name: 'Bookmark',
    href: '/home/bookmark',
    icon: Bookmark,
  },
  {
    id: 3,
    name: 'Settings',
    href: '/home/settings',
    icon: Settings,
  },
];

export function LeftSidebarMenu() {
  const pathname = usePathname();
  return (
    <>
      {leftMenu.map((menu) => (
        <Link
          className={cn(
            pathname === menu.href
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:text-foreground',
            'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
          )}
          key={menu.id}
          href={menu.href}
        >
          <menu.icon className="size-4" />
          {menu.name}
        </Link>
      ))}
    </>
  );
}
