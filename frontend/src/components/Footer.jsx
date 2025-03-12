import React from 'react'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
        <h1 className='text-5xl font-serif'>SUSKA</h1>
            <p className='w-full md:w-2/3 text-gray-600'>
            Suska is a leading online store offering a wide range of stylish and trendy clothing for men and women.
            With a focus on quality and affordability, we bring you the latest fashion directly to your doorstep. Whether you are looking for casual wear, office attire, or statement pieces, Suska provides a seamless shopping experience for all your fashion needs.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-6302973663</li>
            <li>suska@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
