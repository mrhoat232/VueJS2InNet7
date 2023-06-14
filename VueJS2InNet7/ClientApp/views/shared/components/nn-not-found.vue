<template>
    <div class="py-4 text-center">
        <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="hover" colors="primary:#405189,secondary:#0ab39c" style="width:50px;height:50px">
        </lord-icon>
        <h6 class="mt-4 text-muted">{{text}}</h6>
    </div>

</template>
<script>
    export default {
        props: {
            text: { type: String, default: 'Không tìm thấy dữ liệu!' },
        },
        data() {
            return {
            }
        },
        computed: {
            
        },
        methods: {
            
        },
        watch: {
            
        },
        created() {
            
        }
    }
</script>