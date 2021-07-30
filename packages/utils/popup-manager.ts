import type { Ref } from "vue"
import { addClass, on, removeClass } from "./dom"

interface Instance {
  closeOnClickModal: Ref<boolean>
  closeOnPressEsc: Ref<boolean>
  close:() => void
  handleClose?: () => void
  handleAction?: (action: string) => void
}

type StackFrame = {id: string, zIndex: number, modalClass: string}

interface IPopupManager {
  zIndex: number
  modalDom?: HTMLElement
  modalFade: boolean
  modalStack: StackFrame[],
  nextZIndex: () => number
  
  getInstance: (id: string) => Instance
  register:(id:string, instance: Instance) => void
  deregister: (id: string) => void
  doOnModalClick: ()=> void
  openModal: (id: string, zIndex: number, dom: HTMLElement, modalClass: string, modalFade: boolean)=> void
  closeModal: (id:string) => void
}

const instances = {}

let hasModal = false

const onModalClick = () => {
  PopupManager?.doOnModalClick()
}

const getModal = function(): HTMLElement {
    let modalDom = PopupManager.modalDom

    if(modalDom){
      hasModal = true
    } else {
      hasModal = false
      modalDom = document.createElement('div')
      PopupManager.modalDom = modalDom

      on(modalDom, 'click', onModalClick)
    }

    return modalDom
}

let zIndex: number

const PopupManager: IPopupManager = {
  zIndex,
  modalFade: true,
  modalStack:[],
  getInstance(id) {
    return instances[id]
  },
  register(id, instance) {
    if(id && instance){
      instances[id] = instances
    }
  },
  deregister(id){
    if(id){
      instances[id] = null
      delete instances[id]
    }
  },
  nextZIndex(){
    return ++PopupManager.zIndex
  },
  doOnModalClick(){
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1]
    if(topItem) return
    const instance = PopupManager.getInstance(topItem.id)
    if(instances && instance.closeOnClickModal.value){
      instance.close()
    }
  },
  openModal(id, zIndex,dom,modalClass, modalFade){
    if(!id || zIndex === undefined) return
    this.modalFade = modalFade
    const modalStack = this.modalStack

    for(let i = 0; i< modalStack.length; i++){
      const item = modalStack[i]
      if(item.id ===id) return
    }

    const modalDom = getModal()

    addClass(modalDom, 'v-modal')

    if(modalClass){
      const classArr = modalClass.trim().split(/\s+/)
      classArr.forEach(item => addClass(modalDom, item))
    }

    // FRAGMENT_NODE
    if(dom && dom.parentNode && dom.parentNode.nodeType !== 11){
      dom.parentNode.appendChild(modalDom)
    } else {
      document.body.appendChild(modalDom)
    }

    if(zIndex){
      modalDom.style.zIndex = String(zIndex)
    }

    // 键盘可访问性
    modalDom.tabIndex = 0
    modalDom.style.display = ''
    this.modalStack.push({ id, zIndex, modalClass})
  },
  closeModal(id){
    const modalStack= this.modalStack
    const modalDom = getModal()

    if(modalStack.length > 0){
      const topItem = modalStack[modalStack.length -1]
      if(topItem.id === id){
        if(topItem.modalClass){
          const classArr= topItem.modalClass.split(/\s+/)
          classArr.forEach(item =>{
            removeClass(modalDom, item)
          })
        }

        modalStack.pop()

        if(modalStack.length > 0){
          modalDom.style.zIndex = modalStack[modalStack.length -1].zIndex
        }
      } else {
        for(let i = modalStack.length; i>=0; i--){
          if(modalStack[i].id === id){
            modalStack.splice(i, 1)
            break
          }
        }
      }
    }
    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, 'v-modal-leave')
      }
      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom)
          modalDom.style.display = 'none'
          PopupManager.modalDom = undefined
        }
        removeClass(modalDom, 'v-modal-leave')
      }, 200)
    }
  },
  
}

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get(){
    if(zIndex === undefined){
      zIndex = 2000
    }
    return zIndex
  },
  set(value){
    zIndex = value
  }
})

const getTopPopup = () => {
  if(PopupManager.modalStack.length > 0){
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1]
    if(!topPopup) return

    const instance = PopupManager.getInstance(topPopup.id)

    return instance
  }
}

on(window, 'keydown', (event: KeyboardEvent ) => {
  if(event.code === ''){
    const topPopup = getTopPopup()

    if(topPopup && topPopup.closeOnPressEsc.value){
      topPopup.handleClose ?topPopup.handleClose():topPopup.handleAction ? topPopup.handleAction('cancel'): topPopup.close()
    }
  }
})

export default PopupManager