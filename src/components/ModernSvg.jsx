const ModernSVG = () => {
    return (
        // <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     viewBox="0 0 400 120"
        //     width="400"
        //     height="70"
        // >
        //     <defs>
        //         <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        //             <stop offset="0%" style={{ stopColor: "#0EA5E9", stopOpacity: 1 }} />
        //             <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
        //         </linearGradient>

        //         <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        //             <stop offset="0%" style={{ stopColor: "#14B8A6", stopOpacity: 1 }} />
        //             <stop offset="100%" style={{ stopColor: "#0EA5E9", stopOpacity: 1 }} />
        //         </linearGradient>

        //         <clipPath id="mainClip">
        //             <circle cx="50" cy="60" r="35" />
        //         </clipPath>
        //     </defs>

        //     <g clipPath="url(#mainClip)">
        //         <path
        //             d="M10 40 Q30 60 50 40 T90 40"
        //             stroke="url(#modernGradient)"
        //             strokeWidth="4"
        //             fill="none"
        //         />
        //         <path
        //             d="M10 50 Q30 70 50 50 T90 50"
        //             stroke="url(#modernGradient)"
        //             strokeWidth="4"
        //             fill="none"
        //         />
        //         <path
        //             d="M10 60 Q30 80 50 60 T90 60"
        //             stroke="url(#modernGradient)"
        //             strokeWidth="4"
        //             fill="none"
        //         />

        //         <rect
        //             x="15"
        //             y="30"
        //             width="70"
        //             height="70"
        //             fill="url(#accentGradient)"
        //             opacity="0.1"
        //             transform="rotate(45, 50, 60)"
        //         />
        //     </g>

        //     <circle
        //         cx="50"
        //         cy="60"
        //         r="38"
        //         stroke="#0EA5E9"
        //         strokeWidth="1"
        //         fill="none"
        //         opacity="0.3"
        //     />
        //     <circle
        //         cx="50"
        //         cy="60"
        //         r="41"
        //         stroke="#0EA5E9"
        //         strokeWidth="1"
        //         fill="none"
        //         opacity="0.2"
        //     />

        //     <text
        //         x="120"
        //         y="55"
        //         fontFamily="Arial, sans-serif"
        //         fontSize="32"
        //         fontWeight="bold"
        //         fill="#0F172A"
        //     >
        //         <tspan>Sameer</tspan>
        //     </text>

        //     <text
        //         x="120"
        //         y="85"
        //         fontFamily="Arial, sans-serif"
        //         fontSize="32"
        //         fontWeight="bold"
        //         fill="#0EA5E9"
        //     >
        //         <tspan>Srivastava</tspan>
        //     </text>

        //     <g transform="translate(320, 60)">
        //         <path
        //             d="M0 0 L40 0"
        //             stroke="url(#modernGradient)"
        //             strokeWidth="2"
        //             strokeLinecap="round"
        //         />
        //         <circle
        //             cx="20"
        //             cy="0"
        //             r="6"
        //             fill="white"
        //             stroke="url(#modernGradient)"
        //             strokeWidth="2"
        //         />
        //     </g>

        //     <g transform="translate(340, 40)" opacity="0.1">
        //         <rect
        //             x="0"
        //             y="0"
        //             width="10"
        //             height="10"
        //             fill="#0EA5E9"
        //             transform="rotate(45, 5, 5)"
        //         />
        //         <rect
        //             x="20"
        //             y="0"
        //             width="10"
        //             height="10"
        //             fill="#6366F1"
        //             transform="rotate(45, 25, 5)"
        //         />
        //     </g>
        // </svg>
        <div className="flex items-center gap-4">
        {/* Logo Symbol */}
        <svg 
          className="h-10 w-10" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M8 10L20 5L32 10L32 30L20 35L8 30Z" 
            className="fill-blue-500"
            opacity="0.9"
          />
          <path 
            d="M14 20L26 20" 
            stroke="white" 
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
  
        {/* Name */}
        <div className="flex flex-col">
          <span className="text-lg font-bold text-gray-900">Sameer</span>
          <span className="text-lg font-bold text-blue-500">Srivastava</span>
        </div>
  
        {/* Decorative Dots */}
        <div className="flex gap-2 ml-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-70"></div>
        </div>
      </div>
    );
};

export default ModernSVG;
