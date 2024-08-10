<script>
    import { onMount } from "svelte";

    onMount(() => {
        const item = window.location.href.split("/")[window.location.href.split("/").length - 1];

        const res = confirm(`Hey there! You seem to of put a invalid page do you want to try a general page?`);

        if (res) {
            window.location.href = `/docs/general/${item}`;
        } else {
            window.location.href = "/";
        }
    })
</script>