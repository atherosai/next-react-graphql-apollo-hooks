import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMediumM,
  faLinkedinIn,
  faGithub,
  faInstagram,
  faYoutubeSquare,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import s from './HomePageFooter.scss';

export const HomePageFooter = () => {
  return (
    <footer className={s.Footer}>
      <div className={s.Footer__Wrapper}>
        <div className={s.Footer__Row}>
          <div>
            <div className={s.Footer__Column}>
              <h2 className={s.Footer__Headline}>Contact</h2>
              <div>
                <a title="david@atheros.ai" href="mailto: david@atheros.ai">
                  david@atheros.ai
                </a>
              </div>
              <div>
                <a
                  title="Address on Google maps"
                  href="https://www.google.com/maps/place/71-75+Shelton+St,+London+WC2H+9JQ,+Velk%C3%A1+Brit%C3%A1nie/@51.5149089,-0.1257351,17z/data=!3m1!4b1!4m5!3m4!1s0x487604ccaaa0b0b7:0xbe144a0754857ae1!8m2!3d51.5149056!4d-0.1235464"
                >
                  71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={s.Footer__Column}>
              <h2 className={s.Footer__Headline}>Products</h2>
              <div>
                <Link href="https://graphqlmastery.com/blog">
                  <a title="Blog">Blog</a>
                </Link>
              </div>
              <div>
                <Link href="https://graphqlmastery.com/training/live-graphql-training-javascript-react-and-node-js">
                  <a title="Live GraphQL Training">Live Training</a>
                </Link>
              </div>
              <div>
                <Link href="https://graphqlmastery.com/course/graphql-language">
                  <a title="GraphQL language course">GraphQL Language course</a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className={s.Footer__Column}>
              <h2 className={s.Footer__Headline}>General</h2>
              <div>
                <Link href="https://graphqlmastery.com/terms-and-conditions">
                  <a title="Terms and Conditions">Terms and conditions</a>
                </Link>
              </div>
              <div>
                <Link href="https://graphqlmastery.com/privacy-policy">
                  <a title="Privacy Policy ">Privacy Policy</a>
                </Link>
              </div>
              <div>
                <Link href="https://graphqlmastery.com/cookie-policy">
                  <a title="Privacy Policy ">Cookie Policy</a>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className={s.Footer__Column}>
              <h2 className={s.Footer__Headline}>Social media</h2>
              <div className={s.Footer__SocialMedia}>
                <div className={s.Footer__SocialMedia__Link}>
                  <Link href="https://www.facebook.com/atherosai">
                    <a title="Facebook" aria-label="Facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </Link>
                </div>
                <div className={s.Footer__SocialMedia__Link}>
                  <Link href="https://twitter.com/atherosai">
                    <a title="Twitter" aria-label="Twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Link>
                </div>
                <div className={s.Footer__SocialMedia__Link}>
                  <Link href="https://medium.com/graphql-mastery">
                    <a title="Medium" aria-label="Medium">
                      <FontAwesomeIcon icon={faMediumM} />
                    </a>
                  </Link>
                </div>
                <div className={s.Footer__SocialMedia__Link}>
                  <Link href="https://www.linkedin.com/company/atheros-intelligence/">
                    <a title="Linkedin" aria-label="Linkedin">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </Link>
                </div>
                <div className={s.Footer__SocialMedia__Link}>
                  <Link href="https://github.com/atherosai">
                    <a title="Github" aria-label="Github">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </Link>
                </div>
                <div className={s.Footer__SocialMedia__Link}>
                  <Link href="https://www.youtube.com/channel/UCKz-I9KL0I4kC4yF_BaiWSg">
                    <a title="Youtube" aria-label="Youtube">
                      <FontAwesomeIcon icon={faYoutubeSquare} />
                    </a>
                  </Link>
                </div>
                <div className={s.Footer__SocialMedia__Link}>
                  <Link href="https://www.instagram.com/atherosai/">
                    <a title="Instagram" aria-label="Instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.Footer__Bottom}>
          <LazyLoad heigh={80}>
            <a
              title="Atheros Intelligence"
              aria-label="Atheros Intelligence"
              href="http://atheros.ai"
            >
              <picture>
                <source
                  // eslint-disable-next-line import/no-unresolved
                  srcSet={require('../../../images/atheros_logo_black.png?webp')}
                  type="image/webp"
                />
                <source
                  srcSet={require('../../../images/atheros_logo_black.png')}
                  type="image/jpeg"
                />
                <img
                  alt="Atheros Intelligence logo"
                  src={require('../../../images/atheros_logo_black.png')}
                />
              </picture>
            </a>
          </LazyLoad>
          {`© ${new Date().getFullYear()}`}
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooter;
