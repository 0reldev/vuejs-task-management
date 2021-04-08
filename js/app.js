//  import _ from 'lodash';


// let column = {
//     template: `
    
    
//     `
// }

Vue.filter('order', function(columns) {

    // var sortedColumns = new Array();

    columns.sort(function compare (a, b) {
        if (a.order < b.order)
            return -1;
        if (a.order > b.order)
            return 1;
        return 0;
    });
})

let toUpperCase = function(value) {
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
}


// {{ { dreamTeam, column, tags, tickets } }}

let vm = new Vue ({

    el: '#app',
    template: `
    <div class="row">
        <div class="col s12 m3" v-for="column in columns">
            <h6 class="center-align">{{ column.title | toUpperCase }}</h6>
        </div>
    </div>
    `,
    // TODO: sort the columns by order number
    data: {
      ...data
    },
    // computed: {
    //     orderedColumns: function () {
    //         // return _.orderBy(this.columns, 'order')
    //         columns = this.columns;
    //         return sortByOrder(columns)
            
    //     }
    // },
    filters: { toUpperCase },
    // methods: {
    //     sortByOrder: function(columns) {
    //         columns.sort(function compare (a, b) {
    //             if (a.order < b.order)
    //                 return -1;
    //             if (a.order > b.order)
    //                 return 1;
    //             return 0;
    //         })
    //     }
    // }
})