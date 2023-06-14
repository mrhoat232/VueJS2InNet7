<template>
    <div class="auth-page-wrapper py-5 d-flex justify-content-center align-items-center">

        <!-- auth-page content -->
        <div class="auth-page-content overflow-hidden p-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="text-center">
                            <img src="/assets/images/error400-cover.png" alt="error img" class="img-fluid">
                            <div class="mt-3">
                                <h3 class="text-uppercase">Sorry, Page not Found 😭</h3>
                                <p class="text-muted mb-4">Nội dung bạn yêu cầu hiện không có sẵn!</p>
                                <router-link to="/" class="btn btn-success"><i class="mdi mdi-home me-1"></i>Trở về trang chủ</router-link>
                            </div>
                        </div>
                    </div><!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end auth-page content -->
    </div>
</template>
<script>
    export default {
        methods: {
        }
    }
</script>