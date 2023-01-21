<script lang="ts">
    export let date: Date;

    function toString(date: Date): string {
        return `${date.getDate().toString().padStart(2, '0')}`;
    }
</script>

<span>{toString(date)}</span>
