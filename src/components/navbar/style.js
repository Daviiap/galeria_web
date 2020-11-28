import styled from 'styled-components';

export const LoginModalButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: calc(50% - 230px);
    left: calc(50% + 215px);
    z-index: 1;

    @media screen and (max-width: 820px){
        left: calc(50% + 164px);
    }
`;

export const RegisterModalButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: calc(50% - 300px);
    left: calc(50% + 200px);
    z-index: 1;

    @media screen and (max-width: 820px){
        left: calc(50% + 155px);
    }
`;

const NavBar = styled.nav`
background: var(--main-color);
width: 100%;
min-width: 100vw;
height: 85px;
display: flex;
justify-content: space-between;
overflow: hidden;

.logo{
    color: var(--secondary-color);
    line-height: 80px;
    padding: 0 80px;
    font-weight: bold;
    font-size: 35px;
}

ul{
    margin-right: 55px;
}

ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 15px;
}

ul li button{
    color: var(--secondary-color);
    border: none;
    background: transparent;
    font-size: 17px;
    padding: 7px 13px;
    text-transform: uppercase;
    display: inline-block;
    width: 120%;
}

ul li button::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: var(--secondary-color);
    transition: .3s;
}

ul li button:hover::after{
    width: 100%;
    transition: .3s;
}

.menu-icon{
    font-size: 30px;
    color: var(--secondary-color);
    float: right;
    line-height: 90px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}

@media screen and (max-width: 820px){
    .menu-icon{
        display: block;
    }
    .menu-items{
        width: 220px;
        heihgt: 100%;
        background: var(--main-color);
        position: absolute;
        top: 85px;
        transition: all .9s;
        z-index: 0;
    }
    .menu-items ul{
        display: flex;
        flex-direction: column;
        transition: all 0.4s;
    }
    .menu-items ul button{
        width: 80%;
    }
    #true{
        right: 0;
        visibility: visible;
        opacity: 1;
    }
    #false{
        right: calc(0px - 220px);
        visibility: hidden;
        opacity: 0;
    }
    .logo{
        padding: 0 40px;
    }
}
`;

export default NavBar;
