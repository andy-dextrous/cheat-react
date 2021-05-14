/* eslint-disable */
import gsap from 'gsap'

const selectionWrap = document.querySelector('.entry .selection-wrapper')
const addContentBtn = document.getElementById('add-content')
const inputWrap = document.querySelector('.entry .input-wrapper')
const submitBtn = document.getElementById('submit')
const inputs = inputWrap.querySelectorAll('.input-container')


export function addAnimationUI(target) {
  gsap.set(target, {
    autoAlpha: 0
  })
  //prevents flash of the form on load
  target.classList.remove('hidden')
  let visible = false

  function closeAnimation() {
    gsap.to(target, {
      xPercent: 100,
      yPercent: 100,
      autoAlpha: 0,
      ease: "back.in",
      duration: 0.3,
      onComplete: () => {
        resetFormDisplay()
      }
    })
  }

  addContentBtn.addEventListener("click", () => {
    if (!visible) {
      gsap.fromTo(target, {
        xPercent: 100,
        yPercent: 100
      }, {
        autoAlpha: 1,
        xPercent: 0,
        yPercent: 0,
        ease: "back.out",
        duration: 0.3,
        onComplete: () => {
          document.addEventListener("click", (e) => {
            if (e.target.classList.contains('content-wrapper') || e.target.classList.contains('topic-container') || e.target.classList.contains('search-container')) {
              closeAnimation()
              visible = false
            }
          })
        }
      })
      gsap.fromTo(selectionWrap, {
        opacity: 0
      }, {
        opacity: 1,
        delay: 0.3,
        duration: 0.2
      })
      visible = true
    } else {
      closeAnimation()
      visible = false
    }
  })
}


export function resetFormDisplay() {
  selectionWrap.classList.remove('hidden')
  inputWrap.classList.add('hidden')
  inputs.forEach(input => {
    input.classList.add('hidden')
  })
}