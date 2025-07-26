
import Button from "@/components/Button";
import styles from "./page.module.css"
import webinar from "@/components/webinar";
export default function HomePage() {
  return (
    <section >



  <header className={`${styles.background} ${styles.pt40} ${styles.pb40} ${styles.pl40} ${styles.pr40} ${styles.mb60} `}>
      <div className={`${styles.display} ${styles.jcsb} ${styles.al}  ${styles.mb80} `}>
        <div className="left">
          <h1 className={`${styles.f26} ${styles.color} ${styles.fw900}`}>Vidyamath.com</h1>
          <h4 className={`${styles.f12} ${styles.fw40} ${styles.color}`}>Classes By Professionals</h4>
        </div>
        <div className="right">
        <Button/>
        </div>
        
      </div>
      <div className={`${styles.f100} ${styles.color} ${styles.mb20} ${styles.fw700} ${styles.l1}`}>
          <h1>AI & Machine <br/> <span className={`${styles.f80}`}>Learning</span> <span className={`${styles.c1DE9B6} ${styles.f80}`}>Webinar</span></h1>
        </div>
       <div className={`${styles.display} ${styles.color} ${styles.g20} ${styles.f30} ${styles.mb60}`}>
        <div className="left">
          22-July-2025
        </div>
        <div className="right">
          8:00 PM
        </div>
       </div>
    <Button/>

     
       </header>
 <main>
  <div className={`${styles.pl40} ${styles.pr40} ${styles.mb60}`}>
    <div className={`${styles.tac} ${styles.f48} ${styles.fw900} ${styles.mb60} ${styles.l3}`}>
       <h1>Why <span className={styles.text}> You Should </span><br/> Join  <span className={styles.text}>This Webinar?</span></h1>
    </div>
    <div className={`${styles.display} ${styles.g80}`}>
      <div className={styles.box}></div>
      <div className={styles.box2}></div>
      <div className={`${styles.w504} ${styles.display} ${styles.g40} ${styles.fcl}`}>
        <div className="content">
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw600} ${styles.mb7}`}>What is Artificial Intelligence? </h1>
          <p className={` ${styles.f16} ${styles.lh1} ${styles.l22}`}>I learned that AI is a technology that allows machines to simulate human thinking, like learning, problem-solving, and decision-making.</p>
        </div>
        <div className="content">
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw600} ${styles.mb7}`}>What is Machine Learning? </h1>
          <p className={` ${styles.f16} ${styles.lh1} ${styles.l22}`}>ML is a branch of AI that enables computers to learn from data and improve automatically.</p>
        </div>
        <div className="content">
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw600} ${styles.mb7}`}>How AI/ML is Used in Real Life </h1>
          <p className={` ${styles.f16} ${styles.lh1} ${styles.l22}`}>I learned that AI is a technology that allows machines to simulate human thinking, like learning, problem-solving, and decision-making.</p>
        </div>
      </div>
    </div>

  </div>
 </main>
<div className={`${styles.bc111c26} ${styles.tac} ${styles.pt40}`}>
  <div className={`${styles.fw900} ${styles.f36} ${styles.color} ${styles.mb42}`}>Webinar Start In </div>
  <div className={`${styles.display} ${styles.g68} ${styles.jc} `}>
    <div className={styles.mb58}>
      <p className={`${styles.box4} ${styles.mb20} ${styles.f50} ${styles.w100} ${styles.h100}`} >02</p>
    <h5 className={`${styles.color} ${styles.f20}`}>Days</h5>
    </div>  
   <div className="heading">
      <p className={`${styles.box4} ${styles.mb20} ${styles.f50} ${styles.w100} ${styles.h100}`} >12</p>
    <h5 className={`${styles.color} ${styles.f20}`}>Hours</h5>
    </div>
    <div className="heading">
      <p className={`${styles.box4} ${styles.mb20} ${styles.f50} ${styles.w100} ${styles.h100}`} >45</p>
    <h5 className={`${styles.color} ${styles.f20}`}>Minutes</h5>
    </div>
     <div className="heading">
      <p className={`${styles.box4} ${styles.mb20} ${styles.f50} ${styles.w100} ${styles.h100}`} >54</p>
    <h5 className={`${styles.color} ${styles.f20}`}>Seconds</h5>
    </div>

  </div>
</div>
<webinar/>
    </section>


  );
  
}