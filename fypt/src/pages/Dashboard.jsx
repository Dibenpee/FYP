import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import Sidebar from "../components/SideBar";
import vitalife from "../assets/vitalife.svg";
import {
  Bell,
  Calendar,
  FileText,
  Plus,
  Activity,
  Shield,
  Download,
  Eye,
  TrendingUp,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [recentReports] = useState([
    {
      id: 1,
      name: "Blood Test Results",
      date: "2024-01-15",
      type: "Lab Report",
      status: "Complete",
    },
    {
      id: 2,
      name: "Chest X-Ray",
      date: "2024-01-10",
      type: "Imaging",
      status: "Complete",
    },
    {
      id: 3,
      name: "Annual Checkup",
      date: "2024-01-05",
      type: "General",
      status: "Complete",
    },
  ]);

  const [upcomingAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Dibyanshu Ojha",
      specialty: "Cardiology",
      date: "2024-01-25",
      time: "10:00 AM",
    },
    {
      id: 2,
      doctor: "Dr. Sudip Ghimire",
      specialty: "Dermatology",
      date: "2024-01-28",
      time: "2:30 PM",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Sidebar />
            <div className="flex items-center space-x-2">
              <img src={vitalife} alt="VitaLife" className="w-8 h-8" />
              <h1 className="text-xl font-bold text-gray-900">
                Vita<span className="text-green-600">Life</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-green-600">User</span>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, User!
            </h2>
            <p className="text-gray-600">
              Here's your health dashboard overview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Reports
                    </p>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Upcoming Visits
                    </p>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Health Score
                    </p>
                    <p className="text-2xl font-bold text-gray-900">N/A</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Storage Used
                    </p>
                    <p className="text-2xl font-bold text-gray-900">N/A</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Reports</CardTitle>
                  <NavLink to={"/add-record"}>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Report
                    </Button>
                  </NavLink>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.map((report) => (
                      <div
                        key={report.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {report.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {report.type} • {report.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="p-4 bg-green-50 rounded-lg"
                      >
                        <p className="font-medium text-gray-900">
                          {appointment.doctor}
                        </p>
                        <p className="text-sm text-gray-600">
                          {appointment.specialty}
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Health Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">
                          Blood Pressure Trend
                        </p>
                        <p className="text-xs text-gray-500">Improving</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Activity className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium">Regular Checkups</p>
                        <p className="text-xs text-gray-500">
                          Due for annual physical checkup
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
