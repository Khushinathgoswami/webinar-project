
import Button from "@/components/Button";
import styles from "./page.module.css"
import Schedule from "@/components/Schedule";
import Image from "next/image";
export default function HomePage() {
  return (
    <section className= {`${styles.overflow}`}>



  <header className={`${styles.background} ${styles.pt42} ${styles.pb40} ${styles.pl40} ${styles.pr40} ${styles.mb60} ${styles.width} ${styles.mb30}`}>
      <div className={`${styles.display} ${styles.jcsb} ${styles.al}  ${styles.mb80} ${styles.mb40}`}>
        <div className="left">
          <div className={`${styles.logo}`}> <Image
    src="/images/logo2.png"
    alt="logo"
    width={234}
    height={47}
    
    /></div>
    <div className={`${styles.logo1} `}> <Image
    src="/images/logo1.png"
    alt="logo"
    width={101}
    height={82}
    
    /></div>
    
        </div>
        <div className={styles.button}>
        <Button/>
        </div>
        
      </div>
      <div className={`${styles.f100} ${styles.color} ${styles.mb20} ${styles.fw700} ${styles.l1} ${styles.left} ${styles.f51}`}>
          <h1>AI & Machine <br/> <span className={`${styles.f80} ${styles.f45} ${styles.f36}`}>Learning</span> <span className={`${styles.c1DE9B6} ${styles.f80} ${styles.f45} ${styles.f36}`}>Webinar</span></h1>
        </div>
       <div className={`${styles.display} ${styles.color} ${styles.g20} ${styles.f30} ${styles.f16} ${styles.mb60} ${styles.details}`}>
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
    <div className={`${styles.tac} ${styles.f48} ${styles.fw900} ${styles.mb60} ${styles.l3} ${styles.f24} ${styles.h56} ${styles.mb40}`}>
       <h1>Why <span className={`${styles.text} ${styles.blinear} ${styles.wbkit}`}> You Should </span><br/> Join  <span className={`${styles.text} ${styles.blinear} ${styles.wbkit}`}>This Webinar?</span></h1>
    </div>
    <div className={`${styles.display} ${styles.g80} ${styles.webinar}`}>
      <div className={`${styles.box} ${styles.wd100}`}>
      <Image
    src="/images/webinar.jpg"
    alt="Webinar Team"
    width={500}
    height={300}
    className="rounded-xl object-cover w-full h-full"
  />
      </div>
      <div className={`${styles.box2} `}>
     
      </div>
      <div className={styles.boxes}></div>
      <div className={`${styles.w504} ${styles.display} ${styles.g40} ${styles.fcl} ${styles.w362} ${styles.g24}`}>
        <div className="content">
          
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw600} ${styles.mb7} ${styles.f16}`}>What is Artificial Intelligence? </h1>
          <p className={` ${styles.f16} ${styles.lh1} ${styles.l22} ${styles.f14}`}>I learned that AI is a technology that allows machines to simulate human thinking, like learning, problem-solving, and decision-making.</p>
        </div>
        <div className="content">
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw600} ${styles.mb7} ${styles.f16}`}>What is Machine Learning? </h1>
          <p className={` ${styles.f16} ${styles.lh1} ${styles.l22} ${styles.f14}`}>ML is a branch of AI that enables computers to learn from data and improve automatically.</p>
        </div>
        <div className="content">
          <h1 className={`${styles.c111C26} ${styles.f22} ${styles.fw600} ${styles.mb7} ${styles.f16}`}>How AI/ML is Used in Real Life </h1>
          <p className={` ${styles.f16} ${styles.lh1} ${styles.l22} ${styles.f14}`}>The webinar showed examples like voice assistants, recommendation systems (like Netflix).</p>
        </div>
      </div>
    </div>

  </div>
 </main>
<div className={`${styles.bc111c26} ${styles.tac} ${styles.pt40} ${styles.mb100} ${styles.maxw} ${styles.mb50}`}>
  <div className={`${styles.fw900} ${styles.f36} ${styles.color} ${styles.mb42} ${styles.f24}`}>Webinar Start In </div>
  <div className={`${styles.display} ${styles.g68} ${styles.jc} ${styles.g30}`}>
    <div className={styles.mb58}>
      <p className={`${styles.box4} ${styles.mb20} ${styles.f50} ${styles.w100} ${styles.h100} ${styles.timer} ${styles.f24}`} >02</p>
    <h5 className={`${styles.color} ${styles.f20} ${styles.f14}`}>Days</h5>
    </div>  
   <div className="heading">
      <p className={`${styles.box4} ${styles.mb20} ${styles.f50} ${styles.w100} ${styles.h100} ${styles.timer} ${styles.f24}`} >12</p>
    <h5 className={`${styles.color} ${styles.f20} ${styles.f14}`}>Hours</h5>
    </div>
    <div className="heading">
      <p className={`${styles.box4} ${styles.mb20} ${styles.f50} ${styles.w100} ${styles.h100} ${styles.timer} ${styles.f24}`} >45</p>
    <h5 className={`${styles.color} ${styles.f20} ${styles.f14}`}>Minutes</h5>
    </div>
     <div className="heading">
      <p className={`${styles.box4} ${styles.mb20} ${styles.f50} ${styles.w100} ${styles.h100} ${styles.timer} ${styles.f24}`} >54</p>
    <h5 className={`${styles.color} ${styles.f20} ${styles.f14}`}>Seconds</h5>
    </div>

  </div>
</div>
<Schedule/>
    </section>


  );
  
}