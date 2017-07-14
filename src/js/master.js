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
      username: '',
      linkedinlink: '',
      twitterlink: '',
      network: '',
      networkUrl: ''
    }
  },

  methods: {
    download() {
      if(this.signatureInfo.network == 'skype'){
        this.$set(this.signatureInfo, 'networkUrl', 'memes')
      }
      // H4ck3R1n00
      window.location.href = `data:application/octet-stream;base64,${btoa(template(this.signatureInfo))}`
    },
    preview() {
      if(this.signatureInfo.network == 'skype'){
        this.$set(this.signatureInfo, 'networkUrl', 'memes')
      }
      this.seePreview = !this.seePreview
      this.$refs.preview.innerHTML = template(this.signatureInfo)
    }
  }
})
