import Image from "next/image";
import PageTitle from "../components/pagetitle";
import DashboardOverview from "./dashboard/page";
import FitnessPage from "./dashboard/fitness/page";
import WeatherPage from "./dashboard/weather/page";
import NotesPage from "./dashboard/notes/page";
import SleepTrackerPage from "./dashboard/sleep/page";
import WaterReminderPage from "./dashboard/water/page";
import UserProfilePage from "./user/page";

export default function Home() {
  return (
    <div className="pt-0">
      <PageTitle title="Dashboard" />

      <div className="pt-5"></div>
      <section id="hero" className="min-h-[70vh] flex items-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="flex flex-col justify-center gap-6">
            <PageTitle title="Welcome to your personal dashboard" />


            <p className="text-lg text-muted-foreground max-w-xl">
              All your health & productivity tools in one place — glance at your weather, track sleep & water, take quick notes, and open the full dashboard to dive in.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 bg-primary text-primary-foreground font-semibold shadow hover:scale-[0.995] transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
              >
                Open Dashboard
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 bg-primary text-primary-foreground font-semibold shadow hover:scale-[0.995] transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
              >
                See Features
              </a>


              <button className="inline-flex items-center gap-2 rounded-md px-5 py-3 bg-primary text-primary-foreground font-semibold shadow hover:scale-[0.995] transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50">
                Quick add note
              </button>
            </div>


            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <li className="bg-muted py-2 px-3 rounded shadow-sm">Weather</li>
              <li className="bg-muted py-2 px-3 rounded shadow-sm">Notes</li>
              <li className="bg-muted py-2 px-3 rounded shadow-sm">Sleep</li>
              <li className="bg-muted py-2 px-3 rounded shadow-sm">Fitness</li>
              <li className="bg-muted py-2 px-3 rounded shadow-sm">Water</li>
              <li className="bg-muted py-2 px-3 rounded shadow-sm">Reminders</li>
            </ul>


            <div className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
                <div className="col-span-1 p-3 rounded-xl bg-card border border-border text-card-foreground shadow-sm">
                  <div className="text-xs font-semibold">Today</div>
                  <div className="mt-2 text-2xl font-bold">72°F</div>
                  <div className="text-xs text-muted-foreground mt-1"> Mostly sunny</div>
                </div>

                <div className="col-span-1 p-3 rounded-xl bg-card border border-border text-card-foreground shadow-sm">
                  <div className="text-xs font-semibold">Sleep</div>
                  <div className="mt-2 text-2xl font-bold">7h 12m</div>
                  <div className="text-xs text-muted-foreground mt-1">Last night</div>
                </div>

                <div className="col-span-1 p-3 rounded-xl bg-card border border-border text-card-foreground shadow-sm">
                  <div className="text-xs font-semibold">Water</div>
                  <div className="mt-2 text-2xl font-bold">1.6L</div>
                  <div className="text-xs text-muted-foreground mt-1">Goal 3L</div>
                </div>

                <div className="col-span-1 p-3 rounded-xl bg-card border border-border text-card-foreground shadow-sm">
                  <div className="text-xs font-semibold">Steps</div>
                  <div className="mt-2 text-2xl font-bold">8,450</div>
                  <div className="text-xs text-muted-foreground mt-1">Goal 10k</div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl p-4 bg-gradient-to-br from-white/60 to-primary/5 border border-border shadow-lg backdrop-blur-md">

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-semibold">PD</div>
                  <div>
                    <div className="text-sm font-medium">Personal Dashboard</div>
                    <div className="text-xs text-muted-foreground">Overview</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Updated • 10m</div>
              </div>


              <div className="space-y-3">
                <div className="rounded-lg p-3 bg-card border border-border">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Weekly Steps</div>
                    <div className="text-sm font-semibold">14.2k</div>
                  </div>
                  <svg width="100%" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                    <polyline points="0,30 20,24 40,20 60,12 80,14 100,6 120,12 140,8 160,4 180,10 200,6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-card border border-border text-card-foreground">
                    <div className="text-xs text-muted-foreground">Focus</div>
                    <div className="mt-2 font-semibold">3 sessions</div>
                  </div>
                  <div className="p-3 rounded-lg bg-card border border-border text-card-foreground">
                    <div className="text-xs text-muted-foreground">Notes</div>
                    <div className="mt-2 font-semibold"> Data saved</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-card border border-border text-card-foreground">
                    <div className="text-xs text-muted-foreground">Calories</div>
                    <div className="mt-2 font-semibold">1,250 kcal</div>
                  </div>
                  <div className="p-3 rounded-lg bg-card border border-border text-card-foreground">
                    <div className="text-xs text-muted-foreground">Mood</div>
                    <div className="mt-2 font-semibold">😊 Happy</div>
                  </div>
                </div>

                <div className="mt-1 text-xs text-muted-foreground">Tip: Click <span className="font-medium">Open Dashboard</span> to access full tools and history.</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Features</h2>

          <p className="text-sm text-muted-foreground max-w-3xl mb-6">
            Below is a quick tour of what each module provides and the kinds of data you can expect. Each card includes the typical fields you should implement in the module so nothing important is missed.
          </p>


        </div>
      </section>

      {/* ---------- DASHBOARD ---------- */}
      <section id="dashboard" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-card text-card-foreground rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            <DashboardOverview />
          </div>
        </div>
      </section>

      {/* Sub-sections */}

      <section id="weather" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <WeatherPage />
        </div>
      </section>

      <section id="notes" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <NotesPage />
        </div>
      </section>

      <section id="fitness" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FitnessPage />
        </div>
      </section>

      <section id="sleep" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">

          <SleepTrackerPage />
        </div>
      </section>

      <section id="water" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <WaterReminderPage />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-card text-card-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <p className="mt-3 text-muted-foreground">
            Questions?Reach out to me at {" "}
            <a className="underline" href="mailto:abcd@email.com">
              abcd@email.com
            </a>
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} jb. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#dashboard" className="hover:underline">
              Dashboard
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
