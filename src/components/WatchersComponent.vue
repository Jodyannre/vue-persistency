<template>
    <h1>Notas</h1>
    <input type="text" v-model="note" placeholder="Digite uma nota" />
</template>
  
<script lang="ts" setup>
    //Option API
    /*
    import { ref, defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                note: '',
            }
        },
        watch: {
            note: function (val, oldVal) {
                alert('Nuevo valor: ' + val + ' Antiguo valor: ' + oldVal);
                localStorage.setItem('note', val);
            }
        }
    });*/

    // Composition API
    /*
    import { defineComponent, ref, watchEffect } from 'vue';
    
    export default defineComponent({
        name: 'WatchersComponent',
        setup() {
            const note = ref("")

            watchEffect(() => {
                //localStorage.setItem('note', note.value);
                alert('Nuevo valor: ' + note.value);
            })

            return {
                note
            }
        }
    })
    */

    // COmposition con setup, y sin setup es igual
   import { ref, watch} from 'vue'

   const note = ref('')
    watch(note, (newVal, oldVal) => {
         alert('Nuevo valor: ' + newVal + ' Antiguo valor: ' + oldVal);
         //localStorage.setItem('note', newVal);
    })
</script>
  
<style scoped>
</style>
  