
import Image from "next/image"
import image from '../../../../public/images/fotoPerfil.png'


const PagHome = () => {
    return(
        <>
        <section className="body-home">
            <div className="name-photo">
                <Image src={image} alt="Foto de Perfil" className="img" />
                <div>
                    <h2>Diego Leonardo</h2>
                    <span>Desenvolvedor de Software</span>
                </div>
            </div>

            <div className="description">
                <p>
                Olá! Sou Diego Leonardo, um desenvolvedor de software entusiasmado e apaixonado
                pela criação de soluções tecnológicas inovadoras. Com uma sólida formação em
                Tecnologia da informação e anos de experiência em desenvolvimento de software,
                estou comprometido em transformar ideias em realidade por meio de código.
                                </p>
            </div>

            <div className="links-redes">
                <div className="redes">
                    <a target="_blank" href="https://github.com/diegoleodev"><i className="bi bi-github"></i>Github</a>
                </div>

                <div className="redes">
                    <a target="_blank" href="https://www.linkedin.com/in/diegoleodev/"><i className="bi bi-linkedin"></i>Linkedin</a>
                </div>

                <div className="redes">
                    <a target="_blank" href="https://www.instagram.com/diegoo_leo/"><i className="bi bi-instagram"></i>Instagram</a>
                </div>
            </div>

            <div className="contatos">
                <div className="contato">
                    <a href="mailto:diegoleonardo912@gmail.com"><i className="bi bi-arrow-up-right"></i>Email</a>
                </div>

                <div className="contato">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5561983771104&text=SUA%20MENSAGEM%20AQUI"><i className="bi bi-arrow-up-right"></i>WhatsApp</a>
                </div>
            </div>

        </section>
        </>
    )
}

export default PagHome;