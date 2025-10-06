import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaPlus className="plus-icon position-relative ms-1 me-1"/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}