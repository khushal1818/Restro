// import React from 'react'
// import Animated from './Animated'
// import { quickLinks, sitemapLinks, socialLinks } from '../data/data'
// import { Mail, Phone } from 'lucide-react'

// const Footer = () => {
//   return (
//     <footer className='px-auto relative mt-44 overflow-hidden'>
//         <div className='max-w-7xl mx-auto'>
//             {/* Row */}
//                 <div className='flex flex-wrap gap-6 justify-between pb-8'>
//                     {/* Column 1 -Brand & Social */}
//                     <div className='flex flex-col items-start text-left'>
//                         <Animated>
//                             <img src="/assets/logo.svg" alt="logo" />
//                         </Animated>

//                         <Animated delay={0.2}>
//                             <p className='mt-3 text-sm/5.5 text-zinc-600 max-w-81.25'>
//                                 Serving freshly prepared dishes with authentic flavors, premium
//                                 ingredients  and exceptional hospitality every day.
//                             </p>
//                         </Animated>
//                         <div className='flex items-center gap-1.5 mt-6'>
//                             {socialLinks.map((item, index)=>(
//                                 <Animated key={index} delay={index * 0.05}>
//                                     <a href={item.href} className='size-7.5 rounded-full border
//                                     border-slate-300 grid place-content-center'>{item.icon}</a>
//                                 </Animated>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Column 2 - Quick Links */}
//                     <div>
//                         <p className='font-medium mb-5'>Quick Links</p>
//                         <div className='flex flex-col gap-2.5'>
//                             {quickLinks.map((link, index)=>(
//                                 <Animated key={link.name} delay={index * 0.05}>
//                                     <a href={link.name} className='text-zinc-600
//                                     hover:text-zinc-500'>
//                                         {link.name}
//                                     </a>
//                                 </Animated>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Column 3 - Got in Touch */}
//                     <div>
//                         <p className='font-medium mb-5'>Got in Touch</p>
//                         <div className='space-y-2'>
//                             <Animated>
//                                 <a href="mailto:hello@query.com" className='flex items-center gap-1 text-zinc-600
//                                 hover:text-zinc-500'>
//                                     <Mail size={16} className='shrink-0' />
//                                     hello@query.com
//                                 </a>
//                             </Animated>

//                              <Animated delay={0.2}>
//                                 <a href="tel:99-567-8641" className='flex items-center gap-1 text-zinc-600
//                                 hover:text-zinc-500'>
//                                     <Phone size={16} className='shrink-0' />
//                                     99-567-8641
//                                 </a>
//                             </Animated>
//                         </div>
//                     </div>
                    
//                     {/* Column 4 - Sitemap */}
//                     <div>
//                         <p className='font-medium mb-5'>Sitemap</p>
//                         <div className='flex flex-col gap-2.5'>
//                             {sitemapLinks.map((link, index)=>(
//                                 <Animated key={link.name} delay={index * 0.05}>
//                                     <a href={link.href} className='text-zinc-600 hover:text-zinc-500'>
//                                         {link.name}
//                                     </a>
//                                 </Animated>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className='border-t text-zinc-500 border-slate-200 py-4.5
//                 flex justify-between items-center'>
//                     <p>@ 2026. All Right Reserved.</p>
//                     <p>Designe  d by <a href="">Khushal Bhaliya</a></p>
//                 </div>
//         </div>

//         {/* Watermark Logo backdrop */}
//         <div className='absolute inset-0 text-center select-none -z-1 pointer-events-none'>
//             <span className='text-[300px] tracking-wide font-urbanist font-semibold
//             text-zinc-100/70 '>Restro</span>
//         </div>
//     </footer>
//   )
// }

// export default Footer





import React from 'react'
import Animated from './Animated'
import { quickLinks, sitemapLinks, socialLinks } from '../data/data'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative mt-44 overflow-hidden px-4">
      <div className="mx-auto max-w-7xl">

        {/* Row */}
        <div className="flex flex-wrap justify-between gap-10 pb-8">

          {/* Column 1 - Brand & Social */}
          <div className="flex flex-col items-start text-left">
            <Animated>
              <img
                src="/assets/logo.svg"
                alt="logo"
                className="w-auto"
              />
            </Animated>

            <Animated delay={0.2}>
              <p className="mt-3 max-w-[325px] text-sm leading-5.5 text-zinc-600">
                Serving freshly prepared dishes with authentic flavors,
                premium ingredients and exceptional hospitality every day.
              </p>
            </Animated>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-1.5">
              {socialLinks.map((item, index) => (
                <Animated key={index} delay={index * 0.05}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-7.5 place-content-center rounded-full
                    border border-slate-300 transition hover:border-orange-500
                    hover:text-orange-500"
                  >
                    {item.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <p className="mb-5 font-medium">
              Quick Links
            </p>

            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-zinc-600 transition hover:text-orange-500"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 3 - Get in Touch */}
          <div>
            <p className="mb-5 font-medium">
              Get in Touch
            </p>

            <div className="space-y-2">

              <Animated>
                <a
                  href="mailto:hello@query.com"
                  className="flex items-center gap-2 text-zinc-600
                  transition hover:text-orange-500"
                >
                  <Mail size={16} className="shrink-0" />
                  hello@query.com
                </a>
              </Animated>

              <Animated delay={0.2}>
                <a
                  href="tel:99-567-8641"
                  className="flex items-center gap-2 text-zinc-600
                  transition hover:text-orange-500"
                >
                  <Phone size={16} className="shrink-0" />
                  99-567-8641
                </a>
              </Animated>

            </div>
          </div>

          {/* Column 4 - Sitemap */}
          <div>
            <p className="mb-5 font-medium">
              Sitemap
            </p>

            <div className="flex flex-col gap-2.5">
              {sitemapLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-zinc-600 transition hover:text-orange-500"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col items-center justify-between gap-3
          border-t border-slate-200 py-4.5 text-sm text-zinc-500
          md:flex-row"
        >
          <p>
            © 2026. All Rights Reserved.
          </p>

          <p>
            Designed by{' '}
            <a
              href="#"
              className="text-zinc-700 transition hover:text-orange-500"
            >
              Khushal Bhaliya
            </a>
          </p>
        </div>

      </div>

      {/* Watermark Logo Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10
        select-none overflow-hidden text-center"
      >
        <span
          className="font-urbanist text-[180px] font-semibold
          tracking-wide text-zinc-100/70 md:text-[300px]"
        >
          Restro
        </span>
      </div>

    </footer>
  )
}

export default Footer