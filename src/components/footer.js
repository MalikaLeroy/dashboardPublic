import '../assets/css/footer.css';
import React, { useState, useEffect } from 'react';

export const DateLocal = () => {
  let date1 = new Date();
  let dateLocale = date1.toLocaleString('fr-FR', { year: 'numeric', });
  return (
    <>
      <span className="localDate">{dateLocale}</span>
    </>
  )
}

export const Footer = (props) => {
  const [scrollToTop, setScrollToTop] = useState(true);
  useEffect(() => {
    if (scrollToTop) {
      setScrollToTop(false);
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }
  }, [scrollToTop, setScrollToTop]);

  const [scrollFixedElement, setScrollFixedElement] = useState("");
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
    if (scrollY > 200) {
      setScrollFixedElement("js-sticky")
    } else {
      setScrollFixedElement("")
    }

  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <footer>
      <div id="js_goToTop" href="#goToHeader" className={scrollFixedElement} onClick={() => setScrollToTop(true)}></div>
      <div>Malika Leroy - Tous droits réservés, reproduction interdite - <DateLocal /></div>
    </footer>
  )
}
