var acc = new Vue({
    el : '#acc',
    data : {
        items : [
            'item1',
            'item2',
            'item3',
            'item4',
            'item5',
            'item6',
            'item7',
            'item8',
            'item9',
            'item10'
        ]
    },
    methods : {
        arrays_3 : function () {
            var arrays = [];
            $.each(this.items, function (index, val) {
               if (index < 3){
                   arrays.push(val);
               }
            });
            return arrays;
        },
        arrays_other : function () {
            var arrays = [];
            $.each(this.items, function (index, val) {
                if (index >= 3){
                    arrays.push(val);
                }
            });
            return arrays;
        }
    }
});