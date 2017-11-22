
function ContentsBuilder(){
  const menuBtn = document.querySelector(".menu-icon")
  this.phoneContents = document.querySelector(".phone-contents")
  this.desktopContents = document.querySelector(".desktop-contents")

  this.togglePhoneContentsVisibility = function(){
    const style = this.phoneContents.style
    if(style.display === "none" || style.display === ""){
      style.display = "flex"
    }else{
      style.display = "none"
    }
  }.bind(this)

  menuBtn.addEventListener("click", this.togglePhoneContentsVisibility)
}

ContentsBuilder.prototype.append = function(text, linkName){

  function createContentItem(){
    const contentsItem = document.createElement("li")
    contentsItem.innerHTML = text

    const contentsAnchor = document.createElement("a")
    contentsAnchor.href = "#"+linkName.toString()
    contentsAnchor.addEventListener("click", this.togglePhoneContentsVisibility)

    contentsAnchor.append(contentsItem)
    return contentsAnchor
  }

  this.desktopContents.append(createContentItem())
  this.phoneContents.append(createContentItem())
}
