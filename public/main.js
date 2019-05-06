let score = 0

const updateCounterInHtml = () => {
  document.querySelector('.scoreChange').textContent = score
}
const updateCounterInHtml2 = () => {
  document.querySelector('.scoreChange2').textContent = score
}

const main = () => {
  console.log('hello there!')
  updateCounterInHtml()
}
const addOneToScore1 = () => {
  console.log('button ws clicked')
  score += 1
  updateCounterInHtml()
}
const subtractOneFromScore1 = () => {
  console.log('button was clicked')
  score -= 1
  updateCounterInHtml()
}
const addOneToScore2 = () => {
  console.log('button ws clicked')
  score += 1
  updateCounterInHtml2()
}
const subtractOneFromScore2 = () => {
  console.log('button was clicked')
  score -= 1
  updateCounterInHtml2()
}
document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToScore1)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneFromScore1)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToScore2)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneFromScore2)
