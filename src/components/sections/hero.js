import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi! My name is</h1>;
  const two = <h2 className="big-heading">Rashi Pandey</h2>;
  const three = <h3 className="medium-heading">MSCS | Software Engineer | Tech Enthusiast</h3>;
  const four = (
    <>
      <p>
        <b>Glad to e-meet you!</b>
      </p>

      <p>
        I am Rashi Pandey, an alumnus of {' '} <a href="https://www.ufl.edu/">
        University of Florida</a> {' '} currently spearheading impactful development initiatives at {' '}
        <a href="https://www.breathing.ai/">Breathing.ai</a>.
      </p>


      <p>
    Hey there! I'm a software developer who loves to wear many hats.<br />
    My coding journey started with Java and Python, but I've since branched out to play with React, Node.js, and Spring Boot.<br />
    What really gets me excited is working with others to create something awesome.<br />
    Whether it's building a sleek app that users love or crafting behind-the-scenes magic that keeps everything running smoothly, I'm all in.
</p>

<p>
I'm not just about writing code; I'm about solving problems and turning ideas into reality. So, if you've got a cool project in mind or a tricky problem to solve, let's chat! I'm always up for a new challenge and would love to see how we can make some digital magic together.
</p>
    </>
  );
  // const five = (
  //   <a
  //     className="email-link"
  //     href="https://chandrikadeb7.gumroad.com"
  //     target="_blank"
  //     rel="noreferrer">
  //     Check out my products!
  //   </a>
  // );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
