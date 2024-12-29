import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            timeSpan: "Februray 2024 - July 2024",
            companyName: "Coding Ninjas",
            role: "TA of React",
            description: "Assisted students in understanding complex concepts and provided guidance on assignments and projects."
        },
        {
            id: 2,
            timeSpan: "August 2024 - October 2024",
            companyName: "Techplement",
            role: "Frontend Developer Intern",
            description: "Designed and implemented scalable APIs and interactive UI components, improving user engagement by 25%."
        }
    ];

    return (
        <div name='experience' className='py-16 bg-gray-100 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>Experience</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {experiences.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                <div className='flex justify-between items-center mb-3'>
                                    <h3 className='font-semibold text-red-500 text-lg'>{item.companyName}</h3>
                                    <Briefcase className='text-red-400' />
                                </div>
                                <p className='text-sm text-gray-700 mb-3'>{item.timeSpan}</p>
                                <h4 className='font-medium text-gray-800 mb-2'>{item.role}</h4>
                                <p className='text-gray-600'>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='swiper-pagination my-10 gap-1 relative'></div>
            </div>
        </div>
    );
};

export default Experience;
