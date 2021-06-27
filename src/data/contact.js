import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/MEDHAT-ALHADDAD',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/medhat-alhaddad/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.facebook.com/medhat.alhaddad.9/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://stackoverflow.com/users/10482087/medhat-alhaddad',
    label: 'StackOverflow',
    icon: faStackOverflow,
  },
  {
    link: 'https://dev.to/medhatalhaddad/',
    label: 'DEV',
    icon: faDev,
  },
  {
    link: 'https://www.youtube.com/channel/UCM4pGoi0sOQBSNeE54whSVQ',
    label: 'YouTube',
    icon: faYoutube,
  },
  {
    link: 'mailto:medhat.alhaddad@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
