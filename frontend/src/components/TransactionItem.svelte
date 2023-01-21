<script lang="ts">
    import { AccordionItem } from 'carbon-components-svelte';

    import type { Transaction } from '$schemas/transaction.schema';
    import Currency from '$components/Currency.svelte';
    import Date from '$components/Date.svelte';

    export let transaction: Transaction;
</script>

<AccordionItem>
    <svelte:fragment slot="title">
        <div class="title">
            <div>
                <Date date={transaction.date} />
                <span>{transaction.name}</span>
            </div>
            <div>
                <span>
                    <Currency value={transaction.amount} colored />
                </span>
            </div>
        </div>
    </svelte:fragment>
</AccordionItem>

<style>
    .title {
        display: flex;
        justify-content: space-between;

        margin-right: 1em;
    }

    .title > :first-child {
        display: flex;
        gap: 1em;
    }
</style>
