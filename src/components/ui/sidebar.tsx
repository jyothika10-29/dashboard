
"use client";
import React, { useEffect, useState } from "react";
import { Nav } from "../Navbar";
import {
  LayoutDashboard,
  CloudSun,
  FileText,
  Moon,
  Settings,
  Droplet,
  Activity,
  ChevronRight,
  CircleUser
} from "lucide-react";
import { Button } from "./button";

function useWindowWidthClient() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    function handler() {
      setWidth(window.innerWidth);
    }
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return width;
}

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const width = useWindowWidthClient();
  const mobileWidth = width !== null ? width < 768 : false;

  function toggleSidebar() {
    setIsCollapsed((s) => !s);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-8">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-0">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
            aria-pressed={isCollapsed}
          >
            <ChevronRight
              className={`${isCollapsed ? "rotate-180" : ""} transition-transform`}
            />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          // Updated hrefs to use anchor links
          { title: "Dashboard", href: "#dashboard", icon: LayoutDashboard, variant: "ghost" },
          { title: "Weather", href: "#weather", icon: CloudSun, variant: "ghost" },
          { title: "Notes", href: "#notes", icon:FileText, variant: "ghost" },
          { title: "SleepTracker", href: "#sleep", icon: Moon, variant: "ghost" },
          { title: "Fitness", href: "#fitness", icon: Activity, variant: "ghost" },
          { title: "WaterReminder", href: "#water", icon:Droplet, variant: "ghost" },
          { title: "Profile", href: "/user", icon: CircleUser, variant: "ghost" }, 
          { title: "Settings", href: "/settings", icon: Settings, variant: "ghost" }
        ]}
      />
    </div>
  );
}