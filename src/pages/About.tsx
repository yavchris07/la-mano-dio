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
          resume = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore." 
        />

        < CardAbout 
          title = "Objectif Global"
          resume = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore." 
        />

        <CardAbout 
          title = "Objectif specifique"
          resume = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore." 
        />

        <CardAbout 
          title = "Mission"
          resume = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore." 
        />

        <CardAbout 
          title = "Vision"
          resume = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt totam, molestias accusamus obcaecati eum eligendi minima veniam quo rem sed dolor alias, a sapiente quisquam deleniti consequatur velit! Dolore." 
        />
        <hr />
      </div>
      
    </>
  )
}

export default About