import Link from 'next/link'

const Navbar = () => (
      <nav className="bg-blueGray-800 items-center text-center justify-center sticky border-b top-0 w-full">
        <div
          className="max-w-screen-lg mx-auto hidden sm:flex flex-row items-center p-5"
          style={{ height: '80px' }}
        >
          <a href="#">
            <img src="/Reactlogo.png" width={150}/>
          </a>
        </div>
      </nav>
)

export default Navbar