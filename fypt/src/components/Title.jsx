
const MainTitle = ({ title = "h1", className = "" }) => {
  const getTextSize = (variant) => {
    switch (variant) {
      case "h1":
        return "text-4xl";
      case "h2":
        return "text-3xl";
      case "h3":
        return "text-2xl";
      case "h4":
        return "text-xl";
      case "h5":
        return "text-lg";
      case "h6":
        return "text-base";
      default:
        return "text-2xl";
    }
  };

  return (
    <div className={`flex justify-between items-center p-4 ${className}`}>
      <h1 className={`${getTextSize(title)} font-bold`}>VitaLife</h1>
    </div>
  );
};

export default MainTitle;
