import React from 'react';

const SocialIcon = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
  <a href={href} className="w-9 h-9 md:w-11 md:h-11 bg-[#1a1a1a] rounded-[0.6rem] md:rounded-xl flex items-center justify-center text-white hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative w-full min-h-screen bg-[#fdfdfd] flex flex-col justify-end py-20 md:py-24 lg:py-28 pb-20 md:pb-24 lg:pb-32 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full z-10 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mb-4">
          {/* Left Blue Box */}
          <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] aspect-[1/0.85] md:aspect-auto md:h-[400px] lg:h-[480px] rounded-[2rem] lg:rounded-[2.5rem] bg-gradient-to-b from-[#1349a6] via-[#1f73d3] to-[#4ea0e9] shadow-inner p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative">
            {/* Top Logo Area */}
            <div className="flex items-center gap-3 relative z-10">
              <img 
                src="https://res.cloudinary.com/deplilexq/image/upload/v1777209164/logoipsum-383_s9n6s1.svg" 
                alt="Logo" 
                className="h-8 md:h-9 w-auto filter brightness-0 invert" 
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
              <span className="text-white text-3xl md:text-3xl font-bold tracking-tight">Kresna</span>
            </div>

            {/* Bottom Area */}
            <div className="relative z-10 mt-auto pt-8">
              <h3 className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-[1.1] mb-8">
                Smarter sales automation,<br/>
                <span className="text-white/60">powered by AI.</span>
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white/80 font-handwriting text-[1.4rem] md:text-[1.75rem] tracking-wide rotate-[-3deg] inline-block -mt-2">
                  Stay in touch!
                </span>
                <div className="flex items-center gap-2">
                  <SocialIcon>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] md:w-5 md:h-5"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                  </SocialIcon>
                  <SocialIcon>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] md:w-4 md:h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </SocialIcon>
                  <SocialIcon>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </SocialIcon>
                  <SocialIcon>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] md:w-5 md:h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Light Box */}
          <div className="w-full md:flex-1 aspect-[1/0.85] md:aspect-auto md:h-[400px] lg:h-[480px] rounded-[2rem] lg:rounded-[2.5rem] bg-[#f5f5f5] p-8 lg:p-10 flex flex-col justify-between relative">
            {/* Top Section */}
            <div className="flex flex-row justify-between items-start">
              <div className="flex gap-12 lg:gap-20">
                <div className="flex flex-col">
                  <span className="font-handwriting text-[#8c8c8c] text-xl lg:text-2xl mb-4">Navigation</span>
                  <ul className="flex flex-col gap-y-3">
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">How it works</a></li>
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">Features</a></li>
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">Testimonials</a></li>
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">FAQ</a></li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <span className="font-handwriting text-[#8c8c8c] text-xl lg:text-2xl mb-4">Company</span>
                  <ul className="flex flex-col gap-y-3">
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">Blog</a></li>
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">About</a></li>
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">Terms and Condition</a></li>
                    <li><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>

              <div className="absolute -top-12 -right-2 md:-top-16 md:-right-4 lg:-top-20 lg:-right-6 z-20">
                <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] bg-gradient-to-br from-[#60a5f8] via-[#3b82f6] to-[#2563eb] rounded-[1.75rem] md:rounded-[2.25rem] lg:rounded-[3rem] shadow-[15px_25px_30px_-5px_rgba(37,99,235,0.3),inset_0px_5px_15px_rgba(255,255,255,0.4)] flex items-center justify-center transform -rotate-[12deg] transition-transform hover:-rotate-[8deg]">
                  <img 
                    src="https://res.cloudinary.com/deplilexq/image/upload/v1777209164/logoipsum-383_s9n6s1.svg" 
                    alt="App Icon" 
                    className="h-12 md:h-16 lg:h-20 w-auto filter brightness-0 invert drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]" 
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-[60%] flex flex-col items-center">
                  <svg viewBox="0 0 40 40" className="w-5 h-5 text-[#b0b0b0] absolute -top-4 -left-3 -rotate-[20deg]" fill="currentColor">
                    <path d="M20 5C20 5 12 18 8 20C4 22 10 18 10 18L12 15M8 20L10 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-handwriting text-[#a0a0a0] text-lg md:text-[1.35rem] -rotate-6 whitespace-nowrap ml-4">
                    Feeling lucky?
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 md:mt-auto gap-8 md:gap-0">
              <span className="text-[#8c8c8c] text-[12px] md:text-[13px] whitespace-nowrap">
                © 2025 Kresna. All rights reserved.
              </span>

              <div className="flex flex-col items-start w-full md:w-auto">
                <p className="text-[#8c8c8c] text-[16px] md:text-[17px] font-medium leading-tight">AI moves fast.</p>
                <p className="text-[#1a1a1a] text-[18px] md:text-[20px] font-bold leading-tight mt-0.5 mb-3">Stay ahead with Kresna.</p>
                
                <div className="flex items-center bg-white rounded-[1rem] md:rounded-[1.25rem] p-1.5 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] w-full max-w-[320px]">
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="flex-1 bg-transparent border-none outline-none px-3 md:px-4 text-[13px] md:text-[14px] text-[#1a1a1a] w-[130px] md:w-auto placeholder-[#a0a0a0] font-medium"
                  />
                  <button className="bg-[#1a1a1a] hover:bg-black text-[#f0f0f0] text-[13px] md:text-[14px] font-semibold px-4 md:px-5 py-2.5 rounded-[0.75rem] md:rounded-[1rem] transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex justify-center items-end mt-4 md:mt-8 relative z-0 pointer-events-none select-none" style={{ marginBottom: '-6vw' }}>
          <div className="flex items-center">
            <span className="text-[28vw] font-bold tracking-tighter leading-[0.7] text-[#f0f0f0]">
              Kresna
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}