import styled from 'styled-components';

const SignUpForm = styled.form`
position: absolute;
top: calc(50% - 320px);
left: calc(50% - 250px);
width: 500px;
background: #fff;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

.header{
    margin: 18px;
}

.header h1{
    font-size: 35px;
    letter-spacing: 1px;
}

.header p{
    font-size: 15px;
    color: grey;
    margin: 5px 0;
}

.content{
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content input{
    width: 100%;
    margin: 5px 0;
    height: 40px;
    padding: 8px;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.content .inline-group{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
}

.content .inline-group input{
    width: calc(100%/2 - 5px);
}

.content .group{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 5px;
    width: 100%;
    height: 40px;
}

.content .group select{
    width: calc(100%/3 - 5px);
    padding: 5px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
}

.content p{
    position: absolute;
    top: -19px;
    color: rgba(0, 0, 0, 0.75);
}

.sex-group{
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 20px;
}

.sex-group p{
    position: absolute;
    top: -18px;
    color: rgba(0, 0, 0, 0.75);
}

.sex-group .item{
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: calc(100%/3 - 5px);
    height: 40px;
    position: relative;
    padding: 5px;
}

.sex-group .item span{
    position: absolute;
    top: 12px;
    left: 8px;
    letter-spacing: 1.2px;
}

.sex-group .item input{
    position: absolute;
    width: 20px;
    right: 8px;
    top: -5px;
}

.footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
}

.footer p{
    font-size: 12px;
    color: #111;
}

.footer button{
    margin: 20px 0;
    width: 150px;
    height: 35px;
    background: #33a532;
    color: white;
    border: #33a532;
    border-radius: 8px;
}

.footer b{
    font-weight: 100;
    color: blue;
    cursor: pointer;
}

.error{
    width: 100%;
    padding: 2px;
    color: red;
    font-size: 15px;
    left: 0px;
}

@media screen and (max-width: 820px){
    width: 400px;
    left: calc(50% - 200px);
}
`;

export default SignUpForm;
