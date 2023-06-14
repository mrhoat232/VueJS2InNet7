<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="mb-3">VueJS 2 in .NET 7</h2>
                <h6>Xin chào. Đây là ứng dụng sử dụng VueJS trong 1 dự án .NET 7. VueJS như 1 giao diện người dùng. .NET 7 thì giống như 1 API</h6>
                <h6>Hi everybody, this is a application, it's used VueJS in .NET 7. VueJS is user interface, .NET 7 is a web API'.</h6>
                <div class="row">
                    <div class="col-6 col-md-4">
                        <div class="d-flex mt-4">
                            <div class="flex-shrink-0 avatar-xs align-self-center me-3">
                                <div class="avatar-title bg-light rounded-circle fs-16 text-primary shadow">
                                    <i class="ri-user-2-fill"></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Lead Designer / Developer :</p>
                                <h6 class="text-truncate mb-0">Ngọc nhi Family</h6>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                    <div class="col-6 col-md-4">
                        <div class="d-flex mt-4">
                            <div class="flex-shrink-0 avatar-xs align-self-center me-3">
                                <div class="avatar-title bg-light rounded-circle fs-16 text-primary shadow">
                                    <i class="ri-global-line"></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Website :</p>
                                <a href="#" class="fw-semibold">www.ngocnhi.vn</a>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end card-body-->
        </div>
        <loading :active.sync="isLoading" :is-full-page="false" :color="'#f06548'" :height="40" :width="40" :opacity="0"></loading>
        <div class="card">
            <div class="card-header border-0 rounded">
                <form @submit.prevent="frmSearchSubmit">
                    <div class="row g-2">
                        <div class="col-xl-auto  col-lg-auto d-flex align-items-end">
                            <button type="submit" class="btn btn-danger btn-label waves-effect waves-light"><i class="ri-search-eye-line label-icon align-middle fs-16 me-2"></i> Tìm kiếm</button>
                        </div>

                        <!--end col-->
                    </div>
                    <!--end row-->
                </form>
            </div>
            <div class="card-body pb-0">
                <div class="table-responsive table-card ">
                    <table class="table table-bordered table-hover align-middle">
                        <thead class="table-light text-muted">
                            <tr>
                                <th style="width: 50px" class="text-center">#</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <tr v-for="item in Items">
                                <td class="text-center">
                                    {{item.key}}
                                </td>

                                <td >
                                    {{item.Name}}
                                </td>
                                <td>
                                    {{item.Description}}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div class="card-body ">
                <nn-not-found v-if="Items.length==0" />
            </div>
        </div>
    </div>

</template>

<script>
    import Api from '../../store/api';
    export default {
        components: {
        },
        data() {
            return {
                isLoading: false,
                Items: []
            }
        },
        methods: {
            frmSearchSubmit(e) {
                e.preventDefault();
                this.loadData();
            },
            loadData() {
                this.isLoading = true;
                this.$http.get(Api.Category.GetDemo).then(r => {
                    this.loadDataSuccess(r);
                }).catch(error => {
                    this.$toast.error('Không thể kết nối tới máy chủ ', {
                        timeout: 2000
                    });
                }).finally(() => {
                    this.isLoading = false;
                });
            },
            loadDataSuccess(r) {
                this.Items = [];
                this.Items = r.data;
                let key = 1;
                this.Items.forEach(item => {
                    item.key =  key;
                    key = key + 1;
                });
            },

        },
        mounted() {
            this.loadData();
        },
    }
</script>