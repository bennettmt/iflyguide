export default function reportReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_REPORT':
            return [...state, { ...action.report }];
        default:
            return state;
    }
}
