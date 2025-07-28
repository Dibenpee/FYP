import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Sidebar from "../components/SideBar";
import {
  Upload,
  FileText,
  Calendar,
  Stethoscope,
  Tag,
  AlertCircle,
  X,
  Check,
  FolderOpen,
  Save,
  RotateCcw,
} from "lucide-react";

const AddRecords = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    doctor: "",
    category: "",
    description: "",
    priority: "medium",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const recordTypes = [
    { value: "lab-report", label: "Lab Report", icon: "🧪" },
    { value: "imaging", label: "Medical Imaging", icon: "📷" },
    { value: "prescription", label: "Prescription", icon: "💊" },
    { value: "physical-exam", label: "Physical Exam", icon: "🏥" },
    { value: "specialist-report", label: "Specialist Report", icon: "👨‍⚕️" },
    { value: "vaccination", label: "Vaccination Record", icon: "💉" },
    { value: "surgery", label: "Surgery Report", icon: "🔬" },
    { value: "other", label: "Other", icon: "📄" },
  ];

  const categories = [
    { value: "cardiology", label: "Cardiology" },
    { value: "dermatology", label: "Dermatology" },
    { value: "endocrinology", label: "Endocrinology" },
    { value: "gastroenterology", label: "Gastroenterology" },
    { value: "neurology", label: "Neurology" },
    { value: "oncology", label: "Oncology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "psychiatry", label: "Psychiatry" },
    { value: "radiology", label: "Radiology" },
    { value: "general", label: "General Medicine" },
  ];

  const priorityOptions = [
    { value: "low", label: "Low", color: "text-green-600 bg-green-100" },
    {
      value: "medium",
      label: "Medium",
      color: "text-yellow-600 bg-yellow-100",
    },
    { value: "high", label: "High", color: "text-red-600 bg-red-100" },
    { value: "urgent", label: "Urgent", color: "text-red-700 bg-red-200" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const validFiles = files.filter((file) => {
      const validTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/jpg",
      ];
      const maxSize = 10 * 1024 * 1024; // 10MB
      return validTypes.includes(file.type) && file.size <= maxSize;
    });

    const newFiles = validFiles.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Files:", uploadedFiles);
  };

  const handleReset = () => {
    setFormData({
      title: "",
      type: "",
      date: "",
      doctor: "",
      category: "",
      description: "",
      priority: "medium",
    });
    setUploadedFiles([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sidebar />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Add Medical Record
                </h1>
                <p className="text-gray-500">
                  Upload and organize your health documents
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={handleSubmit}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Record
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Record Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="title"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Record Title *
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Blood Test Results"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="type"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Record Type *
                  </Label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select record type</option>
                    {recordTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.icon} {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label
                    htmlFor="date"
                    className="text-sm font-medium text-gray-700 mb-2 block">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Record Date *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="doctor"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    <Stethoscope className="w-4 h-4 inline mr-1" />
                    Healthcare Provider
                  </Label>
                  <Input
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    placeholder="e.g., Dr. John Smith"
                    className="w-full"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    <Tag className="w-4 h-4 inline mr-1" />
                    Medical Category
                  </Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label
                    htmlFor="priority"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Priority Level
                  </Label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    {priorityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <Label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Description / Notes
                </Label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Add any additional notes or description about this record..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Upload className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Upload Files
                </h2>
              </div>

              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Drag and drop your files here
                    </h3>
                    <p className="text-gray-500 mb-4">
                      or click to browse your computer
                    </p>

                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileInput}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button
                        type="button"
                        variant="outline"
                        className="cursor-pointer"
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        Choose Files
                      </Button>
                    </label>
                  </div>

                  <div className="text-xs text-gray-400">
                    Supported formats: PDF, JPG, PNG • Max size: 10MB per file
                  </div>
                </div>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">
                    Uploaded Files ({uploadedFiles.length})
                  </h3>
                  <div className="space-y-3">
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          {file.preview ? (
                            <img
                              src={file.preview}
                              alt={file.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-6 h-6 text-red-600" />
                            </div>
                          )}

                          <div>
                            <p className="font-medium text-gray-900">
                              {file.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="flex items-center text-green-600">
                            <Check className="w-4 h-4 mr-1" />
                            <span className="text-xs">Ready</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFile(file.id)}
                            className="text-gray-400 hover:text-red-600"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {formData.priority === "urgent" && (
              <Card className="p-4 bg-red-50 border-red-200">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <div>
                    <h3 className="font-semibold text-red-800">
                      Urgent Record
                    </h3>
                    <p className="text-sm text-red-700">
                      This record is marked as urgent. Please ensure all
                      information is accurate and complete.
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecords;
