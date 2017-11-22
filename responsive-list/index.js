
window.addEventListener("load", function(){

  const listElement = document.querySelector(".list-container")
  const contents = new ContentsBuilder()

  const sections = exampleList()

  for(let j in sections){
    contents.append(sections[j].title, j.toString())
    sections[j].rootElement.id=j
    listElement.append(sections[j].rootElement)
  }
})
