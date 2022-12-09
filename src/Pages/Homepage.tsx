import staticInfo from '../Assets/staticInfo.json';
import Banner from '../Components/Homepage/Banner';
import FormModule from '../Components/Homepage/FormModule';
import PresetsMoudule from '../Components/Homepage/PresetsModule';

function Homepage(){
    return(
        <section id="homepage">
            <Banner instaPics={staticInfo.instaPics} />
            <FormModule />
            <PresetsMoudule homePresets={staticInfo.homePresets} />
        </section>
    )
}

export default Homepage;