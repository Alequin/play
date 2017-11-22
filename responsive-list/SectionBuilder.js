function SectionBuilder(title){
  this.title = title

  this.rootElement = document.createElement("article")
  this.rootElement.className = "code-container"

  const titleElement = this.appendToRoot(this.title, "h2", "code-title")

  appendHrTag(this.rootElement)
  this.detailSection = this.appendToRoot(null, "div", "details-container")
  appendHrTag(this.rootElement)

  titleElement.addEventListener("click", function(){
    const style = this.detailSection.style
    if(style.display === "none" || style.display === ""){
      style.display = "block";
    }else{
      style.display = "none";
    }
  }.bind(this))
}

SectionBuilder.prototype.appendToRoot = function(innerHTML, elementType, className){
  return appendNewElement(this.rootElement, innerHTML, elementType, className)
}

SectionBuilder.prototype.appendDefinitionList = function(elements){
  const list = appendNewElement(this.detailSection, null, "dl", null)
  for(let element of elements){
    appendNewElement(list, element.title, "dt", null)
    appendNewElement(list, element.detail, "dd", "section-definition-detail")
  }
}

SectionBuilder.prototype.appendUnorderedList = function(elements){
  const list = appendNewElement(this.detailSection, null, "ul", "section-unordered-list")
  for(let element of elements){
    appendNewElement(list, element, "li", "section-list-element")
  }
}

function appendNewElement(root, innerHTML, elementType, className){
  const element = document.createElement(elementType)
  element.className = className || ""
  element.innerHTML = innerHTML || ""
  root.append(element)
  return element
}

function appendHrTag(root){
  appendNewElement(root, null, "hr")
}
