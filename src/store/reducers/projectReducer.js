import {act} from "@testing-library/react";

const initState = {
    projects:[
        {id:'1', title:'I am trying to learn react', content:'blah blah blah'},
        {id:'2', title:'And redux as my temporary store', content:'blah blah blah'},
        {id:'3', title:'To get data from firebase', content:'blah blah blah'}
    ]
};
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;


    }


};

export default projectReducer;