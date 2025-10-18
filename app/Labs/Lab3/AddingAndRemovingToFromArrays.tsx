export default function AddingAndRemovingToFromArrays() {
    const numberArray1 = [1, 2, 3, 4, 5];
    const numberArray2 = [...numberArray1, 6];
    const numberArray3 = numberArray2.filter((_, index) => index !== 2);

    const stringArray1 = ["string1", "string2"];
    const stringArray2 = [...stringArray1, "string3"];
    const stringArray3 = stringArray2.filter((_, index) => index !== 1);

    const todoArray = [
        <li key="1">Buy milk</li>,
        <li key="2">Feed the pets</li>,
        <li key="3">Walk the dogs</li>
    ];

    return (
        <div id="wd-adding-removing-from-arrays">
            <h4>Add/remove to/from arrays</h4>
            numberArray1 = {numberArray1} <br />
            numberArray3 = {numberArray3} <br />
            stringArray1 = {stringArray1} <br />
            stringArray3 = {stringArray3} <br />
            Todo list:
            <ol>{todoArray}</ol><hr />
        </div>
    );
}