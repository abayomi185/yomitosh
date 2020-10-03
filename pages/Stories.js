import Link from 'next/link'
import Layout from './Layout';
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import { AnimatePresence } from 'framer-motion'
import GalleryGridStyle from '../Styles/GalleryGridStyle'
import * as styles_var from '../Styles/Variables'
import Masonry from 'react-masonry-css'

//JSON Image data
import stories_data from '../public/json/stories_data.json'

const breakpointColumnsObj = {
    default: 3,
    1366: 2,
    [styles_var.tabletSizeValue]: 1
};

export default function Stories(props) {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    const router = useRouter()
    const currentPath = router.pathname

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
    }, [])

    function goToGallery(title) {
        router.push({
            pathname: `${currentPath}/${title}`,
            // pathname: `${currentPath}/Gallery`,
            // query: {title: title}
        })
    }

    const Stories = Object.entries(stories_data.stories).map(([key, value]) => {
        if (value.config == "single") {
            return (
                <div key={key}
                    // className="grid-item"
                    className="gallery-item"
                    // onClick={() => push(element.image, element.alt)}
                    onClick={() => {
                        goToGallery(key)
                    }}
                >
                    <div className="rectangle">
                        {value.thumbnail_images.map((thumbnail, index) => {
                            return (
                                <div key={index} className="thumbnail-div-single" style={{ backgroundImage: `url(${thumbnail})` }}>
                                    {/* <img className={`image${index}`} src={thumbnail} /> */}
                                </div>
                            )
                        })}
    
                    </div>
                    <h1 class="hover-transition" >{value.title}</h1>
                </div>
            );
        } else {
            return (
                <div key={key}
                    // className="grid-item"
                    className="gallery-item"
                    // onClick={() => push(element.image, element.alt)}
                    onClick={() => {
                        goToGallery(key)
                    }}
                >
                    <div className="rectangle">
                        {value.thumbnail_images.map((thumbnail, index) => {
                            return (
                                <div key={index} className="thumbnail-div" style={{ backgroundImage: `url(${thumbnail})` }}>
                                    {/* <img className={`image${index}`} src={thumbnail} /> */}
                                </div>
                            )
                        })}
    
                    </div>
                    <h1 class="hover-transition">{value.title}</h1>
                </div>
            );
        }
    });


    return (

        <GalleryGridStyle>
            {/* <h1>This is my domain!</h1> */}
            {/* <h1>It seems like I'm still developing this page. Please check again soon.</h1> */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="gallery-grid"
                columnClassName="gallery-grid-column"
            >
                {Stories}
            </Masonry>
        </GalleryGridStyle>

    )
}