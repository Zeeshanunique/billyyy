"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';
import { Shield, Users, Activity, TrendingUp, MapPin } from 'lucide-react';
import { DateRange } from "react-day-picker";
import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"

const mockTimeData = [
  { month: 'Jan', incidents: 65 }, { month: 'Feb', incidents: 59 },
  { month: 'Mar', incidents: 80 }, { month: 'Apr', incidents: 81 },
  { month: 'May', incidents: 56 }, { month: 'Jun', incidents: 55 },
];

const incidentTypes = [
  { name: 'Harassment', value: 400 },
  { name: 'Threats', value: 300 },
  { name: 'Identity Theft', value: 200 },
  { name: 'Cyberstalking', value: 150 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const cityData = [
  { city: 'Mumbai', incidents: 245, resolved: 180 },
  { city: 'Delhi', incidents: 320, resolved: 250 },
  { city: 'Bangalore', incidents: 190, resolved: 150 },
  { city: 'Chennai', incidents: 170, resolved: 130 },
  { city: 'Kolkata', incidents: 210, resolved: 160 },
];

// Move DateRangePicker inside the file and use as a component
function DateRangePicker({
  className,
  date,
  setDate,
}: {
  className?: string
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

// Make this the default export
export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date()
  });

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Cyberbullying Analytics</h1>
        <DateRangePicker date={dateRange} setDate={setDateRange} />
      </div>

      {/* Rest of the code remains the same */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        {/* Other cards remain the same */}
        {/* ... */}
      </div>

      {/* Charts Section */}
      <Tabs defaultValue="trends" className="space-y-6">
        {/* Tabs content remains the same */}
        {/* ... */}
      </Tabs>
    </div>
  );
}   