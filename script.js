

const intersectObserver = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting){intersectObserver.unobserve(entry.target)}
        })
    },
    {
        threshold:0
    }
)

const elements = document.querySelectorAll(".animate")

elements.forEach(element => intersectObserver.observe(element))


const element = document.getElementById("three");

  // Verifica se o elemento foi encontrado
  if (element) {
    // Remove a classe "from-right" do elemento
    element.classList.remove("from-right");}
