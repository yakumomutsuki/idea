var acc = new Vue({
    el : '#accbox',
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
        ],
        is_read_more : false
    },
    computed : {
        view_items : function () {
            // pushed read more button
            if (this.is_read_more) return this.items;

            // un-pushed read more button
            let arrays = [];
            $.each(this.items, function (index, val) {
                if (index < 3){
                    arrays.push(val);
                }
            });
            return arrays;
        }
    }
});