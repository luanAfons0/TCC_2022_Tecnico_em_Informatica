let scrollpos = window.scrollY
  const header = document.querySelector("header")
  const li = document.querySelector("li")

  const add_class_on_scroll = () => header.classList.add("changs")
  const remove_class_on_scroll = () => header.classList.remove("changs")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= 50) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })