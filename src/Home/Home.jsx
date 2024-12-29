import ProductLists from "../Components/ProductLists/ProductList"
import HeroSection from "../Components/Sections/HeroSection/HeroSection"
import NewsLetterSection from "../Components/Sections/NewsLetterSection/NewsLetterSection"
import TrustedBy from '../Components/TrustedBy/TrustedBy'

function Home({searchQuery}) {


    return (
        <>
        <div className="">
            <HeroSection  />
            <ProductLists searchQuery={searchQuery}/>
            <TrustedBy />
            <NewsLetterSection />
        </div>
        </>
    )
}

export default Home