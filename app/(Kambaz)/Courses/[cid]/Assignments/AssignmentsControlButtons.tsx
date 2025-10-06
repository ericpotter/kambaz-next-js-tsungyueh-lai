import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControlButton() {
    return (
        <div className="float-end">
            <span className="text-muted me-1 border rounded-pill px-3 py-1">40% of Total</span>
            <FaPlus className="position-relative ms-1 me-1" style={{ bottom: "1px" }}/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}