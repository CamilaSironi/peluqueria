import { Carousel, Image } from "antd";
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';

function Hero() {
    return(
        <>
            <Carousel autoplay>
                <div>
                <Image
                    width={1366}
                    height={500}
                    src={car1}
                />
                </div>
                <div>
                <Image
                    width={1366}
                    height={500}
                    src={car2}
                />
                </div>
                <div>
                <Image
                    width={1366}
                    height={500}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                </div>
                <div>
                <Image
                    width={1366}
                    height={500}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                </div>
            </Carousel>
        </>
    )
}

export default Hero