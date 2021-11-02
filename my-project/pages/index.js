import Head from 'next/head'
import Reactweb from '/components/reactweb'
import Navbar from '/components/navbar'
import Useful from '../components/useful'
import Setting from '../components/setting'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGripLines, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>React starter</title>
        <link href="/styles/prism.css" rel="stylesheet" />
        <link rel="icon" href="/nodeicon.png" />
        <script src="https://kit.fontawesome.com/44113b40f2.js" crossorigin="anonymous"></script>
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center "
      >
        <img className="m-20 animate-spin-slow" src="nodeicon.png" width="400px" />
        <h1 className="text-6xl font-bold " style={{ minHeight: '100%' }}>
          What is {' '}
          <a className="text-cyan-400 animate-pulse" href="#">
            React ?
          </a>
        </h1>
        <div className="grid grid-cols-5 m-16 text-center text-2xl">
          <div></div>
          <div className="col-span-3">
            <b className="text-cyan-500">React</b> เป็น JavaScript Libraly Free and Open-Source สำหรับสร้าง User Interface (UI) พัฒนาโดย Facebook เปิดตัวครั้งแรกในปี 2013
            โดยลักษณะที่เห็นได้ชัด{"\t"} คือการออกแบบโครงสร้างแบบออกเป็นส่วนย่อยๆ หรือ Component{' '}
          </div>
          <div></div>
        </div>
        <button className="bg-transparent text-2xl hover:bg-cyan-500 text-cyan-500 font-bold 
        hover:text-white py-3 px-8 my-7 border border-cyan-500 hover:border-transparent rounded-full">
          Let's Start
        </button>
                <div className="text-5xl shadow-lg border-b text-cyan-400 rounded-2xl px-3 py-4 mt-20">
                ทำไมต้อง React
                </div>
        <Useful />
        <div className="text-5xl shadow-lg border-b text-cyan-400 rounded-2xl px-3 py-4 mt-20">
                Website ที่พัฒนาด้วย Reactjs
                </div>

        <Reactweb />
        <div className="text-4xl shadow-lg border-b text-cyan-400 rounded-2xl px-3 py-4 mt-20">
                เริ่มต้นการการใช้งาน React
                </div>
        <Setting />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
