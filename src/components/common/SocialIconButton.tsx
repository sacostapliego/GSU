import type { IconType } from 'react-icons'

interface SocialIconButtonProps {
  href: string
  icon: IconType
  ariaLabel: string
}

export default function SocialIconButton({ href, icon: Icon, ariaLabel }: SocialIconButtonProps) {
  return (
    <a
      className="social-icon-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <Icon className="social-icon-button__icon" aria-hidden />
    </a>
  )
}
