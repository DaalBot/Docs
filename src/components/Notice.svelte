<script>
    /**
     * @type {"info" | "warning" | "error" | "success"}
     */
    export let type;

    /**
     * @type {string}
    */
    export let height = "10em";

    /**
     * @type {string}
    */
    export let padding = "1em";

    // This is a hack to allow for the extension of the style of the notice component
    export let extStyle = "";
</script>

<div class="noticecomp" style="height: {height}; {extStyle}">
    <span class="noticecomp-stripe noticecomp-stripe-{type}" style="height: {height};" />
    <div class="noticecomp-content" style="padding: {padding}">
        <slot />
    </div>
</div>

<style>
    .noticecomp {
        display: block;
        border-radius: 5px;
        background-color: #2f2f2f;
        margin-right: 1em;
        padding-left: 0px;
    }

    .noticecomp-stripe {
        display: block;
        width: 1.5em;

        position: absolute;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        z-index: 1;
    }

    .noticecomp-stripe-info {
        background-color: #007bff;
    }

    .noticecomp-stripe-warning {
        background-color: #ffc107;
    }

    .noticecomp-stripe-error {
        background-color: #dc3545;
    }

    .noticecomp-stripe-success {
        background-color: #28a745;
    }

    .noticecomp-content {
        display: inline-block;
        margin-left: 1.5em;

        padding-left: 0.5em;

        font-size: 1.5em;
    }
</style>