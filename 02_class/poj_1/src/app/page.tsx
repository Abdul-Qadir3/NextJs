import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-slate-500'>
      Hello world
      <div><User name="abdul"/></div>
      <div><User name="Qadir"/></div>
      <div><User name="IK"/></div>
      <div><User names="I.K"/></div>
    </div>
  )
}

const User=(prop)=>{
  return(
    <div>
      <h2>User name is {prop.name}</h2>
    </div>
  )
}
