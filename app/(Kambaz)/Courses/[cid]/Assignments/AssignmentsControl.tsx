import {Button, FormControl, InputGroup} from "react-bootstrap";
import {CiSearch} from "react-icons/ci";
import InputGroupText from "react-bootstrap/InputGroupText";
import {FaPlus} from "react-icons/fa6";

export default function AssignmentsControl() {
    return (
        <div id="wd-assignment-control-button" className="text-nowrap">
            <InputGroup className="float-start me-2" style={{ width: "250px" }}>
                <InputGroupText className="bg-white border-end-0">
                    <CiSearch size={20}/>
                </InputGroupText>
                <FormControl
                    type="text"
                    size="lg"
                    placeholder="Search..."
                    id="wd-search-assignment"
                    className="border-start-0"
                />
            </InputGroup>
            <Button variant="secondary" size="lg" id="wd-group" className="float-end me-2">
                <FaPlus className="position-relative ms-1 me-1" style={{ bottom: "1px" }}/> Group
            </Button>
            <Button variant="danger" size="lg" id="wd-assignment" className="float-end me-2">
                <FaPlus className="position-relative ms-1 me-1" style={{ bottom: "1px" }}/> Assignment
            </Button>
        </div>
    );
}