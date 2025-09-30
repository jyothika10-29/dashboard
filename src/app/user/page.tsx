// src/app/profile/page.tsx
"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// You may need to import other components from your project
// import PageTitle from "../components/pagetitle";

export default function UserProfilePage() {
  const user = {
    name: "User",
    email: "abcd@email.com",
    avatarUrl: "https://ui.shadcn.com/avatars/01.png",
    bio: "Track daily progress.",
    stats: [
      { label: "Steps This Week", value: "52,450" },
      { label: "Workouts Logged", value: "15" },
      { label: "Active Minutes", value: "680" },
    ],
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>Your personal details and fitness summary.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatarUrl} alt="@user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="mt-2 text-sm italic">{user.bio}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {user.stats.map((stat, index) => (
          <Card key={index} className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}