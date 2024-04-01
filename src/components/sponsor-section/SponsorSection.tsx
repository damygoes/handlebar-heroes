const SponsorSection = () => {
  return (
    <section className='bg-primary'>
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-gray-900 text-3xl font-bold sm:text-4xl'>
            Trusted by eCommerce Businesses
          </h2>

          <p className='text-gray-500 mt-4 sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <div className='mt-8 sm:mt-12'>
          <dl className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
            <div className='bg-blue-50 flex flex-col rounded-lg px-4 py-8 text-center'>
              <dt className='text-gray-500 order-last text-lg font-medium'>
                Total Sales
              </dt>

              <dd className='text-blue-600 text-4xl font-extrabold md:text-5xl'>
                $4.8m
              </dd>
            </div>

            <div className='bg-blue-50 flex flex-col rounded-lg px-4 py-8 text-center'>
              <dt className='text-gray-500 order-last text-lg font-medium'>
                Official Addons
              </dt>

              <dd className='text-blue-600 text-4xl font-extrabold md:text-5xl'>
                24
              </dd>
            </div>

            <div className='bg-blue-50 flex flex-col rounded-lg px-4 py-8 text-center'>
              <dt className='text-gray-500 order-last text-lg font-medium'>
                Total Addons
              </dt>

              <dd className='text-blue-600 text-4xl font-extrabold md:text-5xl'>
                86
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default SponsorSection
