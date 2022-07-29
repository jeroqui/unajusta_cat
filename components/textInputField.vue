<template>
    <div class="field">
        <label class="label">{{name}}</label>

        <template v-if="textarea">
            <textarea class="textarea" :class="isDanger()" placeholder="e.g. Hello world" :value="value" @input="updateValue($event.target.value)"></textarea>
            <p v-if="error.error" class="help is-danger">{{error.message}}</p>
        </template>


        <div v-else class="control">
            <input class="input" :class="isDanger()" type="text" :placeholder="name"
                :value="value" @input="updateValue($event.target.value)">
            <p v-if="error.error" class="help is-danger">{{error.message}}</p>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    validationRules: Object,
    name: String,
    textarea: {
        type: Boolean,
        default: false
    },
    value: String
});

const error = validateField(value, validationRules);


function isDanger() {
    return error.error ? 'is-danger' : '';
}


function updateValue(value) {
    this.$emit("input", value);
}

</script>