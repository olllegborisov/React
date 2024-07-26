import { Element } from 'react-scroll';
import Description from "../Description"
import Advantages from "../Advantages"
import Services from "../Services"
import ServicesDescription from "../ServicesDescription"
import Order from '../Order'
import Form from "../Form"
import Faq from '../Faq';



const Main = () => {

  return (
    <>
        <Description />
        <Advantages />
        <Services />
        <ServicesDescription />
        <Order />
        <Element name="form">
          <Form />
        </Element>
        <Faq />
    </>
  )
}

export default Main

