import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import Sidebar from "../components/SideBar";
import {
  Search,
  Filter,
  Download,
  Eye,
  FileText,
  Star,
  MoreHorizontal,
  Plus,
  Upload,
  SortAsc,
  Grid3x3,
  List,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Reports = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const reports = [
    {
      id: 1,
      title: "Complete Blood Count",
      date: "2024-01-15",
      type: "Lab Report",
      doctor: "Dr. Bhawhisya",
      status: "reviewed",
      category: "blood-test",
      priority: "high",
      fileSize: "2.4 MB",
      pages: 3,
      thumbnail: "🩸",
    },
    {
      id: 2,
      title: "Chest X-Ray",
      date: "2024-01-10",
      type: "Imaging",
      doctor: "Dr. Shrestha",
      status: "pending",
      category: "imaging",
      priority: "medium",
      fileSize: "5.1 MB",
      pages: 2,
      thumbnail: "🫁",
    },
    {
      id: 3,
      title: "Annual Physical Exam",
      date: "2024-01-05",
      type: "General",
      doctor: "Dr. Ghimire",
      status: "reviewed",
      category: "physical",
      priority: "low",
      fileSize: "1.8 MB",
      pages: 5,
      thumbnail: "🏥",
    },
    {
      id: 4,
      title: "Lipid Panel",
      date: "2024-01-03",
      type: "Lab Report",
      doctor: "Dr. Dibyanshu",
      status: "reviewed",
      category: "blood-test",
      priority: "medium",
      fileSize: "1.2 MB",
      pages: 2,
      thumbnail: "🧪",
    },
    {
      id: 5,
      title: "ECG Report",
      date: "2023-12-20",
      type: "Cardiac",
      doctor: "Dr. Ojha",
      status: "reviewed",
      category: "cardiac",
      priority: "high",
      fileSize: "3.7 MB",
      pages: 4,
      thumbnail: "❤️",
    },
    {
      id: 6,
      title: "MRI Brain Scan",
      date: "2023-12-15",
      type: "Imaging",
      doctor: "Dr. Sudip",
      status: "pending",
      category: "imaging",
      priority: "high",
      fileSize: "15.3 MB",
      pages: 8,
      thumbnail: "🧠",
    },
  ];

  const categories = [
    { id: "all", label: "All Reports", count: reports.length },
    { id: "blood-test", label: "Blood Tests", count: 2 },
    { id: "imaging", label: "Imaging", count: 2 },
    { id: "physical", label: "Physical Exams", count: 1 },
    { id: "cardiac", label: "Cardiac", count: 1 },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || report.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "reviewed":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const ReportCard = ({ report }) => (
    <Card className="p-6 hover:shadow-md transition-shadow bg-white border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl">
            {report.thumbnail}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{report.title}</h3>
            <p className="text-sm text-gray-500">{report.type}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-600"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Doctor:</span>
          <span className="text-gray-900">{report.doctor}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Date:</span>
          <span className="text-gray-900">
            {new Date(report.date).toLocaleDateString()}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Size:</span>
          <span className="text-gray-900">{report.fileSize}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
            report.status
          )}`}
        >
          {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
        </span>
        <div className="flex items-center space-x-1">
          <Star className={`w-4 h-4 ${getPriorityColor(report.priority)}`} />
          <span className={`text-xs ${getPriorityColor(report.priority)}`}>
            {report.priority.charAt(0).toUpperCase() + report.priority.slice(1)}
          </span>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
          <Eye className="w-4 h-4 mr-2" />
          View
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </Card>
  );

  const ReportListItem = ({ report }) => (
    <Card className="p-4 hover:shadow-sm transition-shadow bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-lg">
            {report.thumbnail}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{report.title}</h3>
            <p className="text-sm text-gray-500">
              {report.type} • {report.doctor}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <div className="text-right">
            <p className="text-gray-900">
              {new Date(report.date).toLocaleDateString()}
            </p>
            <p>{report.fileSize}</p>
          </div>

          <span
            className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
              report.status
            )}`}
          >
            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
          </span>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-green-600"
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-blue-600"
            >
              <Download className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sidebar />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Medical Reports
                </h1>
                <p className="text-gray-500">
                  Manage and view your health records
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
                <NavLink to="/add-record">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Record
              </Button>
              </NavLink>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="flex gap-6">
          <div className="w-64 space-y-6">
            <Card className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.label}</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Reports:</span>
                  <span className="text-gray-900 font-medium">
                    {reports.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pending Review:</span>
                  <span className="text-yellow-600 font-medium">
                    {reports.filter((r) => r.status === "pending").length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">This Month:</span>
                  <span className="text-green-600 font-medium">4</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search reports..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-80"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <SortAsc className="w-4 h-4 mr-2" />
                  Sort
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {filteredReports.length === 0 ? (
              <Card className="p-12 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No reports found
                </h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm
                    ? "Try adjusting your search terms."
                    : "Get started by adding your first medical report."}
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Report
                </Button>
              </Card>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {filteredReports.map((report) =>
                  viewMode === "grid" ? (
                    <ReportCard key={report.id} report={report} />
                  ) : (
                    <ReportListItem key={report.id} report={report} />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
