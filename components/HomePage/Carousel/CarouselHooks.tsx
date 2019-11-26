/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, useTransition, animated, config } from 'react-spring';
import {
  faMediumM,
  faFacebook,
  faLinkedinIn,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutubeSquare,
  faReact,
  faJsSquare,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import s from './Carousel.scss';

const Carousel: React.FunctionComponent = () => {
  const [items] = useState([
    {title: 'GraphQL changed the way we create software', id: 0},
    {title: 'Learn about GraphQL language for free in the browser', id: 1},
    {title: 'Learn how to be Lead frontend engineer with GraphQL driven React and Apollo applications', id: 2}
  ]);
  const [index, setIndex] = useState(0);

  const heightProps = useSpring({
    config: config.slow,
    from: { height: '0px' },
    to: { height: '700px' }
  });
  const opacityProps = useSpring({
    config: config.molasses,
    delay: 400,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  const fadingTextPropsTransition = useTransition(items[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120 },
  });

  useEffect(() => void setInterval(() => setIndex(state => (state + 1) % items.length), 4000), []);

  return(
    <animated.section className={s.Carousel} style={heightProps}>
      <animated.div className={s.Carousel__Wrapper} style={opacityProps}>
        <div className={s.Carousel__Row}>
          <div className={s.Carousel__LeftColumn}>
            <div>
              <a
                title="Learn GraphQL with GraphQL courses and articles"
                href="http://graphqlmastery.com"
              >
                <picture>
                  <source
                    // eslint-disable-next-line import/no-unresolved
                    srcSet={require('../../../images/graphql_mastery_white_middle.png?webp')}
                    type="image/webp"
                  />
                  <source
                    srcSet={require('../../../images/graphql_mastery_white_middle.png')}
                    type="image/png"
                  />
                  <img
                    className={s.Carousel__GraphQLMasteryLogo}
                    alt="Learn GraphQL, React and Node.js with GraphQL courses and articles"
                    src={require('../../../images/graphql_mastery_white_middle.png')}
                  />
                </picture>
              </a>
              <div style={{ width: '100%', height: '60px' }}>
                {fadingTextPropsTransition.map(({ item, props, key }) => (
                  <animated.div key={key} style={{ ...props, position: 'absolute' }}>
                    <p
                      style={{
                        height: '60px',
                        display: 'block',
                        textAlign: 'center',
                        color: 'white',
                      }}
                    >
                      {item.title}
                    </p>
                  </animated.div>
                ))}
              </div>
              <div className={s.Carousel__TechnologyStack}>
                <div className={s.Carousel__Technology}>
                  <FontAwesomeIcon icon={faJsSquare} />
                </div>
                <div className={s.Carousel__Technology}>
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <div className={s.Carousel__Technology}>
                  <FontAwesomeIcon icon={faNode} />
                </div>
              </div>
            </div>
          </div>
          <div className={s.Carousel__RightColumn}>
            <svg width="80%" viewBox="0 0 331 364" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M165.5 61.334L157.454 60.242L55.7762 234.78C60.1652 238.602 63.0912 243.516 64.3713 248.976H266.629C267.909 243.516 270.835 238.602 275.224 234.78L173.546 60.242L165.5 61.334ZM66.7486 264.446L145.018 310.492C150.322 305.578 157.636 302.666 165.5 302.666C173.364 302.666 180.678 305.578 185.982 310.492L264.251 264.446H66.7486ZM165.5 364C157.352 364 149.537 360.779 143.776 355.045C138.014 349.31 134.777 341.533 134.777 333.424L136.423 323.232L57.7879 276.822C52.1188 283.374 43.8895 287.378 34.563 287.378C26.4148 287.378 18.6004 284.157 12.8388 278.422C7.07717 272.688 3.84033 264.911 3.84033 256.802C3.84033 242.424 13.5326 230.412 26.8823 226.954V133.952C11.7039 131.95 0 119.028 0 103.376C0 95.2667 3.23684 87.4896 8.99846 81.7555C14.7601 76.0214 22.5745 72.8 30.7227 72.8C40.7807 72.8 49.5586 77.532 55.2276 84.812L135.875 38.766L134.777 30.576C134.777 13.65 148.493 0 165.5 0C182.507 0 196.223 13.65 196.223 30.576L195.125 38.766L275.772 84.812C281.441 77.532 290.219 72.8 300.277 72.8C308.426 72.8 316.24 76.0214 322.002 81.7555C327.763 87.4896 331 95.2667 331 103.376C331 119.028 319.296 131.95 304.118 133.952V226.954C317.467 230.412 327.16 242.424 327.16 256.802C327.16 264.911 323.923 272.688 318.161 278.422C312.4 284.157 304.585 287.378 296.437 287.378C287.111 287.378 278.881 283.374 273.212 276.822L194.577 323.232L196.223 333.424C196.223 341.533 192.986 349.31 187.224 355.045C181.463 360.779 173.648 364 165.5 364ZM143.555 52.052L61.2624 99.008L61.6282 103.376C61.6282 116.298 53.5818 127.4 42.2437 131.95L42.7923 227.5L143.555 52.052ZM187.445 52.052L288.208 227.5L288.756 131.95C277.418 127.4 269.372 116.298 269.372 103.376L269.738 99.008L187.445 52.052Z"
                fill="#E535AB"
                fillOpacity="0.5"
              />
            </svg>
          </div>
        </div>

        <div className={s.Carousel__Footer}>
          <div>
            <div className={s.Carousel__SocialMedia}>
              <div className={s.Carousel__SocialMedia__Link}>
                <a href="https://medium.com/atheros" title="Medium" aria-label="Medium">
                  <FontAwesomeIcon icon={faMediumM} />
                </a>
              </div>
              <div className={s.Carousel__SocialMedia__Link}>
                <a href="https://www.facebook.com/atherosai" title="Facebook" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
              <div className={s.Carousel__SocialMedia__Link}>
                <a
                  href="https://www.youtube.com/channel/UCKz-I9KL0I4kC4yF_BaiWSg"
                  title="Youtube"
                  aria-label="Youtube"
                >
                  <FontAwesomeIcon icon={faYoutubeSquare} />
                </a>
              </div>
              <div className={s.Carousel__SocialMedia__Link}>
                <a href="https://twitter.com/atherosai" title="Twitter" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <div className={s.Carousel__SocialMedia__Link}>
                <a
                  href="https://www.linkedin.com/company/atheros-intelligence"
                  title="Linkedin"
                  aria-label="Linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className={s.Carousel__SocialMedia__Link}>
                <a href="https://github.com/atherosai" title="Github" aria-label="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div className={s.Carousel__SocialMedia__Link}>
                <a
                  href="https://www.instagram.com/atherosai/"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div className={s.Carousel__PoweredBy}>
                Powered by
              <a
                href="https://atheros.ai"
                title="Atheros Intelligence"
                aria-label="Atheros Intelligence"
              >
                <picture>
                  <source
                    // eslint-disable-next-line import/no-unresolved
                    srcSet={require('./../../../images/atheros_logo.png?webp')}
                    type="image/webp"
                  />
                  <source srcSet={require('../../../images/atheros_logo.png')} type="image/png" />
                  <img
                    style={{ width: 120 }}
                    alt="Atheros Intelligence"
                    src={require('../../../images/atheros_logo.png')}
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </animated.section>
  );
};
export default Carousel;
