<template>
    <div>
        <date-picker v-model="DateModel"
                     :range="true"
                     placeholder="Chọn ngày"
                     format="DD/MM/YYYY"
                     :shortcuts="Shotcuts"
                     @change="DateSelected"
                     @clear="DateClearSelected">
        </date-picker>
    </div>

</template>
<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    let today = new Date()
    today.setHours(0, 0, 0, 0)
    let yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)
    yesterday.setHours(0, 0, 0, 0);
    export default {
        props: ['value'],
        components: {
            'date-picker': DatePicker
        },
        data() {
            return {
                DateModel: [],
                Shotcuts: [
                    { text: 'Hôm nay', onClick: () => [new Date(), new Date()] },
                    {
                        text: 'Hôm qua',
                        onClick: () => {
                            return [yesterday, yesterday];
                        },
                    },
                    {
                        text: 'Tuần này',
                        onClick: () => {
                            return [new Date(today.getFullYear(), today.getMonth(), today.getDate() + (1 - today.getDay())), new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay()))];
                        },
                    },
                    {
                        text: 'Tuần trước',
                        onClick: () => {
                            return [new Date(today.getFullYear(), today.getMonth(), today.getDate() + (-6 - today.getDay())), new Date(today.getFullYear(), today.getMonth(), today.getDate() + (0 - today.getDay()))];
                        },
                    }, {
                        text: 'Tháng này',
                        onClick: () => {
                            return [new Date(today.getFullYear(), today.getMonth() - 0, 1), new Date(today.getFullYear(), today.getMonth() + 1, 0)];
                        },
                    },
                    {
                        text: 'Tháng trước',
                        onClick: () => {
                            return [new Date(today.getFullYear(), today.getMonth() - 1, 1), new Date(today.getFullYear(), today.getMonth(), 0)];
                        },
                    },
                    {
                        text: 'Năm trước',
                        onClick: () => {
                            return [new Date(today.getFullYear() - 1, 0, 1), new Date(today.getFullYear() - 1, 11, 31)];
                        },
                    },

                ],
            }
        },
        methods: {
            DateSelected(dates) {
                this.$emit('input', dates);
            },
            DateClearSelected() {
                this.DateModel = [];
                this.$emit('input', this.DateModel);
            },
        },
        mounted() {
            this.DateModel = [this.value.startDate, this.value.endDate];
        },
        watch: {
            value: function (nval) {
                this.DateModel = nval;
            }
        }
    }
</script>