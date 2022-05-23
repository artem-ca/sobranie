import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import BackButton from '../../../components/BackButton'
import PesronsList from '../../../components/PersonsList'
import RulersOptions, {
    SelectRulerTitle,
    TestCounter,
} from '../../../components/RulersOptions'
import { useState } from 'react'

export default function Persons({ emperors, tsars }) {
    // var { pathname } = useRouter()
    // const paths = pathname.split('/')
    // console.log(paths)

    return (
        <section className='mx-auto'>
            <BackButton />

            <h2 className='text-center text-2xl font-bold sm:text-3xl'>
                Личности
            </h2>

            <div className='m-auto mt-10 max-w-5xl'>
                <RulersOptions />

                <TestCounter />
                {/* <PesronsList rulerTitle='Император' /> */}
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // Get files from the post dir
    const rulersFiles = fs.readdirSync(path.join('posts/rulers'))

    // Get slug and frontmatter from posts
    const rulers = rulersFiles.map((filename) => {
        // Create slug
        const slug = filename.replace('.mdx', '')

        // Get frontmatter
        const markdownWithMetadata = fs.readFileSync(
            path.join('posts/rulers', filename),
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
            emperors: rulers.filter(
                (emperor) => emperor.frontmatter.rulerTitle === 'Император'
            ),
            tsars: rulers.filter(
                (emperor) => emperor.frontmatter.rulerTitle === 'Царь'
            ),
        },
    }
}
