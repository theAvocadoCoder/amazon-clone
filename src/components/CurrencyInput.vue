<template>
    <input 
    disable
    class="bg-transparent"
    ref="inputRef"
    type="text"
    :value="formattedValue"
    />
</template>

<script>
    import { watch } from "vue"
    import { useCurrencyInput } from "vue-currency-input"
    
    export default {
        name: 'CurrencyInput',
        props: {
            modelValue: Number,
            options: Object
        },
        setup (props) {
            const { formattedValue, inputRef, setOptions, setValue } = useCurrencyInput(props.options)

            watch(() => props.modelValue, (value) => {
                setValue(value)
            })

            watch(() => props.options, (options) => {
                setOptions(options)
            })

            return { inputRef, formattedValue }
        }
    }
</script>