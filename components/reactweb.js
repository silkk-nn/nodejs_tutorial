import Link from 'next/link'

const Reactweb = () => (

    <div className="grid grid-cols-7 mt-20">
        <div className="col-span-2"></div>

        <div className="col-span-3 w-auto">
            <img src="fb_hero.jpeg" className="w-full my-10 items-center" />
            <h2 className="text-2xl my-10 px-5 py-1 bg-blue-800 text-white">Facebook</h2>
            <h2 className="text-xl">Website Social Network ซึ่งเป็นที่นิยมในปัจจุบัน ก่อตั้งโดย Mark Zuckerberg CEO บริษัท Meta</h2>
            <a  href="https://www.facebook.com/">
            <button className="bg-transparent text-md hover:bg-cyan-500 text-cyan-500 font-bold 
        hover:text-white py-3 px-5 my-7 border border-cyan-500 hover:border-transparent rounded-full">
                เข้าชม Website
            </button>
            </a>
            <img src="netflix-hero.png" className="w-full my-10 items-center" />
            <h2 className="text-2xl my-10 px-5 py-1 bg-red-600 text-white">Netflix</h2>
            <h2 className="text-xl">Website สื่อ Steaming อันดับ 1 เป็นแหล่งรวบรวม Centent สื่อมากมายทั่วโลก</h2>
            <a  href="https://www.netflix.com/">
            <button className="bg-transparent text-md hover:bg-cyan-500 text-cyan-500 font-bold 
        hover:text-white py-3 px-5 my-7 border border-cyan-500 hover:border-transparent rounded-full">
                เข้าชม Website
            </button>
            </a>
            <img src="asana.jpg" className="w-full my-10 items-center" />
            <h2 className="text-2xl my-10 px-5 py-1 bg-red-300 text-white">Asana</h2>
            <h2 className="text-xl">Website Co-working สำหรับการทำงานร่วมกัน โดยสามารถ Schuduling งานต่างสำหรับทีมหรือองกรค์ได้</h2>
            <a  href="https://asana.com/campaign/fac/think?&utm_campaign=Brand--APAC--EN--Core--All-Device--Exact&utm_source=google&utm_medium=pd_cpc_br&gclid=Cj0KCQjw_fiLBhDOARIsAF4khR36dKBU9HCQmuyFmIsaxJgYDKlX5ywK1zJ_XsRk48TH4jGCpuje5kgaAl3REALw_wcB&gclsrc=aw.ds">
            <button className="bg-transparent text-md hover:bg-cyan-500 text-cyan-500 font-bold 
        hover:text-white py-3 px-5 my-7 border border-cyan-500 hover:border-transparent rounded-full">
                เข้าชม Website
            </button>
            </a>
        </div>
        <div className="col-span-2"></div>
    </div>
)

export default Reactweb