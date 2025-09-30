
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const recentActivities = [
  { date: 'Sep 18', type: 'Running', duration: '30 min' },
  { date: 'Sep 17', type: 'Weightlifting', duration: '45 min' },
  { date: 'Sep 16', type: 'Walking', duration: '60 min' },
];

export default function FitnessPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7,543</div>
            <p className="text-sm text-muted-foreground">Goal: 10,000</p>
            <Progress value={75.43} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Calories Burned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">520 kcal</div>
            <p className="text-sm text-muted-foreground">Today's total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Minutes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">95 min</div>
            <p className="text-sm text-muted-foreground">Today's total</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>A log of your recent workouts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{activity.date}</TableCell>
                  <TableCell>{activity.type}</TableCell>
                  <TableCell>{activity.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}