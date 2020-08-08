import styled, { css } from "styled-components";


export const Name = styled.h1`
  
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;

  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
  
  `

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`
export const Form = styled.div`
height: 100%;
width: 100%;
border: .1ch;
border-color: rgb(119, 219, 209);
color: rgb(119, 219, 209);
box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.404);
margin: 15px;

`
export const Label = styled.label`
    margin-top: 10px;
	margin-bottom: 0.5em;
	color: rgb(119, 219, 209);
    display: block;
    font-size: 20px;
    font-weight: 400;
`


export const Input = styled.input`
	padding: 0.5em;
	color: rgb(0, 0, 0);
	background: rgba(255,255,255, .7);
	border: none;
	border-radius: 3px;
	width: 80%;
    margin-bottom: 0.2em;
    font-family: Jost, sans-serif;
    font-weight: 400;
    font-size: 16px;
`
export const InputMessage = styled.textarea`
    margin-top: 10px;
	padding: 0.5em;
	color: rgb(0, 0, 0);
	background: rgba(255,255,255, .7);
	border: none;
	border-radius: 3px;
    width: 80%;
    height: 20%;
    margin-bottom: 0.2em;
    font-family: Jost, sans-serif;
    font-size: 16px;
    font-weight: 400;
  
    flex-wrap: wrap;
`

export const InputSubmit = styled.input`
	padding: 0.5em;
	color: rgb(0, 0, 0);
	background: rgba(255,255,255, .7);
	border: none;
	border-radius: 3px;
	width: 50%;
    margin-bottom: 0.5em;
    font-size: 15px;
    font-weight: 350;
    font-family: Jost, sans-serif;
`
export const ContactMe = styled.h2`
    padding-top: 20px;
    font-size: 30px;
    font-weight: 400;
`

export const EmailAdd = styled.p`

    margin-left: 20px;
    margin-right: 20px;
    font-size: 10px;
`