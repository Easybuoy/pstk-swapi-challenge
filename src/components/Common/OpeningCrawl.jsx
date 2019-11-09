/* eslint-disable jsx-a11y/no-distracting-elements */
// import React, { useEffect, useState, useRef } from 'react';
// import { Power2, TimelineLite } from 'gsap';

// import { OpeningCrawl as StyledOpeningCrawl } from '../../styles';
// import starWarsLogo from '../../assets/images/star-wars.png';

// function OpeningCrawl() {
//   let intro = useRef();
//   let logo = useRef();
//   let content = useRef();
//   useEffect(() => {
//     // const tl = new TimelineLite();

//     // tl.to(intro.current, 4.5, { opacity: 1, delay: 1 }).to(intro.current, 1.5, {
//     //   opacity: 0
//     // });

//     // const tl = new TimelineLite();
//     // tl.to(intro.current, 4.5, { opacity: 1, delay: 1 })
//     //   .to(intro.current, 1.5, { opacity: 0 })
//     //   .set(logo.current, { opacity: 1, scale: 2.75 })
//     //   .to(logo.current, 8, {
//     //     scale: 0.05,
//     //     ease: Power2.easeOut
//     //   })
//     //   .to(logo.current, 1.5, { opacity: 0 }, '-=1.5');

//     const tl = new TimelineLite();
//     tl.to(intro.current, 4.5, { opacity: 1, delay: 1 })
//       .to(intro.current, 1.5, { opacity: 0 })
//       .set(logo.current, { opacity: 1, scale: 2.75 })
//       .to(logo.current, 8, {
//         scale: 0.05,
//         ease: Power2.easeOut
//       })
//       .to(logo.current, 1.5, { opacity: 0 }, '-=1.5')
//       .to(content.current, 200, { top: '-170%' });

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <StyledOpeningCrawl className="container">
//       <section className="intro" ref={intro}>
//         <p>
//           A long time ago, in a galaxy far,
//           <br /> far away....
//         </p>
//       </section>

//       <section className="logo" ref={logo}>
//         <img src={starWarsLogo} alt="Code Wars logo" />
//       </section>

//       <section className="crawl">
//         <div className="content" ref={content}>
//           <h1 className="title">Episode 7</h1>
//           <h2 className="subtitle">THE APP AWAKENS</h2>
//           <p>
//             The Development Team Lead has vanished. In her absence, the sinister
//             FUNCTIONAL BUG has risen from the ashes of the CI Tool and will not
//             rest until the last developer has been destroyed.
//           </p>
//           <p>
//             With the support of the QA TEAM, the Software Developer leads a
//             brave RESISTANCE. He is desperate to find his Lead and gain her help
//             in restoring peace and justice to the repository.
//           </p>
//           <p>
//             The Developer has sent his most daring editor theme on a secret
//             mission to the production branch, where an old ally has discovered a
//             clue to the Lead’s whereabouts....
//           </p>
//         </div>
//       </section>
//     </StyledOpeningCrawl>
//   );
// }

// export default OpeningCrawl;

import React from 'react';
import { OpeningCrawl as StyledOpeningCrawl } from '../../styles';

function OpeningCrawl({opening_crawl}) {
  return (
    <StyledOpeningCrawl >
        <marquee behavior="scroll" direction="left">
          {opening_crawl}
        </marquee>
     

    </StyledOpeningCrawl>
  );
}

export default OpeningCrawl;
