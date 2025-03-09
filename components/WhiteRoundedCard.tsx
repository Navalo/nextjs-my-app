import React from "react";

const WhiteRoundedCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm min-h-[80vh] bg-white rounded-3xl shadow-lg border border-gray-100 flex p-2">
        {/* Scrollable Content */}
        <div className="w-full min-h-[70vh] max-h-[70vh] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-auto p-2 flex-grow">
          {/* content */}
        </div>
      </div>
    </div>
  );
};

export default WhiteRoundedCard;
