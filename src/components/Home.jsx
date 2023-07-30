import React from 'react'
import vg from "../assets/2.png";
import {AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"


const Home = () => {
  return (


    <>
        <div className='home' id='home'>

                <main>
                 <h1>Tech-Star</h1>
                <p>Solution to all your problems</p>
                </main>

        </div>  

        <div id='home2'>
            <img src={vg} alt="Graphics" />

            <div>
            <p>
            We are your one and only solution to the tech problems you face everyday.
            We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>

        </div>

        <div className="home3" id='about'>

             <div>
                <h1>Who are we?</h1>
                <p>
                Welcome to Tech-Star, your premier destination for cutting-edge technology solutions. We are a dynamic and innovative company dedicated to providing our clients with the most advanced and reliable tech solutions in the industry. With a team of highly skilled experts and a passion for pushing the boundaries of what's possible, we are committed to delivering transformative technology that drives success for businesses of all sizes.

                At Tech-Star, we understand that in today's fast-paced and competitive world, staying ahead of the curve is essential. That's why we specialize in developing and implementing tailored tech solutions that address the unique needs and challenges faced by our clients. Whether you're seeking to streamline your operations, enhance your customer experience, or improve your overall efficiency, we have the expertise and experience to deliver results.

                Our comprehensive range of services spans across various domains, including software development, cloud computing, artificial intelligence, data analytics, cybersecurity, and more. We leverage the latest advancements in technology and employ best practices to design customized solutions that align with your business objectives. From concept to implementation, our team works closely with you to ensure seamless integration and maximum impact.

                What sets us apart is our unwavering commitment to quality, innovation, and customer satisfaction. We strive to exceed expectations and go the extra mile to deliver solutions that empower our clients to thrive in the digital era. Our strong emphasis on research and development keeps us at the forefront of emerging technologies, enabling us to offer you state-of-the-art solutions that future-proof your business.

                Whether you're a startup looking to launch your first product or an established enterprise aiming to optimize your operations, we have the expertise and resources to make it happen. Our track record of successful projects and satisfied clients is a testament to our dedication and expertise in the field. When you choose Tech-Star, you're choosing a trusted partner committed to your success.

                Experience the difference that innovative technology solutions can make for your business. Contact us today to discuss your needs, and let us unlock the power of technology to drive your growth and achieve your goals. Welcome to the future with Tech-Star.
                </p>
             </div>

        </div>

        <div className="home4" id='brands'>

            <div className='brands'>
                <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay:"0.4s"
                        }}>
                             <AiFillGoogleCircle />
                             <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:"0.8s"
                        }}>
                             <AiFillAmazonCircle />
                             <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:"1.2s"
                        }}>
                             <AiFillYoutube />
                             <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay:"1.6s"
                        }}>
                             <AiFillInstagram />
                             <p>Instagram</p>
                        </div>
                    </article>

            </div>

        </div>
        

    </>
  );
};

export default Home