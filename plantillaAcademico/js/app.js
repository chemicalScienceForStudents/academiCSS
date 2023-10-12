const { createApp, ref } = Vue

createApp({
    data(){
        return{
            test:'hola2',
            headerText:"Header text from vue 3",
            footerText:"Footer text from vue 3",
        }
    },
    mounted(){
        console.log(this.test)
        let response=this.exampleFunction("Hola desde vue3")
        console.log(response)
    },
    methods:{
        /**
         * This is a example for a function
         * @param {String} saludo - String to say hello
         * @returns {String}
         */
        exampleFunction(saludo){
            console.log("say "+saludo)
            return "all good"
        }
    }
}).mount('#app')