import styled from 'styled-components';

const SignInForm = styled.form`
position: absolute;
top: calc(50% - 250px);
left: calc(50% - 250px);
width: 500px;
background: #fff;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
padding: 25px;

.content{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content input{
    width: 100%;
    margin: 5px 0;
    height: 50px;
    padding: 8px;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.content input:hover{
    border: 1px solid blue;
}

.content button{
    margin-top: 20px;
    width: 100%;
    height: 50px;
    background: #1E90FF;;
    color: white;
    border: #33a532;
    border-radius: 8px;
}

.error{
    width: 100%;
    padding: 1.5px;
    color: red;
    font-size: 15px;
    left: 0px;
}

@media screen and (max-width: 820px){
    width: 400px;
    left: calc(50% - 200px);
}
`;

export default SignInForm;
