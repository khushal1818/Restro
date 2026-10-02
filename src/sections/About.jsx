// import React from 'react'
// import Animated from '../components/Animated'

// const About = () => {
//   return (
//     <section id='about' className='px-auto mt-44'>
//         <div className='flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto'>
//             {/* LeftSide: Main Image */}
//               <Animated scale={0.8} y={0}>
//                 <img src="/assets/about.png" alt="Dish" className='max-w-137 w-full h-full
//                 object-cover rounded-3xl' />
//               </Animated>

//             {/* RightSide: Content Details */}
//             <div>
//               <Animated scale={0.8} y={0} className="flex items-center gap-2">
//                <img src="/assets/iconL.png" alt="iconLeft" />
//                <span className='font-medium uppercase'>
//                 Crafted with Passion
//                </span>
//                <img src="assets/iconR.png" alt="iconRight" />
//               </Animated>

//                <Animated>
//                <h2 className='mt-5  text-4xl md:text-5xl text-balance'>
//                   Experience dining beyond expectations
//                </h2>
//               </Animated>

//                 <Animated delay={0.2}>
//                <p className='mt-4 text-zinc-600 max-w-sm'>
//                   We combine fresh local ingredients, creative recipes and elegant presentation to
//                   deliver a memorable experience with every visit.
//                </p>
//           </Animated>


//        <Animated>
//                <p className='mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex
//                items-center gap-3 w-fit'>
//                   <img src="/assets/about.png" alt="Bistro Royale Location Preview"
//                   className='size-15 rounded-lg object-cover shrink-0' />
//                   <div className='flex flex-col gap-2'>
//                     <p>Bistro Royale, NY</p>
//                     <a href="#">View on Map</a>
//                   </div>
//                </p>
//           </Animated>

//             </div>

//         </div>
//     </section>
//   )
// }

// export default About



import React from 'react'
import Animated from '../components/Animated'

const About = () => {
  return (
    <section
      id="about"
      className="mt-28 px-4 py-16 md:mt-36 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">

        {/* Left Side: Main Image */}
        <Animated scale={0.8} y={0} className="w-full md:w-1/2">
          <img
            src="/assets/about.png"
            alt="Dish"
            className="h-full max-h-[600px] w-full max-w-[548px] rounded-3xl object-cover"
          />
        </Animated>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2">

          {/* Small Heading */}
          <Animated
            scale={0.8}
            y={0}
            className="flex items-center gap-3"
          >
            <img
              src="/assets/iconL.png"
              alt=""
              className="h-4 w-auto"
            />

            <span className="text-sm font-medium uppercase tracking-wider text-orange-600">
              Crafted with Passion
            </span>

            <img
              src="/assets/iconR.png"
              alt=""
              className="h-4 w-auto"
            />
          </Animated>

          {/* Main Heading */}
          <Animated>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight text-balance text-black md:text-5xl">
              Experience dining beyond expectations
            </h2>
          </Animated>

          {/* Description */}
          <Animated delay={0.2}>
            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-600">
              We combine fresh local ingredients, creative recipes and elegant
              presentation to deliver a memorable experience with every visit.
            </p>
          </Animated>

          {/* Location Card */}
          <Animated>
            <div className="mt-9 flex w-fit items-center gap-4 rounded-xl bg-orange-500 p-2 pr-7 text-white">

              <img
                src="/assets/about.png"
                alt="Bistro Royale Location Preview"
                className="size-16 shrink-0 rounded-lg object-cover"
              />

              <div className="flex flex-col gap-1">
                <p className="font-medium">
                  Bistro Royale, NY
                </p>

                <a
                  href="#"
                  className="text-sm underline underline-offset-2 transition hover:text-orange-100"
                >
                  View on Map
                </a>
              </div>

            </div>
          </Animated>

        </div>
      </div>
    </section>
  )
}

export default About