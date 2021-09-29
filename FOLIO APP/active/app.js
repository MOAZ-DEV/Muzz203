const hashs = [
    { hash: '#skills&coding', view: 'sec01', pos: '0' },
    { hash: '#introduce', view: 'sec02', pos: '50' },
    { hash: '#beintouch', view: 'sec03', pos: '150' }

]

const app = Vue.createApp({
            data() {
                return {
                    nav: true,
                    sec01: hashs[0].view,
                    sec02: hashs[1].view,
                    sec03: hashs[2].view
                }
            },
            methods: {
                hashs
            },
        
        })
app.mount('#app')
const gebi = ele => document.getElementById(ele)
gebi('ta').addEventListener('keyup', () => this.styleMedia.height = `${this.height}px`)

/*
const gebi = ele => document.getElementById(ele)
const trans_request = () => {

    hashs.forEach(da => {

        
        

        if (da.hash = document.location.hash) {

            da.view = true

        } else {

            da.view = false

        }

    });
}
*/

