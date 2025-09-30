
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription,CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

export default function WaterReminderPage() {
  const [glassesDrank, setGlassesDrank] = useState(0);
  const goal = 8;
  const progressValue = (glassesDrank / goal) * 100;

  const handleLogDrink = () => {
    if (glassesDrank < goal) {
      setGlassesDrank(glassesDrank + 1);
      toast('Water logged!', {
        description: `You've had ${glassesDrank + 1} of ${goal} glasses.`,
      });
    } else {
      toast('Goal Reached!', {
        description: "You've completed your daily water goal!",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-full p-6">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Water Reminder</CardTitle>
          <CardDescription>Stay hydrated!</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-8xl">💧</span>
            <div className="text-center">
              <h2 className="text-6xl font-bold">{glassesDrank} / {goal}</h2>
              <p className="text-muted-foreground">Glasses consumed</p>
            </div>
          </div>
          <Progress value={progressValue} className="h-6" />
          <Button onClick={handleLogDrink} className="mt-4">
            Log a Glass of Water
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}