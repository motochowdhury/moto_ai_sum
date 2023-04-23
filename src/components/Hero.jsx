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

      <h1 className='head_text'>Summerize article With <br className='max-md:hidden' />
      <span className='orange_gradient'>OpenAi GPT-4</span>
      </h1>
      <h1 className='desc'>Simplify your reading with summerizer, an open-source airtificial summerizer that transform lengthy article into clear and easy</h1>
    </header>
  )
}

export default Hero