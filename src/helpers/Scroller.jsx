export const scrollToSection = (ref) => {
    console.log("CLICKED", ref);
    window.scrollTo({
        top:ref.current.offsetTop,
        behavior:"smooth",
    })
}
