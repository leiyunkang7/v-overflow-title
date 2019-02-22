Vue.directive('overflow-title', function(el, { value, oldValue }){

  if(value !== oldValue){

    typeof(el.overflowTitleMouseover) === 'function' && el.removeEventListener('mouseover', el.overflowTitleMouseover)

    el.overflowTitleMouseover = function () {

      let span = document.createElement('span')
    
      span.innerText = this.innerText
    
      document.body.appendChild(span)
    
      const { width } = this.getBoundingClientRect()
    
      if (width < span.offsetWidth || this.parentNode.offsetWidth < this.parentNode.scrollWidth) {
        this.setAttribute('title', value)
      }else{
        this.setAttribute('title', '')
      }
    
      document.body.removeChild(span)
    }

    el.addEventListener('mouseover', el.overflowTitleMouseover)
  }
})
