import { useEffect, React } from "react";
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Carousel = () => {
    useEffect(() => {
        const config = {
            type: 'carousel',
            startAt: 0,
            perView: 4,
            gap: 10,
            breakpoints: {
                1280: {
                    perView: 3,
                },
                1024: {
                    perView: 2,
                },
                768: {
                    perView: 1,
                },
            },
        };

        new Glide('.glide', config).mount();
    }, []);

    const myArray = [
        require("../assets/img/carousel/1.jpg"),
        require("../assets/img/carousel/2.jpg"),
        require("../assets/img/carousel/3.jpg"),
        require("../assets/img/carousel/4.jpg"),
        require("../assets/img/carousel/5.jpg")
    ];
    return(
        <div className="glide flex items-center justify-center w-full h-[350px] bg-[#ECECEC] mt-0">
            <div className="glide__track w-[90%] pl-[30px]"  data-glide-el="track">
                <ul className="glide__slides">
                    {myArray.map((image, index) => (
                        <li key={index} className="glide__slide">
                            <img src={image} alt={`Slide ${index + 1}`} className="w-[350px] h-[250px]"/>
                        </li>
                    ))}
                </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left left-4" data-glide-dir="<">
                <div class="h-9 w-9 bg-gray-800 rounded-xl flex justify-center items-center my-auto hover:bg-red-500 duration-300 ease-in-out">
                <i class="fa-solid fa-circle-left text-white text-2xl"></i>
                </div>
                </button>
                <button class="glide__arrow glide__arrow--right right-4" data-glide-dir=">">
                <div class="h-9 w-9 bg-gray-800 rounded-xl flex justify-center items-center my-auto hover:bg-red-500 duration-300 ease-in-out">
                    <i class="fa-solid fa-circle-right text-white text-2xl"></i>
                </div>
                </button>
            </div>
        </div>
    )
}

export default Carousel;