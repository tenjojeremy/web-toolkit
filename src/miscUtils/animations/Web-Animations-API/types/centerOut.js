// Keyframes should be set before used in animate()
export default ({ el, config, show, displayType = 'block' }) => {
  const keyframes = [
    {
      opacity: show ? 0 : 1,
      transform: show ? 'translateY(-20px)' : 'translateY(0)',
    },
    {
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0px)' : 'translateY(-20px)',
    },
  ]

  if (el.animate) {
    el.style.display = displayType
    const anim = el.animate(keyframes, config)
    anim.onfinish = () => {
      if (!show) el.style.display = 'none'
    }
  }
}
