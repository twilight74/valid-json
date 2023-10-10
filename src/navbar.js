import React from "react";
import styled from 'styled-components';

const JsonButton = styled.button`
 
 background : #c51162;
 border-radius:5px;
 color: white;
 width : 100px;
 height:40px;
 outline:0;
 font-size:15px;
 cursor: pointer;
 &:hover{
    background-color:#ff80ab;
    transition: ease background-color 250ms;
 }
`;

// const TextButton = styled.button`
 
//  background : #039be5;
//  border-radius:5px;
//  color: white;
//  width : 100px;
//  margin-left:20px;
//  height:40px;
//  outline:0;
//  font-size:20px;
//  cursor: pointer;
//  &:hover{
//     background-color:#01579b;
//     transition: ease background-color 250ms;
//  }
// `;

const Ul = styled.ul`
background-color:yellow;
`
const Li = styled.li`
display:inline-block;
list-style-type: none;

`

function clickme(){
    alert("you clicked me")
}


export default function NavBar (props) {
    return(
        <>

        <nav>
            <Ul>
                <Li>
                <JsonButton onClick={clickme}>
                    Check Json
                </JsonButton>
                </Li>
                {/* <Li>
                <TextButton onClick={clickme}>
                    Text
                </TextButton>    
                </Li> */}
            </Ul>
        </nav>
        </>

    )
}




