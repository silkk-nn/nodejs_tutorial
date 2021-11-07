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
                <div className="sticky text-left top-20">
                    <a href="#whatnode">
                            <button className="px-3 py-2 my-2 font-bold bg-transparent border text-md hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 hover:border-transparent rounded-2xl">
                                ติดตั้ง  Nodejs
                            </button>
                    </a>
                    <a href="#whatjsx">
                            <button className="px-3 py-2 my-2 font-bold bg-transparent border text-md hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 hover:border-transparent rounded-2xl">
                                ทำความรู้จัก JSX
                            </button>
                    </a>
                    <a href="#jsxreact">
                            <button className="px-3 py-2 my-2 font-bold bg-transparent border text-md hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 hover:border-transparent rounded-2xl">
                                JSX ใน React
                            </button>
                    </a>
                    <a href="#projectstart">
                            <button className="px-3 py-2 my-2 font-bold bg-transparent border text-md hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 hover:border-transparent rounded-2xl">
                                สร้าง Project React
                            </button>
                    </a>
                    <a href="#component">
                            <button className="px-3 py-2 my-2 font-bold bg-transparent border text-md hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 hover:border-transparent rounded-2xl">
                                Component ใน React
                            </button>
                    </a>
                    <a href="#tailwind">
                            <button className="px-3 py-2 my-2 font-bold bg-transparent border text-md hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 hover:border-transparent rounded-2xl">
                                ติดตั้ง TailwindCSS
                            </button>
                    </a>
                    <a href="#testtailwind">
                            <button className="px-3 py-2 my-2 font-bold bg-transparent border text-md hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 hover:border-transparent rounded-2xl">
                                ทดสอบ TailwindCSS
                            </button>
                    </a>
                </div>
            </div>
            <div className="w-full col-span-4 px-3 text-left">
                <h2 className="px-2 py-2 my-8 text-3xl text-white rounded-lg bg-cyan-600" id="whatnode">ติดตั้ง Nodejs</h2>
                <h2 className="mx-5 text-xl">หากยังไม่ได้ติดตั้ง NodeJs ต้องติดตั้งตั้งก่อนเริ่มต้น Project React</h2>
                {/* <img src="fb_hero.jpeg" className="items-center w-full my-10" /> */}
                <div className="flex flex-col items-center justify-center flex-1 w-full px-20 mt-10 text-center">
                    <img src="./nodejs-logo.svg" width="300px" className="" />
                    <a href="https://nodejs.dev/download">
                        <button className="px-5 py-3 font-bold bg-transparent border text-md hover:bg-lime-600 text-lime-600 hover:text-white my-7 border-lime-600 hover:border-transparent rounded-2xl">
                            dowload NodeJs
                        </button>
                    </a>
                </div>
                <h2 id="whatjsx" className="px-2 py-2 my-8 text-3xl text-white rounded-lg bg-cyan-600">ทำความรู้จัก JSX</h2>
                <h2 className="mx-5 my-8 text-xl">JSX ถูกพัฒนาให้เป็นส่วนเสริมของ JavaScript (syntax extension to JavaScript) ที่จะช่วยให้เราจัดการกับการเขียน UI (HTML) ให้ถูก render ภายใน
                React app ได้ง่ายขึ้นและด้วยการที่มันพัฒนาจากพื้นฐานของ JavaScript ทำให้เราสามารถใช้ความสามารถของ JS อย่างเต็มรูปแบบมาช่วยในการคำนวณ จัดการข้อมูลและเหตุการณ์ต่างๆเพื่อให้ UI จะถูก render ตามความต้องการของเราได้</h2>
                <h2 id="jsxreact" className="px-2 py-2 my-8 text-3xl text-white rounded-lg bg-cyan-600">JSX ใน React</h2>
                <h2 className="mx-5 my-8 text-xl">เวลาเราพัฒนาแอปขึ้นมาด้วย React ตอนที่เรา render UI เราจะเห็นว่าภายใน component ต่างๆ จะมีการ return HTML element ออกมา ซึ่งนี่แหละคือความสามารถของ JSX จาก Code ด้านล่างจะเป็นการประยุกต์ใช้ JSX ใน React Application</h2>
                <pre>
                    <code className="mx-5 my-2 language-js">
                {`return (
        <h1 style={{ color: "blueviolet", textAlign: "center" }}>
            animal name: {pathData.animal}<br />
            type: {pathData.type}
        </h1>
    )`}
                    </code>
                </pre>
                <h2 id="projectstart" className="px-2 py-2 my-8 text-3xl text-white rounded-lg bg-cyan-600">สร้าง Project React</h2>
                <h2 className="mx-5 text-xl">หลังจากตัดตั้ง NodeJs  ใหhทำการเปิด cmd (Command Prompt) แล้วไปยัง Folder
                    ที่ต้องการสร้าง Project React จากรูปด้วยล่างจะสร้าง ใน Documents/Github/</h2>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center my-7 ">
                    <img src="./CMD-Create.png" width="60%" className="" />
                </div>
                <h2 className="mx-5 text-xl">หลังจากเข้าถึง Folder ที่ต้องการเข้าสร้าง Porject React ให้พิมพ์คำสั่งต่อไป</h2>
                <pre>
                    <code className="mx-5 my-2 language-shell">
                    npx create-react-app my-react-app
                    </code>
                </pre>
                {/* code  */}
                <h2 className="mx-5 text-xl">จากตำสั่งข้างต้น หมายความเราจะสร้าง Project React โดยเก็บ Folder ชื่อ "my-react-app"</h2>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center my-7 ">
                    <img src="./reactloading.png" width="100%" className="" />
                </div>
                <h2 className="mx-5 text-xl">หลังจากทำการ ติดตั้้ง React รอสักครู่ให้ และทำคำสั่งต่อไป โดยให้เข้าถึง Folder ของ Project React โดยใช้ cd ตามด้วยชื่อ Folder ของ Project React หลังจากนั้นให้พิมพ์คำสั่งต่อไปนี้</h2>
                <pre>
                    <code className="mx-5 my-2 language-shell">
                    npm start
                    </code>
                </pre>
                {/* code npm start */}
                <h2 className="mx-5 text-xl">หาก run สำเร็จ เปิด web browser ไปยัง http://localhost:3000/ ผลลัพธ์จะได้ดังรูปต่อไปนี้</h2>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center my-7 ">
                    <img src="./reactstart.png" width="70%" className="" />
                </div>
                <h2 className="mx-5 text-xl">หลังจากนั้นให้ทำการ คำสั่งด่านล่าง เพื่อเข้าถึง Folder ของ Project React ใน VScode</h2>
                <pre>
                    <code className="mx-5 my-2 language-shell">
                    code .
                    </code>
                </pre>
                {/* code code . */}
                <h2 className="mx-5 text-xl">ผลลัพธ์จะได้ดังรูปด้านล่างต่อไปนี้</h2>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center my-7 ">
                    <img src="./vsreact.png" width="90%" className="" />
                </div>
                <div className="mx-5 text-xl">
                </div>
                <pre>
                    <code className="mx-5 my-2 language-shell">
                {`public/index.html -> คือไฟล์ html หลักของเรา
  src/index.js-> เป็นไฟล์หลักของ React
  src/App.js-> ไฟล์ Component ที่ชื่อว่า App`}
                    </code>
                </pre>
                <h2 id="component" className="px-2 py-2 my-8 text-3xl text-white rounded-lg bg-cyan-600">ใช้งาน Component ภาย React</h2>
                <h2 className="mx-5 my-8 text-xl">ในเนื้อหาส่วนนี้เราจะทำการสร้าง Component ภายใน React โดยข้อดี แต่ละ Component
                จะทำงานแยกส่วน และ ง่ายต่อการแก้ไข หรือ ปรับปรุงประสิทธิภาพของ website</h2>
                <h2 className="mx-5 my-8 text-xl">ให้สร้างไฟล์ subject.js ภายใน Folder src จะได้ <code className="px-5 language-shell">/src/subject.js</code> ภายในใส่ code ดังนี้</h2>
                <pre>
                <code className="my-2 language-js">
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
                <h2 className="mx-5 my-8 text-xl">และแก้เนื้อหาไฟล์ <code className="px-5 language-shell">/src/App.js</code> ดังนี้</h2>
                <pre>
                <code className="my-2 language-js">
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
                <h2 className="mx-5 my-8 text-xl">เมื่อทำแก้ไข Code ตามขึ้นตอนที่ผ่าน จะได้ผลลัพธ์ดังนี้</h2>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center border my-7 ">
                    <img src="./result.png" width="100%" className="" />
                </div>
                <h2 className="mx-5 my-8 text-xl">จะสังเกตได้่ว่า style ของ Page จะมาจาก <code className="p-5 language-shell">import './App.css';</code> และเนื้อหาของ Page มาจาก <code className="p-5 language-shell">src/subject</code>
                </h2>
                <h2 className="mx-5 my-8 text-xl">ข้อควรระวังในการ พัฒนา React คือ การกำหนด Class ของ React จะต้องเป็น className และ การ Import Function จาก Componet จะต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่</h2>
                <h2 id='tailwind' className="px-2 py-2 my-8 text-3xl text-white rounded-lg bg-cyan-600">การติดตั้ง CSS Framework ใน React</h2>
                <h2 className="mx-5 my-8 text-xl">ในเนื้อหาใน ส่วนนี้จะเป็น การสอนติดตั้ง CSS Framework อย่าง TailwindCSS ซึ่งเป็น Framework ที่รวบรวมชุดคำสั่ง CSS ไว้ทำให้สะดวกต่อการใช้งาน และ จุดเด่นด้านความ Customize ได้ง่าย</h2>
                <div className="flex flex-col items-center justify-center flex-1 w-full px-20 mt-10 text-center">
                    <img src="./tailwindcss.svg" width="400px" className="" />
                    <a href="https://nodejs.dev/download">
                        <button className="px-5 py-3 font-bold bg-transparent border text-md hover:bg-cyan-600 text-cyan-600 hover:text-white my-7 border-cyan-600 hover:border-transparent rounded-2xl">
                             เนื้อหาเพิ่มเติม tailwindcss
                        </button>
                    </a>
                </div>
                <h2 className="mx-5 my-8 text-xl">โดยเราสามารถ เริ่มต้นการติดตั้ง TailwindCSS ด้วยการเปิด Terminal ใน VScode เริ่มต้นด้วย Code ดังนี้</h2>
                <pre>
                    <code className="mx-5 my-2 language-shell">
                    npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
                    </code>
                </pre>
                <h2 className="mx-5 my-8 text-xl">เนื่องจาก React App ไม่อนุญาตให้คุณแทนที่การกำหนดค่า PostCSS แบบเดิม เราจึงต้องติดตั้ง CRACO เพื่อให้สามารถกำหนดค่า Tailwind ได้</h2>
                <pre>
                    <code className="mx-5 my-2 language-shell">
                    npm install @craco/craco
                    </code>
                </pre>
                <h2 className="mx-5 my-8 text-xl">หลังจากติดตั้งสำเร็จ ต้องทำการแก้ Config <code className="language-shell">
                package.json
                    </code></h2>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center my-7 ">
                    <img src="./config.png" width="90%" className="" />
                </div>
                <h2 className="mx-5 my-8 text-xl"> สร้างไฟล์ชื่อ <code className="language-shell">craco.config.js</code></h2>
                <pre>
                <code className="my-2 language-js">
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
                <h2 className="mx-5 my-8 text-xl">ต่อไปคือ การสร้าง Config ของ Tailwind <code className="language-shell">
                tailwind.config.js
                    </code></h2>
                <pre>
                    <code className="mx-5 my-2 language-shell">
                    npx tailwindcss-cli@latest init
                    </code>
                </pre>
                <h2 className="mx-5 my-8 text-xl">โดยผลลัพธ์ของไฟล์ <code className="language-shell">
                tailwind.config.js
                    </code>ให้ทำการแก้ เนื้อหาเป็นไปตาม Code ด้านล่างนี้</h2>
                <pre>
                <code className="my-2 language-js">
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
                <h2 className="mx-5 my-8 text-xl">หลังจากการแก้ Config แล้วให้ทำการเพิ่ม Code ต่อไปนี้ลงในไฟล์ <code className="language-shell">
                src/index.css
                    </code> </h2>
                <pre>
                    <code className="mx-2 my-2 language-css">
                    {`/* ./src/index.css */
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
`}
                    </code>
                </pre>
                <h2 className="mx-5 my-8 text-xl"> ทำการ import ไฟล์ <code className="language-shell">
                src/index.css
                    </code> ลงในไฟล์ <code className="language-shell">
                src/index.js
                    </code> ลงจากการ import จะได้ code ดังนี้</h2>
                    <pre>
                    <code className="mx-0 my-2 language-js">
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
                <h2 id="testtailwind" className="px-2 py-2 my-8 text-3xl text-white rounded-lg bg-cyan-600">ทดสอบการใช้งาน TailwindCSS</h2>
                <h2 className="mx-5 my-8 text-xl">เนื้อหาส่วนนี้จะกล่าวจะถึงการทดสอบ Tailwind หลังจากการ Install และ Config เสร็จ</h2>
                <h2 className="mx-5 my-8 text-xl">ให้ทำการแก้ไข code ในไฟล์ <code className="language-shell">
                src/subject.js
                    </code> </h2>
                <pre>
                    <code className="mx-0 my-2 language-js">
                    {`// src/subject.js
function Subject() {
    return (
      <div>
          <h1 className="text-3xl text-blue-500">Web technology</h1>
          <br/>
          <h1 className="text-3xl bg-green-200">Hello World</h1>
      </div>
    );
  }
export default Subject;
`}
                    </code>
                </pre>
                <h2 className="mx-5 my-8 text-xl">เนื้อหาส่วนนี้จะกล่าวจะถึงการทดสอบ Tailwind หลังจากการ Install และ Config เสร็จ</h2>
                <h2 className="mx-5 my-8 text-xl">หลังจากทำการแก้ไข code ดังกล่าวจะได้ผลลัพธ์ดังภาพด้านล่าง</h2>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center my-7 ">
                    <img src="./aftertailwind.png" width="100%" className="" />
                </div>
                <h2 className="mx-5 my-8 text-xl">หากผลลัพธ์ ได้รูปภาพต่อไปนี้ เราก็สามารถสร้าง Project React โดยมี TailwindCSS ใช้งานร่วมกันได้แล้วครับ</h2>
                <div className="my-8">
                <h2 id="refer" className="px-2 py-2 my-8 text-3xl text-white rounded-lg bg-cyan-600">เอกสารอ้าง</h2>
                <a href="https://reactjs.org/" className="mx-5 my-10 text-xl">https://reactjs.org/</a>
                <br></br>
                <a href="https://www.borntodev.com/2020/07/15/react-101/" className="mx-5 my-10 text-xl">https://www.borntodev.com/2020/07/15/react-101/</a>
                <br></br>
                <a href="https://devahoy.com/blog/2018/02/learn-react-with-create-react-app/" className="mx-5 my-10 text-xl">https://devahoy.com/blog/2018/02/learn-react-with-create-react-app/</a>
                <br></br>
                <a href="https://www.thaiprogrammer.org/2018/01/learn-react-in-5-mins/" className="mx-5 my-10 text-xl">https://www.thaiprogrammer.org/2018/01/learn-react-in-5-mins/</a>
                </div>

           </div>
            <div className=""></div>
            <div className=""></div>
        </div>

    )
}




export default Setting
