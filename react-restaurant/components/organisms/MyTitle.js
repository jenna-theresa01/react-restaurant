import Image from 'next/image'

export default function MyTitle () {

    return(
    <div>
        <h1>Books & Bites</h1>
        <Image
        src="/img/open-book.png"
        width={50}
        height={50}
        alt="Open book"
        />
     </div>
    )
}