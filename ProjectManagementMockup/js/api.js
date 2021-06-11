let apiheader = 
[
    {
        main_header:"Main",
        colspan: 6,//sub_header.count
        rowspan: 1, //if subheader = 0 rowspan = 2 else rowspan 1
        sub_header:[
            {
                name: "Task",
                type: "text",
                value: [
                    {
                        value:"Do it here"
                    }
                ]
            },
            {
                name: "PIC",
                type: "foto",
                value: [
                    {
                        value:`<i class="fas fa-user"></i>`
                    }
                ]
            },
            {
                name: "Type",
                type: "text",
                value: [
                    {
                        value:"Main Framework"
                    }
                ]
            },
            {
                name: "Main",
                type: "text",
                value: [
                    {
                        value:"Mush App"
                    }
                ]
            },
            {
                name: "Priority",
                type: "option",
                value: [
                    {
                        
                    }
                ]
            },
            {
                name: "Note"
            },
        ]
    },
    {
        main_header:"Status",
        colspan: 3,//sub_header.count
        rowspan: 1, //if subheader = 0 rowspan = 2 else rowspan 1
        sub_header:[
            {
                name: "Progress"
            },
            {
                name: "Problem"
            },
            {
                name: "Discription"
            },
        ]
    },
    {
        main_header:"Time",
        colspan: 3, //sub_header.count
        rowspan: 1, //if subheader = 0 rowspan = 2 else rowspan 1
        sub_header:[
            {
                name: "Start Date"
            },
            {
                name: "Time Limit"
            },
            {
                name: "Deadline"
            },
        ]
    },
    {
        main_header:"Others",
        colspan: 1,//sub_header.count != null || sub_header.count > 0 colspan sub_header.count else colspan 1
        rowspan: 2, //if subheader = 0 rowspan = 2 else rowspan 0
    }
]