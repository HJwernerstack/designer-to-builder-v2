// url=https://www.figma.com/design/iPOg3LlESlST2H8mEqSern/Figma-livestream--Designer--%3E-Builder--Community-?node-id=5-224
// source=src/components/accordion/accordion.html
// component=Accordion
import figma from 'figma'

const items = figma.selectedInstance.getSlot('Slot')

export default {
  example: figma.code`<div class="accordion">${items}</div>`,
  id: 'accordion',
}
