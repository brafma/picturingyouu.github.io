import staticInfo from '../Assets/staticInfo.json';
import Banner from '../Components/Homepage/Banner';
import FormModule from '../Components/Homepage/FormModule';

function Homepage(){

    return(
        <section id="homepage">
            <Banner instaPics={staticInfo.instaPics} />
            <FormModule />
        </section>
    )
}

export default Homepage;