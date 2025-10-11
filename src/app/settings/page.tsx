
"use client";
import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

export default function SettingsPage() {
  const handleSaveChanges = () => {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const email = emailInput?.value;
  
    if (!email || email.trim() === '') {
      toast.error("Error! Email cannot be empty.");
      return;
    }
    
    toast.success("Changes saved successfully!");
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Toaster position="top-right" richColors />
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      
        <Card className="rounded-xl col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Manage your personal and account information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input id="name" defaultValue="" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="abcd@email.com" />
            </div>
          </CardContent>
        </Card>

    
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Configure how you receive notifications.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Daily Reminders</Label>
              <Switch id="notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Alerts</Label>
              <Switch id="email-notifications" />
            </div>
          </CardContent>
        </Card>

      
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>Customize the app appearance.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Theme is controlled by the toggle on your sidebar.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>
    </div>
  );
}