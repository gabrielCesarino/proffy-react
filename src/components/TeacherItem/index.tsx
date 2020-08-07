import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1290741314481422336/MUwcoT9Z_400x400.jpg" alt="Jenifer Araujo"/>
                        <div>
                            <strong> Jenifer Araujo </strong>
                            <span> Artes </span>
                        </div>
                    </header>
                    <p>
                        Instrutora de artes, especialista em pinturas, sendo o seu método favorito a aquarela.
                        <br /> <br />
                        Apaixonada por misturar tintas e formas, de forma livre e sem deixar os fundamentos artísticos de lado. Artista hippie.
                    </p>
                    <footer>
                        <p>
                        Preço/Hora
                        <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem