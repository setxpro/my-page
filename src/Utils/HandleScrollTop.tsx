export function scrollTop() {
  let sctrollX = window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return sctrollX;
}
