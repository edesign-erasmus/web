<template>
    <details :open="open" >
        <summary :class="opened ? 'ed-elevated-025' : ''">{{title}}</summary>
        <div class="note-content ed-elevated-025">
            <!-- <slot name="notecontent" /> -->
            <slot />
        </div>
    </details>
</template>

<script>

import { ref } from 'vue';

export default {
    props : {
        title : {
            type: String, 
            default:"Note:"
        },
        open : {
            type: Boolean,
            default: false
        }
    },
    setup(props){
        const opened = ref(false);
        return { opened }
    }
}
</script>

<style scoped>
    summary {
        padding: var(--ed-base-025) var(--ed-base-05);
        /* border-top-left-radius: var(--ed-base-05);
        border-top-right-radius: var(--ed-base-05); */
        cursor:pointer;
        background-color: var(--ed-c-warning);
    }
    .note-content {
        border: 1px dotted var(--ed-c-gray-80);
        padding: var(--ed-base);
        border-bottom-left-radius: var(--ed-base-05);
        border-bottom-right-radius: var(--ed-base-05);
    }
</style>