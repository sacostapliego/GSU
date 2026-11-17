import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import SocialIconButton from './common/SocialIconButton'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__links">
        <SocialIconButton
          href="https://github.com/sacostapliego/"
          icon={FaGithub}
          ariaLabel="GitHub Profile"
        />
        <SocialIconButton
          href="https://www.linkedin.com/in/steven-acosta-pliego/"
          icon={FaLinkedin}
          ariaLabel="LinkedIn Profile"
        />
        <SocialIconButton
          href="mailto:sacostapliego@gmail.com"
          icon={IoMdMail}
          ariaLabel="Email Contact"
        />
      </div>
    </footer>
  )
}
