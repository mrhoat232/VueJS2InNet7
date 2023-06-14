<template>
    <div class="modal fade " :class="animation" tabindex="-1" aria-hidden="true" :data-bs-backdrop="staticBs" data-bs-keyboard="false" role="dialog">
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
            animation: { type: String, 'default': () => '' },
            staticBs: { type: String, 'default': () => 'static' },
           
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
            }
        }
    }
</script>