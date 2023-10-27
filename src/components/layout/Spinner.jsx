import spinner from './assets/spinner.gif'

const Spinner = () => {
  return (
    <div>
      <img 
        width={180} 
        className='text-center mx-auto' 
        src={spinner} 
        alt="Loading Spinner gif" 
      />
    </div>
  )
}

export default Spinner