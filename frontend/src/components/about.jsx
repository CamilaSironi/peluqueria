import photo from '../images/me.png'

function About() {

    return(
        <section id="about">
            <div className="photo"><img src={photo} /></div>
            <div className="text">
                <h3>¡Hola!</h3>
                <p>Soy Natalia, una apasionada peluquera con muchos años de experiencia en el mundo de la belleza 
                    y el cuidado del cabello. Mi pasión por la peluquería comenzó desde muy joven, y a lo largo de los años 
                    he perfeccionado mis habilidades para ofrecer a mis clientas los mejores servicios y una experiencia única.</p>

                <h3>Mis Habilidades:</h3>
                <p>Corte y Peinado: Desde cortes clásicos hasta los estilos más modernos y vanguardistas.</p>
                <p>Coloración: Experta en técnicas de coloración, mechas, balayage y más.</p>
                <p>Tratamientos Capilares: Ofrezco tratamientos personalizados para el cuidado y la salud del cabello.</p>
                <p>Asesoramiento de Imagen: Te ayudo a encontrar el estilo que mejor se adapte a tu personalidad y necesidades.</p>
                <p>Mi objetivo es que cada mujer que visite mi salón se sienta especial, salga con una sonrisa y se vea espectacular.</p> 

                <p>Vení y dejate mimar en mi salón. ¡Estoy para hacer que te sientas y te veas increíble!</p>
                </div>
        </section>
    )
}

export default About