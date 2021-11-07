import Link from 'next/link'

const Navbar = () => (
      <nav className="sticky top-0 items-center justify-center w-full text-center border-b bg-blueGray-800">
        <div
          className="flex-row items-center hidden max-w-screen-lg p-5 mx-auto sm:flex"
          style={{ height: '80px' }}
        >
          <a href="#">
            <img src="./Reactlogo.png" width={150}/>
          </a>
        </div>
      </nav>
)

export default Navbar
