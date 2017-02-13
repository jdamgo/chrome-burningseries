
bs.keycodes = { moveNext: 78 }

bs.lastKey = {
  deltaTime: 100,

  code: null,
  time: null,
}

bs.moveNext = function() {
  chrome.tabs.query({ "active": true, "lastFocusedWindow": true }, tabs => {
    let url = tabs[0].url
    url = url.match(/(bs\.to\/serie\/[\w-]+\/\d+\/)(\d+)\-[\w-]+/)
    let baseUrl = url[1]
    let currEpi = $(`.episodes > .epiInfo.${url[2] + 1}`)
    console.assert(currEpi.length === 1)
    console.debug(currEpi.children("> a").first().attr("href"))
  })
}

bs.handleMoveNext = function(keydownTime) {
  if (this.lastKey.code != this.keycodes.moveNext || this.lastKey.time - keydownTime > this.lastKey.deltaTime) {
    this.lastKey.code = this.keycodes.moveNext
    this.lastKey.time = keydownTime
    return
  }
  this.lastKey.code = null

  this.moveNext()
}

bs.handleKeydown = function(event) {
  console.log("asdf")
  switch (event.which) {
  case this.keycodes.moveNext:
    this.handleMoveNext(new Date())
    break
  default:
    throw new Error("unknown keycode")
  }
}

/*
$(document).ready(() => {
  console.log("asdf")
  $(document).keydown(bs.handleKeydown)
})
*/
