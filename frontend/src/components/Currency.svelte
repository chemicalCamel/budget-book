<script lang="ts">
    export let value: number;
    export let colored = false;
</script>

<span class:colored class={value < 0 ? 'negative' : 'positive'}>
    {value.toFixed(2)}&nbsp;€
</span>

<style>
    .colored.negative {
        color: #fca5a5;
    }

    .colored.positive {
        color: #86efac;
    }
</style>
