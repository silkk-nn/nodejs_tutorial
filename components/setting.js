import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookMedical, faCode, faCodeBranch, faCube, faCubes, faGripLines, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from 'react';
import prism from 'prismjs';


const Setting = () => {
    useEffect(() => {
        prism.highlightAll();
    }, []);
    return (
        <div className="grid grid-cols-7 mt-20">
            <div className="col-span-1"></div>
            <div className="col-span-1 border-r">
                <div className="sticky top-20 text-left">
                    <a href="#whatnode">
                            <button className="bg-transparent text-md hover:bg-cyan-700 text-cyan-700 font-bold 
                hover:text-white py-2 px-3 my-2 border border-cyan-700 hover:border-transparent rounded-2xl">
                                ติดตั้ง  Nodejs
                            </button>
                    </a>
                    <a href="#whatjsx">
                            <button className="bg-transparent text-md hover:bg-cyan-700 text-cyan-700 font-bold 
                hover:text-white py-2 px-3 my-2 border border-cyan-700 hover:border-transparent rounded-2xl">
                                ทำความรู้จัก JSX
                            </button>
                    </a>
                    <a href="#jsxreact">
                            <button className="bg-transparent text-md hover:bg-cyan-700 text-cyan-700 font-bold 
                hover:text-white py-2 px-3 my-2 border border-cyan-700 hover:border-transparent rounded-2xl">
                                JSX ใน React
                            </button>
                    </a>
                    <a href="#projectstart">
                            <button className="bg-transparent text-md hover:bg-cyan-700 text-cyan-700 font-bold 
                hover:text-white py-2 px-3 my-2 border border-cyan-700 hover:border-transparent rounded-2xl">
                                สร้าง Project React
                            </button>
                    </a>
                    <a href="#component">
                            <button className="bg-transparent text-md hover:bg-cyan-700 text-cyan-700 font-bold 
                hover:text-white py-2 px-3 my-2 border border-cyan-700 hover:border-transparent rounded-2xl">
                                Component ใน React
                            </button>
                    </a>
                    <a href="#tailwind">
                            <button className="bg-transparent text-md hover:bg-cyan-700 text-cyan-700 font-bold 
                hover:text-white py-2 px-3 my-2 border border-cyan-700 hover:border-transparent rounded-2xl">
                                ติดตั้ง TailwindCSS
                            </button>
                    </a>
                    <a href="#testtailwind">
                            <button className="bg-transparent text-md hover:bg-cyan-700 text-cyan-700 font-bold 
                hover:text-white py-2 px-3 my-2 border border-cyan-700 hover:border-transparent rounded-2xl">
                                ทดสอบ TailwindCSS
                            </button>
                    </a>
                </div>
            </div>
            <div className="col-span-3 px-3 text-left w-full">
                <h2 className="text-2xl my-5 px-2 py-2 bg-cyan-600 text-white rounded-lg" id="whatnode">ติดตั้ง Nodejs</h2>
                <h2 className="text-lg mx-5">หากยังไม่ได้ติดตั้ง NodeJs ต้องติดตั้งตั้งก่อนเริ่มต้น Project React</h2>
                {/* <img src="fb_hero.jpeg" className="w-full my-10 items-center" /> */}
                <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-10">
                    <img src="/nodejs-logo.svg" width="300px" className="" />
                    <a href="https://nodejs.dev/download">
                        <button className="bg-transparent text-md hover:bg-lime-600 text-lime-600 font-bold 
            hover:text-white py-3 px-5 my-7 border border-lime-600 hover:border-transparent rounded-2xl">
                            dowload NodeJs
                        </button>
                    </a>
                </div>
                <h2 id="whatjsx" className="text-2xl my-5  px-2 py-2 bg-cyan-600 text-white rounded-lg">ทำความรู้จัก JSX</h2>
                <h2 className="text-lg mx-5 my-5">JSX ถูกพัฒนาให้เป็นส่วนเสริมของ JavaScript (syntax extension to JavaScript) ที่จะช่วยให้เราจัดการกับการเขียน UI (HTML) ให้ถูก render ภายใน 
                React app ได้ง่ายขึ้นและด้วยการที่มันพัฒนาจากพื้นฐานของ JavaScript ทำให้เราสามารถใช้ความสามารถของ JS อย่างเต็มรูปแบบมาช่วยในการคำนวณ จัดการข้อมูลและเหตุการณ์ต่างๆเพื่อให้ UI จะถูก render ตามความต้องการของเราได้</h2>
                <h2 id="jsxreact" className="text-2xl my-5  px-2 py-2 bg-cyan-600 text-white rounded-lg">JSX ใน React</h2>
                <h2 className="text-lg mx-5 my-5">เวลาเราพัฒนาแอปขึ้นมาด้วย React ตอนที่เรา render UI เราจะเห็นว่าภายใน component ต่างๆ จะมีการ return HTML element ออกมา ซึ่งนี่แหละคือความสามารถของ JSX จาก Code ด้านล่างจะเป็นการประยุกต์ใช้ JSX ใน React Application</h2>
                <pre>
                    <code className="language-js mx-5 my-2">
                {`return (
        <h1 style={{ color: "blueviolet", textAlign: "center" }}>
            animal name: {pathData.animal}<br />
            type: {pathData.type}
        </h1>
    )`}
                    </code>
                </pre>
                <h2 id="projectstart" className="text-2xl my-5  px-2 py-2 bg-cyan-600 text-white rounded-lg">สร้าง Project React</h2>
                <h2 className="text-lg mx-5">หลังจากตัดตั้ง NodeJs  ใหhทำการเปิด cmd (Command Prompt) แล้วไปยัง Folder
                    ที่ต้องการสร้าง Project React จากรูปด้วยล่างจะสร้าง ใน Documents/Github/</h2>
                <div className="flex flex-col items-center justify-center w-full my-7 flex-1 text-center ">
                    <img src="/CMD-Create.png" width="60%" className="" />
                </div>
                <h2 className="text-lg mx-5">หลังจากเข้าถึง Folder ที่ต้องการเข้าสร้าง Porject React ให้พิมพ์คำสั่งต่อไป</h2>
                <pre>
                    <code className="language-shell mx-5 my-2">
                    npx create-react-app my-react-app
                    </code>
                </pre>
                {/* code  */}
                <h2 className="text-lg mx-5">จากตำสั่งข้างต้น หมายความเราจะสร้าง Project React โดยเก็บ Folder ชื่อ "my-react-app"</h2>
                <div className="flex flex-col items-center justify-center w-full my-7 flex-1 text-center ">
                    <img src="/reactloading.png" width="100%" className="" />
                </div>
                <h2 className="text-lg mx-5">หลังจากทำการ ติดตั้้ง React รอสักครู่ให้ และทำคำสั่งต่อไป โดยให้เข้าถึง Folder ของ Project React โดยใช้ cd ตามด้วยชื่อ Folder ของ Project React หลังจากนั้นให้พิมพ์คำสั่งต่อไปนี้</h2>
                <pre>
                    <code className="language-shell mx-5 my-2">
                    npm start
                    </code>
                </pre>
                {/* code npm start */}
                <h2 className="text-lg mx-5">หาก run สำเร็จ เปิด web browser ไปยัง http://localhost:3000/ ผลลัพธ์จะได้ดังรูปต่อไปนี้</h2>
                <div className="flex flex-col items-center justify-center w-full my-7 flex-1 text-center ">
                    <img src="/reactstart.png" width="70%" className="" />
                </div>
                <h2 className="text-lg mx-5">หลังจากนั้นให้ทำการ คำสั่งด่านล่าง เพื่อเข้าถึง Folder ของ Project React ใน VScode</h2>
                <pre>
                    <code className="language-shell mx-5 my-2">
                    code .
                    </code>
                </pre>
                {/* code code . */}
                <h2 className="text-lg mx-5">ผลลัพธ์จะได้ดังรูปด้านล่างต่อไปนี้</h2>
                <div className="flex flex-col items-center justify-center w-full my-7 flex-1 text-center ">
                    <img src="/vsreact.png" width="90%" className="" />
                </div>
                <div className="text-lg mx-5">                
                </div>
                <pre>
                    <code className="language-shell mx-5 my-2">
                {`public/index.html -> คือไฟล์ html หลักของเรา
  src/index.js-> เป็นไฟล์หลักของ React
  src/App.js-> ไฟล์ Component ที่ชื่อว่า App`}
                    </code>
                </pre>
                <h2 id="component" className="text-2xl my-5  px-2 py-2 bg-cyan-600 text-white rounded-lg">ใช้งาน Component ภาย React</h2>
                <h2 className="text-lg mx-5 my-5">ในเนื้อหาส่วนนี้เราจะทำการสร้าง Component ภายใน React โดยข้อดี แต่ละ Component
                จะทำงานแยกส่วน และ ง่ายต่อการแก้ไข หรือ ปรับปรุงประสิทธิภาพของ website</h2>
                <h2 className="text-lg mx-5 my-5">ให้สร้างไฟล์ subject.js ภายใน Folder src จะได้ <code className="language-shell px-5">/src/subject.js</code> ภายในใส่ code ดังนี้</h2>
                <pre>
                <code className="language-js my-2">
                {`function Subject() {
  return (
    <div>
        <h1>Web technology</h1>
    </div>
  );
}

export default Subject;
`}
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5">และแก้เนื้อหาไฟล์ <code className="language-shell px-5">/src/App.js</code> ดังนี้</h2>
                <pre>
                <code className="language-js my-2">
                {`import './App.css';
import Subject from './subject.js';

function App() {
  return (
    <div className="App">
      <Subject />
    </div>
  );
}

export default App;
`}
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5">เมื่อทำแก้ไข Code ตามขึ้นตอนที่ผ่าน จะได้ผลลัพธ์ดังนี้</h2>
                <div className="flex flex-col border items-center justify-center w-full my-7 flex-1 text-center ">
                    <img src="/result.png" width="100%" className="" />
                </div>
                <h2 className="text-lg mx-5 my-5">จะสังเกตได้่ว่า style ของ Page จะมาจาก <code className="language-shell p-5">import './App.css';</code> และเนื้อหาของ Page มาจาก <code className="language-shell p-5">src/subject</code>
                </h2>
                <h2 className="text-lg mx-5 my-5">ข้อควรระวังในการ พัฒนา React คือ การกำหนด Class ของ React จะต้องเป็น className และ การ Import Function จาก Componet จะต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่</h2>
                <h2 id='tailwind' className="text-2xl my-5  px-2 py-2 bg-cyan-600 text-white rounded-lg">การติดตั้ง CSS Framework ใน React</h2>
                <h2 className="text-lg mx-5 my-5">ในเนื้อหาใน ส่วนนี้จะเป็น การสอนติดตั้ง CSS Framework อย่าง TailwindCSS ซึ่งเป็น Framework ที่รวบรวมชุดคำสั่ง CSS ไว้ทำให้สะดวกต่อการใช้งาน และ จุดเด่นด้านความ Customize ได้ง่าย</h2>
                <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-10">
                    <img src="/tailwindcss.svg" width="400px" className="" />
                    <a href="https://nodejs.dev/download">
                        <button className="bg-transparent text-md hover:bg-cyan-600 text-cyan-600 font-bold 
        hover:text-white py-3 px-5 my-7 border border-cyan-600 hover:border-transparent rounded-2xl">
                             เนื้อหาเพิ่มเติม tailwindcss
                        </button>
                    </a>
                </div>
                <h2 className="text-lg mx-5 my-5">โดยเราสามารถ เริ่มต้นการติดตั้ง TailwindCSS ด้วยการเปิด Terminal ใน VScode เริ่มต้นด้วย Code ดังนี้</h2>
                <pre>
                    <code className="language-shell mx-5 my-2">
                    npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5">เนื่องจาก React App ไม่อนุญาตให้คุณแทนที่การกำหนดค่า PostCSS แบบเดิม เราจึงต้องติดตั้ง CRACO เพื่อให้สามารถกำหนดค่า Tailwind ได้</h2>
                <pre>
                    <code className="language-shell mx-5 my-2">
                    npm install @craco/craco
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5">หลังจากติดตั้งสำเร็จ ต้องทำการแก้ Config <code className="language-shell">
                package.json
                    </code></h2>
                <div className="flex flex-col items-center justify-center w-full my-7 flex-1 text-center ">
                    <img src="/config.png" width="90%" className="" />
                </div>
                <h2 className="text-lg mx-5 my-5"> สร้างไฟล์ชื่อ <code className="language-shell">craco.config.js</code></h2>
                <pre>
                <code className="language-js my-2">
                {`// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
`}
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5">ต่อไปคือ การสร้าง Config ของ Tailwind <code className="language-shell">
                tailwind.config.js
                    </code></h2>
                <pre>
                    <code className="language-shell mx-5 my-2">
                    npx tailwindcss-cli@latest init
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5">โดยผลลัพธ์ของไฟล์ <code className="language-shell">
                tailwind.config.js
                    </code>ให้ทำการแก้ เนื้อหาเป็นไปตาม Code ด้านล่างนี้</h2>
                <pre>
                <code className="language-js my-2">
                {`//  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
`}
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5">หลังจากการแก้ Config แล้วให้ทำการเพิ่ม Code ต่อไปนี้ลงในไฟล์ <code className="language-shell">
                src/index.css
                    </code> </h2>
                <pre>
                    <code className="language-css mx-2 my-2">
                    {`/* ./src/index.css */
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
`}
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5"> ทำการ import ไฟล์ <code className="language-shell">
                src/index.css
                    </code> ลงในไฟล์ <code className="language-shell">
                src/index.js
                    </code> ลงจากการ import จะได้ code ดังนี้</h2>
                    <pre>
                    <code className="language-js mx-0 my-2">
                    {`// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
`}
                    </code>
                </pre>
                <h2 id="testtailwind" className="text-2xl my-5  px-2 py-2 bg-cyan-600 text-white rounded-lg">ทดสอบการใช้งาน TailwindCSS</h2>
                <h2 className="text-lg mx-5 my-5">เนื้อหาส่วนนี้จะกล่าวจะถึงการทดสอบ Tailwind หลังจากการ Install และ Config เสร็จ</h2>
                <h2 className="text-lg mx-5 my-5">ให้ทำการแก้ไข code ในไฟล์ <code className="language-shell">
                src/subject.js
                    </code> </h2>
                <pre>
                    <code className="language-js mx-0 my-2">
                    {`// src/subject.js
function Subject() {
    return (
      <div>
          <h1 className="text-blue-500 text-3xl">Web technology</h1>
          <br/>
          <h1 className="bg-green-200 text-3xl">Hello World</h1>
      </div>
    );
  }
export default Subject;
`}
                    </code>
                </pre>
                <h2 className="text-lg mx-5 my-5">เนื้อหาส่วนนี้จะกล่าวจะถึงการทดสอบ Tailwind หลังจากการ Install และ Config เสร็จ</h2>
                <h2 className="text-lg mx-5 my-5">หลังจากทำการแก้ไข code ดังกล่าวจะได้ผลลัพธ์ดังภาพด้านล่าง</h2>
                <div className="flex flex-col items-center justify-center w-full my-7 flex-1 text-center ">
                    <img src="/aftertailwind.png" width="100%" className="" />
                </div>
                <h2 className="text-lg mx-5 my-5">หากผลลัพธ์ ได้รูปภาพต่อไปนี้ เราก็สามารถสร้าง Project React โดยมี TailwindCSS ใช้งานร่วมกันได้แล้วครับ</h2>
                <div className="my-8">
                <h2 id="refer" className="text-2xl my-5  px-2 py-2 bg-cyan-600 text-white rounded-lg">เอกสารอ้าง</h2>
                <a href="https://reactjs.org/" className="text-lg mx-5 my-10">https://reactjs.org/</a>
                <br></br>
                <a href="https://www.borntodev.com/2020/07/15/react-101/" className="text-lg mx-5 my-10">https://www.borntodev.com/2020/07/15/react-101/</a>
                <br></br>
                <a href="https://devahoy.com/blog/2018/02/learn-react-with-create-react-app/" className="text-lg mx-5 my-10">https://devahoy.com/blog/2018/02/learn-react-with-create-react-app/</a>
                <br></br>
                <a href="https://www.thaiprogrammer.org/2018/01/learn-react-in-5-mins/" className="text-lg mx-5 my-10">https://www.thaiprogrammer.org/2018/01/learn-react-in-5-mins/</a>
                </div>
                
           </div>
            <div className=""></div>
            <div className=""></div>
        </div>
        
    )
}




export default Setting