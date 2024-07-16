import photo from '../images/me.png'

function About() {

    return(
        <section className="about">
            <div className="photo"><img src={photo} /></div>
            <div className="text"></div>
        </section>
    )
}

export default About