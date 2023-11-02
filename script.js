const { createApp } = Vue

// console.log(axios)

createApp({
    data() {
        return {
            message: 'User Mail',            
            arrayMail: [],
            stringMail:'',
            num: 10
        }
    },
    methods: {
        getMail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    console.log(res, res.data)
                    const mail = res.data.response
                    this.stringMail = mail
                    this.arrayMail.push(this.stringMail)
                    
                })
        },
        getTenItems(number) {
            for (let i = 0; i < number; i++){
                this.getMail()
            }
        }

    },
    created() {
        this.getTenItems(this.num)
    },
}).mount('#app')

// //utilizzo delle API fake create apposta
// axios
// //per una richiesta http servono sempre metodo (es .get) e url (ed i parametri che ci servono)
// // possiamo anche scrivere : axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
// // mandadolo a capo sarà più leggibile
//     .get('https://flynn.boolean.careers/exercises/api/random/mail')
//     // passiamo la funzione al metodo then
//     .then((res) => {
//         //res contiene un oggetto con la risposta del server
//         console.log(res, res.data)
//     })

// console.log(axios)


