import siteMetaData from '../../utils/siteMetaData';
import { LinkedinIcon, GithubIcon } from '../icons';

const SocialMenu = () => {
    return (
        <div className="hidden sm:flex items-center">
            <a href={siteMetaData.linkedin}
                    target="_blank" rel="noreferrer" className="inline-block w-6 h-6 mr-4">
                <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetaData.github}
                    target="_blank" rel="noreferrer" className="inline-block w-6 h-6 mr-4">
                <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
        </div>
    )
}

export default SocialMenu;
