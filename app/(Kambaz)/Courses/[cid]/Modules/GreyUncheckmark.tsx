import {FaCircle} from "react-icons/fa";
import {MdDoNotDisturbAlt} from "react-icons/md";
export default function GreyUncheckmark() {
    return (
        <span className="me-1 position-relative">
            <MdDoNotDisturbAlt className="uncheck-icon text-muted me-1 position-absolute fs-5"/>
            <FaCircle className="text-white me-1 fs-6" />
        </span>
    );
}