import { useState, useEffect } from "react";

const ProgressBar = ({
  value = 0,
  max = 100,
  size = "medium",
  variant = "default",
  showPercentage = true,
  animated = false,
  label,
  className = "",
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const percentage = Math.min(Math.max((displayValue / max) * 100, 0), 100);

  const sizeClasses = {
    small: "h-2",
    medium: "h-3",
    large: "h-4",
    xl: "h-6",
  };

  const variantClasses = {
    default: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    danger: "bg-red-600",
    info: "bg-cyan-600",
    health: "bg-gradient-to-r from-green-500 to-blue-500",
  };

  const backgroundClasses = {
    default: "bg-blue-100",
    success: "bg-green-100",
    warning: "bg-yellow-100",
    danger: "bg-red-100",
    info: "bg-cyan-100",
    health: "bg-gray-200",
  };

  const getHealthStatus = (percentage) => {
    if (percentage >= 90) return { text: "Excellent", color: "text-green-600" };
    if (percentage >= 80) return { text: "Very Good", color: "text-green-500" };
    if (percentage >= 70) return { text: "Good", color: "text-blue-600" };
    if (percentage >= 60) return { text: "Fair", color: "text-yellow-600" };
    if (percentage >= 40) return { text: "Poor", color: "text-orange-600" };
    return { text: "Critical", color: "text-red-600" };
  };

  const healthStatus =
    variant === "health" ? getHealthStatus(percentage) : null;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && (
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900">
                {Math.round(percentage)}%
              </span>
              {healthStatus && (
                <span className={`text-xs font-medium ${healthStatus.color}`}>
                  {healthStatus.text}
                </span>
              )}
            </div>
          )}
        </div>
      )}

      <div
        className={`w-full ${backgroundClasses[variant]} rounded-full ${sizeClasses[size]} overflow-hidden`}
      >
        <div
          className={`${sizeClasses[size]} ${
            variantClasses[variant]
          } rounded-full transition-all duration-500 ease-out ${
            animated ? "animate-pulse" : ""
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {!label && showPercentage && (
        <div className="mt-2 text-center">
          <span className="text-sm font-semibold text-gray-900">
            {Math.round(percentage)}%
          </span>
          {healthStatus && (
            <span className={`ml-2 text-xs font-medium ${healthStatus.color}`}>
              {healthStatus.text}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// Health Score Progress Component
export const HealthScoreProgress = ({ score = 0, className = "" }) => {
  return (
    <div className={`p-4 bg-white rounded-lg border ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Health Score</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-500">Active</span>
        </div>
      </div>

      <ProgressBar
        value={score}
        variant="health"
        size="large"
        animated
        showPercentage={false}
      />

      <div className="mt-3 flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900">{score}%</span>
        <span className="text-sm text-green-600 font-medium">
          +5% this month
        </span>
      </div>
    </div>
  );
};

// Multiple Progress Bars for Health Metrics
export const HealthMetricsProgress = ({ metrics = [], className = "" }) => {
  const defaultMetrics = [
    { label: "Blood Pressure", value: 85, variant: "success" },
    { label: "Cholesterol", value: 72, variant: "warning" },
    { label: "Blood Sugar", value: 90, variant: "success" },
    { label: "BMI", value: 78, variant: "info" },
    { label: "Heart Rate", value: 88, variant: "success" },
  ];

  const displayMetrics = metrics.length > 0 ? metrics : defaultMetrics;

  return (
    <div className={`p-4 bg-white rounded-lg border ${className}`}>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Health Metrics
      </h3>
      <div className="space-y-4">
        {displayMetrics.map((metric, index) => (
          <ProgressBar
            key={index}
            label={metric.label}
            value={metric.value}
            variant={metric.variant}
            size="medium"
            animated
          />
        ))}
      </div>
    </div>
  );
};

export const CircularProgress = ({
  value = 0,
  max = 100,
  size = 120,
  strokeWidth = 8,
  variant = "default",
  showPercentage = true,
  label,
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const offset = circumference - (percentage / 100) * circumference;

  const variantColors = {
    default: "#3B82F6",
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
    health: "#16A34A",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={variantColors[variant]}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {showPercentage && (
            <span className="text-2xl font-bold text-gray-900">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      </div>

      {label && (
        <span className="mt-2 text-sm font-medium text-gray-700 text-center">
          {label}
        </span>
      )}
    </div>
  );
};

export { ProgressBar };
