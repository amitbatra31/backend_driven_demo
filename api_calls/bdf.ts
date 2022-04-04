export default function fetchBEResponse(){
    return {
        templates:[{
            type:'Box',
            id:'DTU',
        },
        {
            type:'Box',
            id:'students',
        },
        {
            type:'Box',
            id:'auditorium',
        },
    ],
        state:{
            DTU: {
                title:'DTU',
            },
            students: {
                title:'students',
                subtitle: "30 students",
            },
            auditorium: {
                title:'Audi',
                subtitle: "30 seats",
            },
        }
    }
};