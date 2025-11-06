import {FaTrash} from "react-icons/fa";
import {FaPencil, FaPlus} from "react-icons/fa6";
import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({moduleId, deleteModule, editModule}: {
    moduleId: string;
    deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void
}) {
    return (
        <div className="float-end">
            <FaPencil onClick={() => editModule(moduleId)}
                      className="text-primary me-3 mb-1"
                      style={{cursor: "pointer"}}/>
            <FaTrash className="text-danger me-3 mb-1"
                     onClick={() => deleteModule(moduleId)}
                     style={{cursor: "pointer"}}/>
            <GreenCheckmark/>
            <FaPlus className="plus-icon position-relative ms-1 me-1"
                    style={{cursor: "pointer"}}/>
            <IoEllipsisVertical className="fs-4 mb-1"/>
        </div>
    );
}