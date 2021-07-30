import { h, Comment } from 'vue'

export default function renderArrow(showArrow: boolean) {
  return showArrow
    ? h(
        'div',
        {
          ref: 'arrowRef',
          class: 'popper-arrow',
          'data-popper-arrow': '',
        },
        null,
      )
    : h(Comment, null, '')
}
