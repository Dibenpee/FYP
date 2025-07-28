import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import vitalife from "../assets/vitalife.svg";
import {
  FileText,
  UserPlus,
  LogIn,
  LayoutDashboard,
  Plus,
  Smartphone,
  BarChart3,
} from "lucide-react";

const HomePage = () => {
  const demoPages = [
    {
      title: "Dashboard",
      description: "Comprehensive health overview with stats and insights",
      href: "/dashboard",
      icon: LayoutDashboard,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Medical Reports",
      description: "View and manage all your health documents",
      href: "/reports",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Add Records",
      description: "Upload new medical records and documents",
      href: "/add-record",
      icon: Plus,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="flex justify-center pt-12">
        <div className="flex items-center space-x-3 mt-40">
          <img src={vitalife} alt="VitaLife logo" className="w-24 h-auto" />
          <h1 className="text-9xl font-bold text-gray-900">
            Vita<span className="text-green-600">Life</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-44">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Health Records,
            <br />
            <span className="text-green-600">Securely Organized</span>
          </h2>
        </div>
        <div className="w-full max-w-md space-y-4 mb-16">
          <Link to="/register" className="block">
            <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <UserPlus className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </Link>

          <div className="text-center py-3">
            <span className="text-gray-500">Already have an account?</span>
          </div>

          <Link to="/login" className="block">
            <Button
              variant="outline"
              className="w-full h-14 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold text-lg rounded-2xl transition-all duration-300"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </Button>
          </Link>
        </div>

        <div className="w-full max-w-6xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Explore the Application
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoPages.map((page, index) => (
              <Link key={index} to={page.href} className="block group">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${page.color}`}
                  >
                    <page.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {page.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Mobile Responsive
            </h3>
            <p className="text-gray-600">
              Access your health records anytime from any device
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Smart Analytics
            </h3>
            <p className="text-gray-600">
              AI-powered insights and health trend analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
