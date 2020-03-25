<template>   
</template>

<script>
export default {
   name: 'classes',
   newModel(){ // vamos usar esta funcao para trocar model ddo btn criar e editar 
        editMode: false,
        this.form.reset(); 
        $('#addNew').modal('show')
    },
            
}
</script>