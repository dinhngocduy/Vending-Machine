import { Component } from "react";
import styled from "styled-components";
import { BiError } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { Button } from 'reactstrap';

const Wrapper = styled.div`
    width:100%;
    height:100%;
    background-color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > svg{
        width:36px;
        height:36px;
    }
`;

interface IProps {
    children: any
}
  
interface IState {
    error: any,
    errorInfo: null
}

// ErrorBoundary Component
export default class ErrorBoundary extends Component<IProps, IState> {
    constructor(props:any){
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error: any , errorInfo: any) {
        return { error , errorInfo };
    }

    componentDidCatch(error:any, errorInfo:any) {
        // Bạn cũng có thể log lỗi vào một service báo cáo lỗi
        // logErrorToMyService(error, info);
    }

    refreshPage(){
        window.location.reload();
    }

    render() {
        const { error , errorInfo } = this.state;
        if (error) {
            console.log("----------ERROR----------");
            console.log(error);
            errorInfo && console.log("Info:" + errorInfo);
            console.log("-------------------------");
            return (
                <Wrapper>
                    <BiError></BiError>
                    <h5 className="mt-2">Có lỗi xảy ra !!! Vui lòng thử lại .</h5>
                    <Button color="primary" className="mt-2" onClick={ this.refreshPage }>
                        <IoArrowBackOutline></IoArrowBackOutline>
                        <span>Refresh lại trang</span>
                    </Button>
                </Wrapper>
            );
        }
        return this.props.children;
    }
}