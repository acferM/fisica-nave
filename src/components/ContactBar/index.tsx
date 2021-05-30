import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { Container, LinksContainer, EmailContainer } from './styles';

export function ContactBar(): JSX.Element {
  return (
    <Container>
      <LinksContainer>
        <span>SEGUE A GENTE!</span>
        <div>
          <a href="https://instagram.com">
            <FiInstagram color="#fff" />
          </a>
          <a href="https://facebook.com">
            <FiFacebook color="#fff" />
          </a>
          <a href="https://youtube.com">
            <FiYoutube color="#fff" />
          </a>
        </div>
      </LinksContainer>

      <EmailContainer>
        <strong>QUER FALAR COM A GENTE ?</strong>
        <p>FISICA3C@NAVE.ORG.BR</p>
      </EmailContainer>
    </Container>
  );
}
