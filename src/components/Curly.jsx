export default function Curly({ color }) {
  return (
    <div className='curly'>
      <div className='curly-left curly-item'>
        <div style={{ borderColor: color }} className='curly-left-down'></div>
        <div style={{ borderColor: color }} className='curly-left-up'></div>
      </div>
      <div className='curly-right curly-item'>
        <div style={{ borderColor: color }} className='curly-right-up'></div>
        <div style={{ borderColor: color }} className='curly-right-down'></div>
      </div>
    </div>
  )
}
