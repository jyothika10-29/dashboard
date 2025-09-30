// src/Navbar.tsx
"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider, } from "@/components/ui/tooltip";
import ModeToggle from "../components/mode-toggle";

interface NavProps {
    isCollapsed: boolean;
    links: {
        title: string;
        label?: string;
        icon: LucideIcon;
        variant: "default" | "ghost";
        href: string;
    }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
    const pathName = usePathname();
    const router = useRouter();
    return (
        <TooltipProvider>
            <div data-collapsed={isCollapsed} className="group flex flex-col gap-4 py-2 transition-all duration-300" >
                {/* Navigation Links */}
                <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                    {links.map((link, index) => {
                        const active = link.href === pathName;
                        const baseClass = cn(buttonVariants
                            ({ variant: active ? "default" : "ghost", size: isCollapsed ? "icon" : "sm", }),
                            "transition-all duration-200",
                            isCollapsed ? "h-9 w-9" : "justify-start",
                            active && "border-l-4 border-primary rounded-none",
                            // Add this line to override the ghost variant's text color
                             "text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10"
                        );
                        if (isCollapsed) {
                            return (<Tooltip key={index} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <a href={link.href} className={baseClass} onClick={(e) => { e.preventDefault(); router.push(link.href); }} >
                                        <link.icon className="h-4 w-4" />
                                        <span className="sr-only">{link.title}</span>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="flex items-center gap-4">
                                    <span>{link.title}</span>
                                    {link.label && (<span className="ml-auto text-muted-foreground">
                                        {link.label} </span>)}
                                </TooltipContent>
                            </Tooltip>);
                        }
                        return (<Link key={index} href={link.href} className={baseClass}>
                            <link.icon className="mr-2 h-4 w-4" />
                            <span>{link.title}</span>
                            {link.label && (<span className={cn("ml-auto", link.variant === "default" && "text-background dark:text-white")} >
                                {link.label}
                            </span>)}
                        </Link>);
                    })}
                </nav>
                {/* Theme Toggle */}
                <div className="px-2 py-3">
                    <ModeToggle />
                </div>
            </div>
        </TooltipProvider>
    );
}