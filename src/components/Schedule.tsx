export default function WebinarPage() {
  const schedule = [
    { time: "08:00 PM", title: "Introduction" },
    { time: "08:05 PM", title: "Topic 01" },
    { time: "08:20 PM", title: "Topic 02" },
    { time: "08:35 PM", title: "Topic 03" },
    { time: "08:50 PM", title: "Q&A Session" },
    { time: "09:00 PM", title: "Webinar Ends" },
  ];

  return (
    <div className="min-h-screen bg-white flex px-10 py-20 font-sans text-gray-800">
      
      {/* Left Side */}
      <div className="w-1/2 pr-16">
        <h1 className="text-4xl font-bold mb-6">
          Webinar <span className="text-teal-400">Schedule</span>
        </h1>
        <p className="mb-4">
          This schedule provides a clear overview of the key sessions and topics covered during the webinar.
        </p>
        <p className="mb-6">
          It outlines the flow of the event, including the introduction, main learning modules, interactive discussions,
          and Q&A segments. Each part is designed to help participants gain a better understanding.
        </p>
        <button className="mt-4 px-6 py-3 rounded-full bg-black text-white shadow-md hover:opacity-90">
          Register Now
        </button>
      </div>

      {/* Right Side without center line */}
      <div className="w-1/2 pl-10 flex flex-col gap-8">
        {schedule.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Time pill */}
            <div className="bg-teal-400 text-white text-sm font-bold px-4 py-1 rounded-full min-w-[90px] text-center">
              {item.time}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              {(item.title.includes("Topic") || item.title.includes("Q&A")) && (
                <p className="text-sm mt-1 text-gray-600">
                  The webinar showed examples like voice assistants, recommendation systems (like Netflix).
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
