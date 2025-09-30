// src/app/dashboard/sleep-tracker/page.tsx
"use client";
import { useState } from 'react'; // <--- Import useState
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input'; // <--- Import Input
import { Label } from '@/components/ui/label'; // <--- Import Label

export default function SleepTrackerPage() {
  const [hoursSlept, setHoursSlept] = useState(7.5); // <--- Use state
  const goal = 8;
  const progressValue = (hoursSlept / goal) * 100;

  return (
    <div className="flex justify-center items-center h-full p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl">Sleep Tracker</CardTitle>
          <CardDescription>Monitor and log your sleep habits.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="text-8xl">😴</span>
            <div className="text-center">
              <h2 className="text-5xl font-bold">{hoursSlept}h</h2>
              <p className="text-muted-foreground">Last night's sleep duration</p>
            </div>
          </div>
          <div className="mt-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">Daily Goal</span>
                <span className="text-lg font-bold">{goal} hours</span>
              </div>
              <Progress value={progressValue} className="w-full" />
              {/* --- New Interactive Input --- */}
              <div className="space-y-2">
                <Label htmlFor="hoursSlept">Log hours slept last night</Label>
                <Input
                  id="hoursSlept"
                  type="number"
                  step="0.1"
                  value={hoursSlept}
                  onChange={(e) => setHoursSlept(parseFloat(e.target.value))}
                />
              </div>
              {/* --------------------------- */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-md border text-center">
                  <p className="text-sm font-medium">Bedtime</p>
                  <p className="text-lg font-bold">11:00 PM</p>
                </div>
                <div className="p-4 rounded-md border text-center">
                  <p className="text-sm font-medium">Wake-up</p>
                  <p className="text-lg font-bold">6:30 AM</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}