import Link from 'next/link'
import * as styles_var from '../Styles/Variables'
import SocialIcons_Style from '../Styles/SocialIcons_Style'
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function SocialIcons(props) {

    const instagram = 'https://instagram.com/yomi185'
    const mail = 'mailto:abayomi.ikuru@gamil.com'

    return (
        <SocialIcons_Style>
            <div className="icons">
                <a href={instagram} ><InstagramIcon className="social-icon hover-transition" style={{ color: styles_var.grey_color }}/></a>
                <a href={mail} ><MailOutlineIcon className="social-icon" style={{ color: styles_var.grey_color }} /></a>
            </div>
        </SocialIcons_Style>
    )
}

export default SocialIcons
