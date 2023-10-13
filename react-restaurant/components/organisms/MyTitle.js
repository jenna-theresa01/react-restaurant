import Image from 'next/image'

export default function MyTitle () {

    return(
    <div>
        <h1>Books & Bites</h1>
        <Image
        src="/img/open-book.png"
        width={100}
        height={100}
        alt="Open book"
        />
     </div>
    )
}