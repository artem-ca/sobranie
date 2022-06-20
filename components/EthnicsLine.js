import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import EthnicCard from './EthnicCard'

// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

export default function EthnicsLine({ ethnics }) {
    return (
        <section className='flex select-none'>
            {/* {ethnics
                                .sort(sortForEthnics)
                                .slice(0, 2)
                                .map((post, index) => (
                                    <EthnicCard key={index} post={post} />
                                ))} */}
            <Swiper
                slidesPerView={1}
                navigation={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className=''
            >
                {/* {ethnics.sort(sortForEthnics).map((post, index) => (
                    <EthnicCard key={index} post={post} />
                ))} */}
            </Swiper>
        </section>
    )
}

export async function getStaticProps() {
    const ethnicsFiles = fs.readdirSync(path.join('posts/ethnics'))

    const ethnics = ethnicsFiles.map((filename) => {
        const slug = filename.replace('.mdx', '')

        const markdownWithMetadata = fs.readFileSync(
            path.join('posts/ethnics', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMetadata)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            ethnics: ethnics,
        },
    }
}
