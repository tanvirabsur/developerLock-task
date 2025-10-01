import React from 'react';

// ফেক ডেটা ব্যবহার করা হয়েছে যা আগের আলোচনা থেকে নেওয়া হয়েছে
const FAKE_LISTING_DATA = {
  property_details: {
    guest_capacity: 3,
  },
  booking_rules: {
    cancellation_policy: "Moderate",
  },
  safety_details: {
    smoke_alarm: true,
    carbon_monoxide_alarm: false, // "not reported" বোঝাতে false ব্যবহার করা হলো
  }
};

const ThingsToKnow = () => {
  const { property_details, safety_details } = FAKE_LISTING_DATA;
  
  // House Rules ডেটা
  const houseRules = [
    { label: "Check-in", value: "3:00 PM - 11:00 PM" },
    { label: "Checkout", value: "before 12:00 PM" },
    { label: "Guests", value: `${property_details.guest_capacity} guests maximum` },
  ];

  // Safety & Property ডেটা
  const safetyProperty = [
    { label: "Carbon monoxide alarm", value: safety_details.carbon_monoxide_alarm ? "Reported" : "Not reported" },
    { label: "Smoke alarm", value: safety_details.smoke_alarm ? "Available" : "Not available" },
  ];

  // Cancellation Policy ডেটা
  const cancellationPolicy = [
    { label: "Reservation status", value: "This reservation is non-refundable." },
    { label: "Policy detail", value: `Review this Host's full policy for details.` },
  ];

  const Section = ({ title, items, showMoreText = "Show more" }) => (
    <div className="flex-1 min-w-[280px] mt-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-4">{title}</h3>
      <div className="space-y-4 text-sm text-gray-600">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-gray-900 font-medium">{item.label}: {item.value}</span>
            {/* item.description থাকলে ব্যবহার করা যেত */}
          </div>
        ))}
      </div>
      {/* শুধুমাত্র প্রথম সেকশনের জন্য 'Show more' বাটন */}
      {showMoreText && (
        <a href="#" className="mt-4 inline-block font-semibold text-sm text-gray-900 underline hover:no-underline">
          {showMoreText} &gt;
        </a>
      )}
    </div>
  );

  return (
    <div className="p-6 md:p-10 border-t border-gray-200" id="things-to-know-section">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Things to know (জানার বিষয়)
      </h2>
      
      <div className="flex flex-col md:flex-row md:space-x-12">
        
        {/* House Rules Section */}
        <Section 
          title="House rules (বাড়ির নিয়ম)" 
          items={houseRules} 
          showMoreText="Show more"
        />

        {/* Safety & Property Section */}
        <Section 
          title="Safety & property (নিরাপত্তা ও সম্পত্তি)" 
          items={safetyProperty} 
          showMoreText="Show more"
        />

        {/* Cancellation Policy Section */}
        <Section 
          title="Cancellation policy (বাতিলকরণ নীতি)" 
          items={cancellationPolicy} 
          // এখানে 'Review this Host's full policy for details' already আছে, তাই আলাদা Show more দরকার নেই
          showMoreText="Show more"
        />
      </div>

    </div>
  );
};

// অ্যাপ কম্পোনেন্ট, যা উপরে তৈরি করা কম্পোনেন্টটিকে ব্যবহার করবে
const ThingsKnow = () => {
  return (
    <div className="font-sans antialiased bg-white min-h-screen">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ThingsToKnow />
      </div>
    </div>
  );
};

export default ThingsKnow;
