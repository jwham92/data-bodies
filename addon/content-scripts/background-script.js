
const movePos = []
const clickPos = []

window.addEventListener('mousemove', function (e) {
  movePos.push({
    x: e.clientX + window.scrollX,
    y: e.clientY + window.scrollY
  })
  const moveData = JSON.stringify(movePos)
  const move = window.localStorage
  move.setItem('moveData', moveData)
})

window.addEventListener('click', function (e) {
  clickPos.push({
    x: e.clientX + window.scrollX,
    y: e.clientY + window.scrollY
  })
  const clickData = JSON.stringify(clickPos)
  const click = window.localStorage
  click.setItem('clickData', clickData)
})
