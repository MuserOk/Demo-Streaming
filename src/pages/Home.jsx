import Card from "../components/Card"

const sections = [{
    to: "Series",
    image: "/images/placeholder.png",
    title: "SERIES"
},
{
    to: "Movies",
    image: "/images/placeholder.png",
    title: "MOVIES"
}
]

export default function Home() {
    return (
        <>
            <p className='bg-[#414141] text-sm text-white py-2 sm:pl-10 pl-2 md:pl-20 sm:text-lg font-medium '>
                Popular Titles
            </p>
            <div className='flex flex-col sm:flex-row m-auto w-51 gap-4 max-w-105  sm:ml-10 md:ml-20 pt-10 pb-10 sm:pb-20 md:pb-30'>
                {sections.map((e) => (
                    <Card key={e.title} {...e} />
                ))}
            </div>
        </>

    )
}
