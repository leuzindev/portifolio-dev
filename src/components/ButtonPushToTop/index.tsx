import { animateScroll as scroll } from 'react-scroll'

export function ButtonPushToTop() {
  return <button onClick={() => scroll.scrollToTop()}>Voltar ao topo</button>
}
