const SectionBlockImages = () => {
  return (
    <div className="SectionCardsFlexImage">
      {sectioncardsinfo.map(({ src, alt }) => (
        <img className="SectionCardsImages" src={src} alt={alt}></img>
      ))}
    </div>
  );
};

export default SectionBlockImages;
