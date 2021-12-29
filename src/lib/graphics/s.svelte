<script>
    import { expoOut } from "svelte/easing";
    import { expand, spin, spinOut } from "./custom.js";
    import { arrows } from "./shapes.js";
    import { onMount } from 'svelte'

    let visible = false;
    let duration = 750;

    onMount(()=>{
        visible = true
    })

</script>

<style>
    svg {
        width: 350px;
        height: 350px;
    }
</style>

{#if visible}
    <svg
        in:spin={{ duration }}
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient
                id="b"
                x1="206.6"
                x2="139.8"
                y1="232.7"
                y2="146.4"
                gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#0075ff" />
                <stop offset="100%" stop-color="#00abff" />
            </linearGradient>
            <path
                id="a"
                d={arrows}
                in:expand={{ duration: duration * 2, easing: expoOut }}
                style="stroke: url(#b); fill: url(#b); stroke-width: 0;" />
        </defs>
        <use fill="url(#b)" xlink:href="#a" />
    </svg>
{/if}
