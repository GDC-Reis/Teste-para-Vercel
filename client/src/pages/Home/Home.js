//css
import './Home.css';

//Hooks
import {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';

//imagens
import img1 from '../../images/andrzj-brown-U0qJT3ynHOE-unsplash.jpg';
import img2 from '../../images/bianca-ackermann-mTNVvQvmoKs-unsplash.jpg';
import img3 from '../../images/danika-perkinson-ZhA9vZQPTeE-unsplash.jpg';
import img4 from '../../images/klara-avsenik-5cFqO92t7pM-unsplash.jpg';

//Components
import Contato from '../../components/Contato';
import EsqueceuSenha from '../../components/EsqueceuSenha';
import Footer from '../../components/Footer';

const images = [img1, img2, img3, img4]


const Home = () => {

    const carousel = useRef();
    const [width, setWidth] = useState (0);

    useEffect(()=> {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    },[]);



    return ( 
        
        <section className='main'>

            <h1 className='Title_breve_resumo'>Breve Resumo de Nossa História</h1>
            <span className='SpanEffect_Title_Breve_Resumo'/>
            <div className='Container_intro'>
                <div className='Container_intro_text'>
                    <p>Na pacata cidade de Américo Brasiliense, a família Silva se dedica apaixonadamente à produção de mel de forma caseira. 
                        O patriarca, Sr. José, lidera o negócio com décadas de experiência na apicultura. Sua esposa, Dona Maria, é a mestra na arte de manipular as colmeias com destreza e cuidado. 
                        Juntos, eles moldaram uma tradição que agora está sendo transmitida para a próxima geração por seu filho, Lucas.
                        Ao contrário das práticas industriais, a família Silva optou por um método mais artesanal na produção de mel. Suas colmeias estão estrategicamente localizadas em áreas rurais, onde as abelhas têm acesso a uma variedade exuberante de flores silvestres. Esse ambiente diversificado resulta em um mel único, refletindo as nuances das estações e da flora local.
                        O processo de produção é uma dança meticulosa entre os membros da família. Sr. José, com seu conhecimento vasto, coordena o manejo das colmeias, enquanto Dona Maria e Lucas cuidam da extração e filtragem do mel. A tradição oral é passada de geração em geração, e cada gesto é executado com carinho e respeito pelas abelhas e pela natureza.
                        O mel da família Silva é verdadeiramente um produto artesanal, sem aditivos ou processos industrializados. O resultado é um néctar dourado, puro e saboroso, que encontra seu caminho para as mesas locais. A qualidade está acima da quantidade, e cada frasco carrega não apenas o mel, mas também a história e dedicação de uma família apaixonada pelo ofício.</p>
                </div>

            </div>
            
            <div className='Container_Amotra_Produtos'>
                <div className='AmostraDeProdutos'>
                    <h1 className='AmostraDeProdutos__titlo'>Sobre Nossos Produtos</h1>
                    <span className='Effect_Span_Amotra_Produtos'></span>

                    <div className='Container_Amostra_Produtos__Text_Intro'>
                        <p>Desfrute da pureza da natureza com nosso mel 100% puro, sem adição de açúcar. 
                            Cada garrafa de vidro de 1 litro contém o néctar das flores, lacrada com rosca para preservar sua autenticidade. 
                            Sinta o sabor genuíno da natureza em cada gota, uma experiência autêntica diretamente da colmeia para sua mesa.</p>
                    </div>
                    
                    {/* <div className='carousel__main'> */}
                    <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                        <motion.div className='inner' drag="x" dragConstraints={{right: 0, left: -width}} initial={{x: 200}} animate={{x: 0}} transition={{duration: 0.8}}>

                            {images.map(image =>(
                                <motion.div className='item' key={image}>
                                <img src={image} alt='Texto Alternativo'/>
                                </motion.div>))}

                        </motion.div>
                    </motion.div>
                    {/* </div> */}
                    
                    <NavLink className='Button_Comprar' to="/register">Comprar</NavLink>
                </div>
            </div>
            
            <div className='Contato_Container'>
                <div className='Contato_Container_Chieldrem'>
                    <Contato/>
                </div>
            </div>

            <div className='Footer_Home'>
                <Footer/>
            </div>

        </section>
        
     );
}
 
export default Home;