import BannerShort from "../components/BannerShot"
import CardAbout from "../components/CardAbout";
import NavBar from "../components/NavBar";
import '../styles/about.scss'


const About = () => {
  return (
    <>
      <NavBar />
      <BannerShort title="APROPOS DE NOUS "/>
      <div className='about-card-list'>
        <CardAbout 
          title = "Qui nous sommes !"
          resume = " Depuis notre fondation, LA MANO DI DIO a été synonyme d'innovation, d'intégrité et de qualité dans le secteur du bâtiment, de l'immobilier et de l'import-export. Découvrez notre parcours, jalonné de réalisations exceptionnelles et de partenariats solides." 
        />

        < CardAbout 
          title = "Mission et Valeurs "
          resume = " Notre mission est de fournir des solutions de construction et d'immobilier de premier ordre, tout en respectant les normes les plus élevées d'intégrité, de qualité et de service à la clientèle. Chez LA MANO DI DIO, nous croyons en la transparence, l'engagement envers nos clients et la recherche de l'excellence à chaque étape." 
        />

        <CardAbout 
          title = "Notre Équipe"
          resume = " Rencontrez notre équipe dévouée de professionnels expérimentés, passionnés par la réalisation de projets exceptionnels. Chaque membre de notre équipe apporte son expertise et son engagement à chaque projet, assurant des résultats exceptionnels à nos clients." 
        />

        {/* <CardAbout 
          title = "Services"
          resume = " " 
        />

        <CardAbout 
          title = "Vision"
          resume = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore." 
        /> */}
        <hr />
      </div>
      
    </>
  )
}

export default About