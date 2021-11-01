import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookMedical, faCode, faCodeBranch, faCube, faCubes, faGripLines, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Useful = () => (

  <div className="grid grid-cols-4 mt-24 divide-cyan-500 text-2xl ">
    <div></div>
    <div className="col-span-2 ">
      <div className="text-6xl my-16 text-cyan-400 font-bold ">
        <h2>ทำไมต้อง React</h2>
      </div>
      <div className="bg-blueGray-800 opacity-100 rounded-3xl p-10 m-10 shadow-md">
        <FontAwesomeIcon className="my-12" icon={faUser} color="white" size="2x"></FontAwesomeIcon>
        <h2 className="text-4xl mb-5 text-cyan-400 font-bold">Declarative</h2>
        <p className="text-white">React ทำให้การสร้าง UI แบบโต้ตอบไม่ลำบาก ออกแบบมุมมองอย่างง่ายสำหรับแต่ละ state ในแอปพลิเคชันของคุณ
          และ React จะอัปเดตและแสดงผลเฉพาะส่วนประกอบที่เหมาะสมอย่างมีประสิทธิภาพเมื่อข้อมูลของคุณเปลี่ยนแปลง</p>
      </div>
      <div className="bg-blueGray-800 opacity-100 rounded-3xl p-10 m-10">
        <FontAwesomeIcon className="my-12" icon={faCubes} color="white" size="2x"></FontAwesomeIcon>

        <h2 className="text-4xl mb-5 text-cyan-400 font-bold">Component-Based</h2>
        <p className="text-white">สร้างส่วนประกอบ หรือ Component เพื่อจัดการหน้าเว็บหน้า จากนั้นจึงรวมรวมหลายๆ Components เพื่อสร้าง UI ที่ซับซ้อนหรือความสะดวกในการแก้ไขเนื่องจากากจัดเก็บ Component</p>
      </div>
      <div className="bg-blueGray-800 opacity-100 rounded-3xl p-10 m-10">
        <FontAwesomeIcon className="my-12" icon={faBook} color="white" size="2x"></FontAwesomeIcon>
        <h2 className="text-4xl mb-5 text-cyan-400 font-bold">Learn Once, Write Anywhere</h2>
        <p className="text-white">
          เพื่อให้คุณสามารถพัฒนาคุณสมบัติใหม่ใน React โดยไม่ต้องเขียนโค้ดที่มีอยู่ใหม่ React ยังสามารถแสดงผลบนเซิร์ฟเวอร์โดยใช้ Node และเปิดแอพมือถือโดยใช้ React Native
          อีกหนึ่งจุดที่น่าสนใจของ React คือมีขนาด Community ขนาดใหญ่ดังนั้นผลิตภัณฑ์ ที่ช่วย Support React จึงถูกพัฒนาอยู่ตลอดเวลา</p>
      </div>
    </div>
    <div></div>
  </div>

)

export default Useful