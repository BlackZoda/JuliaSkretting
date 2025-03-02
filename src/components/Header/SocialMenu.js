import siteMetaData from '../../utils/siteMetaData';
import { LinkedinIcon, GithubIcon } from '../icons';

const SocialMenu = () => {
    return (
        <div className="hidden md:flex items-center">
            <a href={siteMetaData.linkedin}
                    target="_blank" rel="noreferrer" className="inline-block w-6 h-6 mr-4">
                <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        </div>
    )
}

export default SocialMenu;
