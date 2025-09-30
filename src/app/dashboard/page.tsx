"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellRing, Check, Droplet, Circle, LineChart, Users, CircleUser, TrendingUp, Sparkles, Goal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Toaster, toast } from "sonner";
const activity = [
    { date: "Sep 18", type: "Running", duration: "30 min" },
    { date: "Sep 17", type: "Weightlifting", duration: "45 min" },
    { date: "Sep 16", type: "Walking", duration: "60 min" },
];

const notifications = [
    { id: 1, text: "Hydration check: It's time to drink some water!", icon: Droplet },
    { id: 2, text: "Today's workout scheduled: 6 PM.", icon: BellRing },
    { id: 3, text: "You've met your daily step goal!", icon: Check },
];

export default function DashboardPage() {
    const [steps, setSteps] = useState(7543);
    const [goal] = useState(10000);
    const [calories, setCalories] = useState(520);
    const [activeMinutes, setActiveMinutes] = useState(95);

    useEffect(() => {
        const interval = setInterval(() => {
            const newSteps = Math.floor(Math.random() * 200) + 1;
            setSteps(prevSteps => {
                const updatedSteps = prevSteps + newSteps;
                if (prevSteps < goal && updatedSteps >= goal) {
                    toast("Congratulations!", {
                        description: "You've reached your daily step goal!",
                    });
                }
                setCalories(prevCalories => prevCalories + Math.floor(newSteps * 0.05));
                setActiveMinutes(prevMinutes => prevMinutes + Math.floor(newSteps * 0.01));
                return updatedSteps;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [goal]);

    const progressPercentage = Math.min((steps / goal) * 100, 100);

    const getInsight = () => {
      if (steps >= goal) {
        return { text: "You've crushed your goal! Keep up the great work.", icon: Sparkles };
      }
      if (steps > goal * 0.75) {
        return { text: "You're close to your goal. Just a little more!", icon: TrendingUp };
      }
      return { text: "Keep moving! Every step counts.", icon: Goal };
    };
    
    const insight = getInsight();

    return (
        <>
            <Toaster />
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <div className="flex items-center space-x-2">
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="rounded-xl">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Daily Steps</CardTitle>
                            <LineChart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{steps.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">Goal: {goal.toLocaleString()}</p>
                            <div className="mt-2">
                                <Progress value={progressPercentage} className="h-2" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{calories} kcal</div>
                            <p className="text-xs text-muted-foreground">Today's total</p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Minutes</CardTitle>
                            <BellRing className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{activeMinutes} min</div>
                            <p className="text-xs text-muted-foreground">Today's total</p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                            <Check className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-2 mt-2">
                                {notifications.map((notif) => (
                                    <div key={notif.id} className="flex items-center space-x-2">
                                        <notif.icon className="h-4 w-4 text-blue-500" />
                                        <p className="text-sm">{notif.text}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4 rounded-xl">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>A log of your recent workouts.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="py-2 text-left">Date</th>
                                            <th className="py-2 text-left">Type</th>
                                            <th className="py-2 text-left">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activity.map((item, index) => (
                                            <tr key={index} className="border-b last:border-0">
                                                <td className="py-2 text-sm">{item.date}</td>
                                                <td className="py-2 text-sm">{item.type}</td>
                                                <td className="py-2 text-sm">{item.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-3 rounded-xl">
                        <CardHeader>
                            <CardTitle>Today's Insights</CardTitle>
                            <CardDescription>A quick look at your progress.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center space-x-4">
                            <div className="h-16 w-16 flex items-center justify-center">
                                <insight.icon className="h-12 w-12 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-lg font-bold">Great work!</p>
                                <p className="text-sm text-muted-foreground">{insight.text}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}