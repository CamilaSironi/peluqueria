import photo1 from '../images/1.jpg';
import photo2 from '../images/2.jpg';
import photo3 from '../images/3.jpg';
import photo4 from '../images/4.jpg';
import photo5 from '../images/5.jpg';
import photo6 from '../images/6.jpg';

function Services() {
    return(
        <section id="services">
            <h1>SERVICIOS</h1>
            <div className='treatment'>
                <div className='lavado'>
                    <h3>LAVADO</h3>
                    <p>Lavo tu cabello con productos de alta calidad para asegurarme de que esté limpio y manejable. 
                    Este paso incluye un masaje relajante del cuero cabelludo.</p>
                </div>
                <img src={photo1} alt="washing-image" />
            </div>
            <div className='treatment '>
                <img src={photo3} alt="blow-drying-image" />
                <div className='secado'>
                    <h3>SECADO</h3>
                    <p>El secado profesional es la clave para lograr un acabado pulido y duradero. Comienzo aplicando productos específicos 
                        para proteger tu cabello del calor y mejorar la textura y el brillo y luego utilizo técnicas y herramientas avanzadas 
                        para secar tu cabello de manera precisa, logrando el estilo deseado, ya sea liso, ondulado o con volumen.</p>
                </div>
            </div>
            <div className='treatment'>
                <div className='corte'>
                    <h3>CORTE</h3>
                    <p>Un buen corte de pelo es fundamental para lograr un look fresco y renovado. 
                    En mi salón, cada corte de pelo es un proceso personalizado y detallado, diseñado para realzar tus rasgos, 
                    adaptarse a tu tipo de cabello y a tu estilo de vida. Ya sea que busques un corte clásico, moderno o algo 
                    completamente único, me aseguro de que el resultado sea perfecto.</p>
                </div>
                <img src={photo2} alt="haircut-image" />
            </div>
            <div className='treatment'>
                <img src={photo4} alt="hair-coloring-image" />
                <div className='color'>
                    <h3>COLORACIÓN</h3>
                    <p>Comenzamos con una consulta detallada para entender tus preferencias y objetivos. Discutimos las opciones de color, 
                    las tendencias actuales y cómo el color elegido complementará tu tono de piel y estilo personal. Después evaluamos 
                    la salud de tu cabello y lo preparamos adecuadamente para el proceso de coloración, asegurando resultados óptimos y 
                    duraderos.</p>
                </div>
            </div>
            <div className='treatment'>
                <div className='peinados'>
                    <h3>PEINADOS</h3>
                    <p>Un peinado profesional puede realzar tu look para cualquier ocasión especial. Ya sea un peinado elegante para una boda, 
                        un estilo moderno para una fiesta o un look natural para el día a día, vamos a encontrar el estilo perfecto.
                        Desde recogidos elaborados hasta ondas suaves o estilos estructurados, me aseguro de que el resultado sea impecable.
                        Finalizamos el peinado con productos específicos que aseguran que se mantenga perfecto durante todo el evento y te doy 
                        consejos sobre cómo mantener el peinado y posibles retoques.</p>
                </div>
                <img src={photo5} alt="hairstyle-image" />
            </div>
            <div className='treatment'>
                <img src={photo6} alt="hairstyle-image" />
                <div className='tratam'>
                    <h3>TRATAMIENTOS</h3>
                    <p>Diseñados para mejorar la salud y apariencia de tu cabello.
                        Cada tratamiento es personalizado según las necesidades específicas de cada uno, ya sea:
                    <ul>
                        <li>- Suavizar y alisar el cabello, reducir el frizz y mejorar su manejabilidad.</li>
                        <li>- Realzar el brillo natural de tu cabello, dejándolo más luminoso y saludable.</li> 
                        <li>- Restaurar la humedad en el cabello seco y dañado, dejándolo suave, flexible y revitalizado.</li>
                        <li>- Aportar nutrientes esenciales al cabello, fortaleciendo y mejorando su textura.</li> 
                        <li>- Reparar el daño causado por tratamientos químicos, calor y factores ambientales.</li> 
                        <li>- Reconstruir la estructura interna del cabello, mejorando su resistencia y elasticidad.</li> 
                    </ul>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services