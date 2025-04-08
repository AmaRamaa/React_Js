import React from "react";

function Content(){
    const title = 'Welcome,';
    const content = 'New Content';
    const students = [
        {
            name: 'John Doe',
            age: 20,
            grade: 'A'
        },
        {
            name: 'Jane Smith',
            age: 22,
            grade: 'B'
        },
        {
            name: 'Sam Brown',
            age: 19,
            grade: 'C'
        }
    ]
    const appStyle ={
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        width: '100px',
        margin: '30px',
        color: 'black',
    }
    const showIntro = true;
    if(!showIntro || students.length === 0){
        return <h1 className='NewClass'>No Students</h1>
    }

    return(


        <>
            {showIntro && <h1 className='NewClass'>{title + " " + students[1].name}</h1> || <h1 className='NewClass'>There is no Students to login</h1>}
            <p>{content}</p>
            <div>
                {students.map((student, index) => (
                    <div key={index} style={appStyle}>
                        <h2>{student.name}</h2>
                        <p>Age: {student.age}</p>
                        <p>Grade: {student.grade}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Content;
