
import styles from "./page.module.css"
export default function HomePage() {
  return (
    <section >
      <header className={`${styles.background} ${styles.pt40} ${styles.pb40} ${styles.pl40} ${styles.pr40} ${styles.mb60}`}>
      <div className={`${styles.display} ${styles.jcsb} ${styles.al} ${styles.mb60} `}>
        <div className="left">
          <h1 className={styles.color}>Vidyamath.com</h1>
        </div>
        <div className="right">
          
        </div>
        
      </div>
      <div className={`${styles.font} ${styles.color} ${styles.mb20} ${styles.fw700} ${styles.l1}`}>
          <h1>AI & Machine <br/> Learning <span className={styles.c1DE9B6}>Webinar</span></h1>
        </div>
       <div className={`${styles.display} ${styles.color} ${styles.g20} ${styles.f20} ${styles.mb60}`}>
        <div className="left">
          22-July-2025
        </div>
        <div className="right">
          8:00 PM
        </div>
       </div>
    
        
     
       </header>
 <main>
  <div className={`${styles.pl40} ${styles.pr40} ${styles.mb60}`}>
    <div className={`${styles.tac} ${styles.f48} ${styles.f7900} ${styles.mb60}`}>
       <h1>Why You Should <br/> Join This Webinar?</h1>
    </div>
    <div className={`${styles.display} ${styles.g80}`}>
      <div className={styles.box}></div>
      <div className={styles.box2}></div>
      <div className={`${styles.w286} ${styles.display} ${styles.g20} ${styles.fcl}`}>
        <div className="content">
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw500}`}>What is Artificial Intelligence? </h1>
          <p className={` ${styles.f16} ${styles.lh1}`}>I learned that AI is a technology that allows machines to simulate human thinking, like learning, problem-solving, and decision-making.</p>
        </div>
        <div className="content">
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw500}`}>What is Machine Learning? </h1>
          <p className={` ${styles.f16} ${styles.lh1}`}>ML is a branch of AI that enables computers to learn from data and improve automatically.</p>
        </div>
        <div className="content">
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw500}`}>How AI/ML is Used in Real Life</h1>
          <p className={` ${styles.f16} ${styles.lh1}`}>The webinar showed examples like voice assistants, recommendation systems (like Netflix).</p>
        </div>
      </div>
    </div>

  </div>
 </main>

<div className={`${styles.bc111C26} ${styles.pr40} ${styles.pl40} ${styles.pt40}`}>
<div className="heading">
<div className={`${styles.color}`}>
  <h1 className={`${styles.f48}`}>Webinar Start In</h1>
</div>
<div className="box">
  <h2>02</h2>
  <span>Days</span>
</div>
</div>
</div>
    </section>

   
  );
  
  }