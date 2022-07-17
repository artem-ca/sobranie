import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function RecommendationItem() {
    return (
        <section className='w-full'>
            <div
                className='group flex h-98 cursor-pointer rounded-3xl bg-[url("/novgorodskoi.jpeg")] bg-cover
        bg-center text-center text-pale-white'
            >
                <div
                    className='flex h-full w-full place-content-center items-center 
            justify-center rounded-3xl bg-black bg-opacity-50 
            transition duration-300 ease-in-out hover:bg-opacity-[.53]'
                >
                    <div className='flex max-w-md flex-col place-content-center items-center justify-center space-y-6'>
                        <h2 className='font-display text-base font-bold'>
                            Журнал
                        </h2>
                        <h3 className='max-w-sm font-lora text-2xl font-bold'>
                            Взлет и падение Новогородской республики
                        </h3>
                        <p className='font-comfortaa text-sm'>
                            Новая статья историка Павла Лукина — о том, как в
                            средневековой Руси появилась республика, что сделало
                            ее процветающей и чем закончилась ее история
                        </p>

                        <div
                            className='flex w-20 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-1.5 opacity-90 ring-1 
                    ring-white transition duration-300 ease-in-out group-hover:opacity-70'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                class='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                stroke-width='2'
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function RecommendationBlock({}) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <RecommendationItem />
                </SwiperSlide>
                <SwiperSlide>
                    <RecommendationItem />
                </SwiperSlide>
                <SwiperSlide>
                    <RecommendationItem />
                </SwiperSlide>
                <SwiperSlide>
                    <RecommendationItem />
                </SwiperSlide>
                <SwiperSlide>
                    <RecommendationItem />
                </SwiperSlide>
                <SwiperSlide>
                    <RecommendationItem />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
