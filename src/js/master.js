Vue.config.productionTip = false
import template from '../data/signature-template.handlebars'

new Vue({
  el: '#app',
  data: {
    name: 'Create your Bannerwise signature',
    seePreview: false,
    signatureInfo: {
      name: '',
      jobfunction: '',
      skype: '',
      linkedinlink: '',
      twitterlink: ''
    }
  },

  methods: {
    download() {
      // H4ck3R1n00
      window.location.href = `data:application/octet-stream;base64,${btoa(template(this.signatureInfo))}`
    },
    preview() {
      this.seePreview = !this.seePreview
      this.$refs.preview.innerHTML = template(this.signatureInfo)
      console.log(this.signatureInfo)
    }
  }
})