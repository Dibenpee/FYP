import { useState, forwardRef } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Eye,
  EyeOff,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Lock,
  Search,
  MapPin,
  CreditCard,
  FileText,
  Hash,
  DollarSign,
  Percent,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

// Base Field Component
const BaseField = forwardRef(
  (
    {
      label,
      error,
      helper,
      required,
      className = "",
      children,
      success,
      info,
      ...props
    },
    ref
  ) => {
    const fieldId =
      props.id || props.name || Math.random().toString(36).substr(2, 9);

    return (
      <div className={`space-y-2 ${className}`}>
        {label && (
          <Label
            htmlFor={fieldId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}

        <div className="relative">{children}</div>

        {/* Status Messages */}
        <div className="space-y-1">
          {error && (
            <div className="flex items-center space-x-1 text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs">{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center space-x-1 text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs">{success}</span>
            </div>
          )}

          {info && (
            <div className="flex items-center space-x-1 text-blue-600">
              <Info className="w-4 h-4" />
              <span className="text-xs">{info}</span>
            </div>
          )}

          {helper && !error && !success && !info && (
            <span className="text-xs text-gray-500">{helper}</span>
          )}
        </div>
      </div>
    );
  }
);

BaseField.displayName = "BaseField";

// Text Input Field
export const TextField = forwardRef(
  ({ icon: Icon, iconPosition = "left", ...props }, ref) => {
    const inputClasses = `
    ${Icon && iconPosition === "left" ? "pl-10" : ""}
    ${Icon && iconPosition === "right" ? "pr-10" : ""}
    ${
      props.error
        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
        : ""
    }
    ${
      props.success
        ? "border-green-300 focus:border-green-500 focus:ring-green-500"
        : ""
    }
  `;

    return (
      <BaseField {...props}>
        <div className="relative">
          {Icon && iconPosition === "left" && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          )}

          <Input ref={ref} className={inputClasses} {...props} />

          {Icon && iconPosition === "right" && (
            <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          )}
        </div>
      </BaseField>
    );
  }
);

TextField.displayName = "TextField";

// Password Field
export const PasswordField = forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BaseField {...props}>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />

        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className="pl-10 pr-10"
          {...props}
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4 text-gray-400" />
          ) : (
            <Eye className="w-4 h-4 text-gray-400" />
          )}
        </Button>
      </div>
    </BaseField>
  );
});

PasswordField.displayName = "PasswordField";

// Email Field
export const EmailField = forwardRef((props, ref) => {
  return (
    <TextField
      ref={ref}
      type="email"
      icon={Mail}
      placeholder="Enter your email address"
      {...props}
    />
  );
});

EmailField.displayName = "EmailField";

// Phone Field
export const PhoneField = forwardRef((props, ref) => {
  return (
    <TextField
      ref={ref}
      type="tel"
      icon={Phone}
      placeholder="Enter your phone number"
      {...props}
    />
  );
});

PhoneField.displayName = "PhoneField";

// Search Field
export const SearchField = forwardRef((props, ref) => {
  return (
    <TextField
      ref={ref}
      type="search"
      icon={Search}
      placeholder="Search..."
      {...props}
    />
  );
});

SearchField.displayName = "SearchField";

// Date Field
export const DateField = forwardRef((props, ref) => {
  return <TextField ref={ref} type="date" icon={Calendar} {...props} />;
});

DateField.displayName = "DateField";

// Time Field
export const TimeField = forwardRef((props, ref) => {
  return <TextField ref={ref} type="time" icon={Clock} {...props} />;
});

TimeField.displayName = "TimeField";

// Number Field
export const NumberField = forwardRef(
  ({ min, max, step, currency, percentage, ...props }, ref) => {
    const icon = currency ? DollarSign : percentage ? Percent : Hash;

    return (
      <TextField
        ref={ref}
        type="number"
        min={min}
        max={max}
        step={step}
        icon={icon}
        {...props}
      />
    );
  }
);

NumberField.displayName = "NumberField";

// Select Field
export const SelectField = forwardRef(
  ({ options = [], placeholder = "Select an option", ...props }, ref) => {
    const selectClasses = `
    w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500
    ${
      props.error
        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
        : ""
    }
    ${
      props.success
        ? "border-green-300 focus:border-green-500 focus:ring-green-500"
        : ""
    }
  `;

    return (
      <BaseField {...props}>
        <select ref={ref} className={selectClasses} {...props}>
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
      </BaseField>
    );
  }
);

SelectField.displayName = "SelectField";

// Textarea Field
export const TextareaField = forwardRef(({ rows = 4, ...props }, ref) => {
  const textareaClasses = `
    w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none
    ${
      props.error
        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
        : ""
    }
    ${
      props.success
        ? "border-green-300 focus:border-green-500 focus:ring-green-500"
        : ""
    }
  `;

  return (
    <BaseField {...props}>
      <textarea ref={ref} rows={rows} className={textareaClasses} {...props} />
    </BaseField>
  );
});

TextareaField.displayName = "TextareaField";

// Medical-specific Fields

// Medical ID Field
export const MedicalIdField = forwardRef((props, ref) => {
  return (
    <TextField
      ref={ref}
      icon={CreditCard}
      placeholder="Enter medical ID"
      {...props}
    />
  );
});

MedicalIdField.displayName = "MedicalIdField";

// Doctor Name Field
export const DoctorNameField = forwardRef((props, ref) => {
  return (
    <TextField
      ref={ref}
      icon={User}
      placeholder="Enter doctor's name"
      {...props}
    />
  );
});

DoctorNameField.displayName = "DoctorNameField";

// Address Field
export const AddressField = forwardRef((props, ref) => {
  return (
    <TextField ref={ref} icon={MapPin} placeholder="Enter address" {...props} />
  );
});

AddressField.displayName = "AddressField";

// Medical Notes Field
export const MedicalNotesField = forwardRef((props, ref) => {
  return (
    <TextareaField
      ref={ref}
      placeholder="Enter medical notes or observations..."
      rows={6}
      {...props}
    />
  );
});

MedicalNotesField.displayName = "MedicalNotesField";

// Field Group Component
export const FieldGroup = ({ title, children, className = "" }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
};

// Medical Form Fields Component
export const MedicalFormFields = ({ className = "" }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <FieldGroup title="Personal Information">
        <TextField
          label="Full Name"
          name="fullName"
          icon={User}
          placeholder="Enter your full name"
          required
        />

        <EmailField label="Email Address" name="email" required />

        <PhoneField label="Phone Number" name="phone" required />

        <DateField label="Date of Birth" name="dateOfBirth" required />
      </FieldGroup>

      <FieldGroup title="Medical Information">
        <MedicalIdField label="Medical ID" name="medicalId" />

        <DoctorNameField label="Primary Doctor" name="primaryDoctor" />

        <SelectField
          label="Blood Type"
          name="bloodType"
          options={[
            { value: "A+", label: "A+" },
            { value: "A-", label: "A-" },
            { value: "B+", label: "B+" },
            { value: "B-", label: "B-" },
            { value: "AB+", label: "AB+" },
            { value: "AB-", label: "AB-" },
            { value: "O+", label: "O+" },
            { value: "O-", label: "O-" },
          ]}
        />

        <SelectField
          label="Insurance Provider"
          name="insurance"
          options={[
            "Blue Cross Blue Shield",
            "Aetna",
            "Cigna",
            "UnitedHealth",
            "Kaiser Permanente",
            "Other",
          ]}
        />
      </FieldGroup>

      <div>
        <MedicalNotesField
          label="Additional Medical Notes"
          name="medicalNotes"
          helper="Include any allergies, current medications, or medical conditions"
        />
      </div>
    </div>
  );
};

export default TextField;
