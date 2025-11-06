import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database";

const initialState = {
    enrollments: initialEnrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
            const newEnrollment = {
                _id: new Date().getTime().toString(),
                user: action.payload.userId,
                course: action.payload.courseId,
            };
            state.enrollments.push(newEnrollment);
        },

        unenrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
            state.enrollments = state.enrollments.filter(
                (enrollment) =>
                    !(enrollment.user === action.payload.userId &&
                        enrollment.course === action.payload.courseId)
            );
        },
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;