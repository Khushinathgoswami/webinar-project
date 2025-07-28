// app/components/WebinarPage.jsx
import styles from "./Schedule.module.css";

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
    <div className={styles.webinarPage}>
      {/* Left Section */}
      <div className={styles.webinarLeft}>
        <h1 className={styles.webinarTitle}>
          Webinar Schedule
        </h1>
        <p className={`${styles.webinarParagraph} ${styles.mb30}`}>
          This schedule provides a clear overview of the key sessions and topics covered during the webinar.
        </p>
        <p className={`${styles.webinarParagraph} ${styles.mb44}`}>
          It outlines the flow of the event, including the introduction, main learning modules, interactive discussions,
          and Q&A segments. Each part is designed to help participants gain a better understanding.
        </p>
        <button className={styles.webinarButton}>Register Now</button>
      </div>

      {/* Right Section */}
      <div className={styles.webinarRight}>
        {schedule.map((item, index) => (
          <div key={index} className={styles.scheduleItem}>
            <div className={styles.timePill}>{item.time}</div>
            <div className="flex-1">
              <div className={styles.scheduleTitle}>{item.title}</div>
              {(item.title.includes("Topic") || item.title.includes("Q&A")) && (
                <p className={`${styles.scheduleDescription} ${styles.w400}`} >
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
