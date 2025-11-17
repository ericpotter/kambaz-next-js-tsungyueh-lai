import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    due: string;
    available: string;
    until?: string;
}

interface AssignmentsState {
    assignments: Assignment[];
}

const initialState: AssignmentsState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            const newAssignment: Assignment = {
                ...action.payload,
                _id: new Date().getTime().toString(),
            };
            state.assignments.push(newAssignment);
        },

        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },

        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === action.payload._id ? action.payload : assignment
            );
        },

        setAssignments: (state, action: PayloadAction<Assignment[]>) => {
            state.assignments = action.payload;
        }
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignments
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;