const Navbar = () => {
  return (
    <header>
        <div className='py-5'>
            <div className='container px-40'>
                <div className='flex justify-between items-center'>
                <h1 className='text-white text-2xl font-bold'>
                <span className='text-yellow-400'>STARZ</span> CRUISE
                </h1>
                <nav className='hidden md:flex gap-6 items-center text-white text-xl'>
                    <a href="#">About</a>
                    <a href="#">Events</a>
                    <a href="#">Socials</a>
                    <a href="#">Contact</a>
                </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
