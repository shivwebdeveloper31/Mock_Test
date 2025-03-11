import { useState } from "react";

const tabs = [
  { id: 1, label: "Home", content: "This is the Home content.", icons: [
    { title: "Dashboard", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Overview", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "News", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Updates", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Trends", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Analysis", icon: "https://via.placeholder.com/40", link: "#" }
  ]},
  { id: 2, label: "Profile", content: "This is the Profile content.", icons: [
    { title: "User Info", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Settings", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Privacy", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Security", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Connections", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Activity", icon: "https://via.placeholder.com/40", link: "#" }
  ]},
  { id: 3, label: "Settings", content: "This is the Settings content.", icons: [
    { title: "Preferences", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Account", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Billing", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Subscriptions", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Notifications", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Support", icon: "https://via.placeholder.com/40", link: "#" }
  ]},
  { id: 4, label: "Help", content: "This is the Help content.", icons: [
    { title: "FAQs", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Contact", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Guides", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Community", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Support", icon: "https://via.placeholder.com/40", link: "#" },
    { title: "Feedback", icon: "https://via.placeholder.com/40", link: "#" }
  ]}
];

function TabBar() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
        <div className="p-10 text-center font-semibold text-black-500">
        <h2>Free Mock Test For Popular Exam</h2>
        </div>
    <div className="flex h-screen p-4">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-300 p-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer p-3 rounded-lg text-lg font-medium transition-all 
                ${activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-10 mb-10 grid grid-cols-4">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <>
              {tab.icons.map((box, index) => (
                <a key={index} href={box.link} className="p-2 bg-gray-200 rounded-md shadow-md text-center flex flex-wrap content-start items-center w-28 h-24 hover:bg-gray-300 transition">
                  <img src={box.icon} alt={box.title} className="w-10 h-10 mb-2" />
                  <span className="text-xs font-semibold text-blue-500">{box.title}</span>
                </a>
              ))}
            </>
          )
        ))}
      </div>
    </div>
    </div>
  );
}

export default TabBar;
