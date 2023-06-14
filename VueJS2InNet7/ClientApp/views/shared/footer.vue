<template>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    {{str}} © Ngọc nhi Family.
                </div>
                <div class="col-sm-6">
                    <div class="text-sm-end d-none d-sm-block">
                        Design & Develop with <i class="mdi mdi-heart text-danger"></i> by Ngọc nhi Family
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        components: {
        },
        data() {
            return {
                str: new Date().getFullYear(),
            }
        },
        created() {
        }
    };
</script>