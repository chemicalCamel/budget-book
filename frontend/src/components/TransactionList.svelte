<script lang="ts">
    import { onMount } from 'svelte';
    import { Accordion } from 'carbon-components-svelte';

    import sampleData from '../../../data/sample-transactions.json';

    import TransactionItem from '$components/TransactionItem.svelte';
    import { transactionSchema, type Transaction } from '$schemas/transaction.schema';

    let transactions: Array<Transaction> = [];

    onMount(() => {
        sampleData.forEach(($) => {
            try {
                transactions.push(transactionSchema.parse($));
            } catch (error) {
                // TODO error service
                console.log(error);
            }
        });

        transactions = transactions;
    });
</script>

<Accordion>
    {#each transactions as transaction}
        <TransactionItem {transaction} />
    {/each}
</Accordion>
