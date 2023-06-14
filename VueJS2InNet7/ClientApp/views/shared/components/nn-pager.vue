<template>
    <div class="row">
        <div class="col-lg-auto">
            <div class="row align-items-center">
                <div class="col-auto">
                    <select v-model="PageSize" class="form-control form-select" :class="'form-select-' + PaginationSize">
                        <option v-for="pagesize in PageSizeOptions" v-bind:value="pagesize.value">
                            {{ pagesize.text }}
                        </option>
                    </select>
                </div>
                <div class="col-auto ps-0">
                    <span class="mb-sm-0 text-muted col-auto">Hiển thị từ {{From}} tới {{To}} của {{Total}} bản ghi</span>
                </div>
            </div>
        </div>
        <div class="col-lg-auto ms-auto">
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-end pagination-separated" :class=" 'pagination-' + PaginationSize">
                    <li class="page-item" v-if="PageIndex > 1">
                        <a class="page-link" href="javascript:void(0);" @click="First">
                            <i class="ri-arrow-left-line"></i>
                            <span class="sr-only">Đầu</span>
                        </a>
                    </li>
                    <li class="page-item" v-if="PageIndex - 1 > 0">
                        <a class="page-link" href="javascript:void(0);" @click="Previous">
                            <i class="ri-arrow-drop-left-line"></i>
                            <span class="sr-only">Trước</span>
                        </a>
                    </li>

                    <li class="page-item" v-for="page in Pages" :class="ActivePage(page)">
                        <a class="page-link" href="javascript:void(0);" @click="GotoPage(page)">{{page}}</a>
                    </li>

                    <li class="page-item" v-if="PageIndex + 1 < TotalPages">
                        <a class="page-link" href="javascript:void(0);" @click="Next">
                            <i class="ri-arrow-drop-right-line"></i>
                            <span class="sr-only">Sau</span>
                        </a>
                    </li>
                    <li class="page-item" v-if="PageIndex < TotalPages">
                        <a class="page-link" href="javascript:void(0);" @click="Last">
                            <i class="ri-arrow-right-line"></i>
                            <span class="sr-only">Cuối</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</template>
<script>
    export default {
        props: {
            Total: {
                type: Number,
                default: 0
            },
            TotalCurrent: {
                type: Number,
                default: 0
            },
            PagerPrefix: {
                type: String,
                default: 'pager:'
            },
            PaginationSize: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                PageIndex: 1,
                PageSize: 10,
                PageSizeOptions: [{ value: 5, text: '5' }, { value: 10, text: '10' }, { value: 50, text: '50' }, { value: 100, text: '100' }, { value: 500, text: '500' }, { value: 1000, text: '1000' }],
            }
        },
        computed: {
            TotalPages() {
                return Math.ceil(this.Total / this.PageSize);
            },
            From() {
                return (this.PageIndex - 1) * this.PageSize + 1;
            },
            To() {
                return this.From + this.TotalCurrent - 1;
            },
            PartNumber() {
                return this.ShowItems / 2;
            },
            Pages() {
                var length = this.TotalPages;
                var current = this.PageIndex;
                var displayLength = 5;

                if (length <= 1) return [1];
                displayLength = displayLength - 2;
                var indexes = [1];
                var start = Math.round(current - displayLength / 2);
                var end = Math.round(current + displayLength / 2);
                if (start <= 1) {
                    start = 2;
                    end = start + displayLength - 1;
                    if (end >= length - 1) end = length - 1;
                }
                if (end >= length - 1) {
                    end = length - 1;
                    start = end - displayLength + 1;
                    if (start <= 1) start = 2;
                }
                if (start !== 2) indexes.push('...')
                for (var i = start; i <= end; i++) {
                    indexes.push(i);
                }
                if (end !== length - 1) indexes.push('...')
                indexes.push(length);
                return indexes;

            }
        },
        methods: {
            GotoPage: function (pageNumber) {
                this.PageIndex = pageNumber;
                this.$emit("PageIndexChanged", pageNumber);
            },
            First() {

                if (this.PageIndex !== 1) {
                    this.GotoPage(1);
                }
            },
            Previous() {

                if (this.PageIndex !== 1) {
                    var npage = this.PageIndex - 1;
                    this.GotoPage(npage);
                }
            },
            Next() {

                if (this.PageIndex < this.TotalPages) {
                    var npage = this.PageIndex + 1;
                    this.GotoPage(npage);
                }
            },
            Last() {
                if (this.PageIndex < this.TotalPages) {
                    this.GotoPage(this.TotalPages);
                }
            },
            ActivePage(pageNum) {
                return this.PageIndex === pageNum ? 'active' : '';
            }
        },
        watch: {
            PageSize: function (nval, oldVal) {
                this.PageIndex = 1;
                this.$emit("PageSizeChanged", nval);
            }
        },
        created() {
            this.$on('list:Refresh', () => {
                this.PageIndex = 1;
            });
        }
    }
</script>
<style scoped>
    .page-link {
        background-color: inherit;
        color: #878a99;
    }
</style>