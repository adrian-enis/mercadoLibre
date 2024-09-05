import React from 'react'

const RecentlyViewed = () => {
  return (
<div className='bg-red-300 p-4 flex flex-wrap'>
  <article className='bg-white  flex flex-col items-center max-w-[180px] w-full rounded-lg mr-5'>
    <p className='mt-5 text-lg'>Visto Recientemente...</p>
    <div className='w-full flex justify-center'>
      <img src="/public/imagenes/cubo.webp" alt="" className='w-[66%] h-auto' />
    </div>
    <div className='mb-2'>

    <p>US$ 25</p>
    <p>Envio gratis</p>
    </div>
  </article>
 
</div>

  )
}

export default RecentlyViewed