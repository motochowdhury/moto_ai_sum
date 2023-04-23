import { logo } from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
       <img src={logo} alt="" className='w-28' />
       <button
       type='button'
       onClick={()=> window.open('https://google.com')}
       className='black_btn'
       >gitHub</button>
      </nav>
    </header>
  )
}

export default Hero