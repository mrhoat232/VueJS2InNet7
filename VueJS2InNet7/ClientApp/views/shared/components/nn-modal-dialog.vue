<template>
    <div :id="'modal-dialog' + changerNumber" class="modal fade" tabindex="-1" aria-hidden="true" :class="animation" data-bs-keyboard="false" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document" :class="sizeClass">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            visible: { type: Boolean, default: false },

            /**
             * The size of modal component.
             * @type {{type: String, default: (function(): string)}}
             */
            size: { type: String, 'default': () => '' },
            changerNumber: { type: Number, 'default': () => 1 },
            animation: { type: String, 'default': () => 'flip' },

        },
        computed: {
            /**
             * Calculate modal size class.
             * @return {*}
             */
            sizeClass() {
                if (this.size) {
                    return [`modal-${this.size}`]
                }
                return {}
            }
        },
        data() {
            return {

            }
        },
        methods: {
            /**
             * Hide modal
             */
            closeModal() {
                $(this.$el).modal('hide');
            },
            /**
             * Show Modal
             */
            openModal() {
                // show modal on mount
                $(this.$el).modal('show');
            }
        },
        destroyed() {

        },
        watch: {
            visible: function (nval) {
                if (nval) {
                    this.openModal();
                } else {
                    this.closeModal();
                }
            },
            changerNumber: function (nval) {
                this.openModal();
            }
        }
    }
</script>