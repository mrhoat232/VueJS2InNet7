<template>
    <div>
        <date-picker v-model="DateModel" 
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
                DateModel: null,
                Shotcuts:[
                  { text: 'Hôm nay', onClick: () => today },
                  {
                    text: 'Hôm qua',
                    onClick: () => {
                      return yesterday;
                    },
                  },
                ],
            }
        },
        methods: {
            DateSelected(dates) {
                console.log(dates);
                this.$emit('input', dates);
            },
            DateClearSelected() {
                this.DateModel = null;
                this.$emit('input', this.DateModel);
            },
        },
        watch: {
            value: function (nval) {
                this.DateModel = nval;
                console.log(nval);
            }
        }
    }
</script>