import {createSlice} from "@reduxjs/toolkit";
import {modules} from "../../../Database";
import {v4 as uuid4} from "uuid";

const initialState = {
    modules: modules,
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, {payload: module}) => {
            const newModule: any = {
                _id: uuid4(),
                lessons: [],
                name: module.name,
                course: module.course,
            };
            state.modules = [...state.modules, newModule] as any;
        },
        deleteModule: (state, {payload: moduleId}) => {
            state.modules = state.modules.filter(
                (m) => m._id !== moduleId);
        },
        updateModule: (state, {payload: module}) => {
            state.modules = state.modules.map((m) =>
                m._id === module._id ? module : m
            );
        },
        editModule: (state, {payload: moduleId}) => {
            state.modules = state.modules.map((m) =>
                m._id === moduleId ? {...m, editing: true} : m
            );
        },
    },
});
export const {addModule, deleteModule, updateModule, editModule} =
    modulesSlice.actions;
export default modulesSlice.reducer;