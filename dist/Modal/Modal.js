var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
var ModalContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var ModalBackDrop = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.35);\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.35);\n"])));
var ModalContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  width: 370px;\n  padding: 32px 16px;\n  border-radius: 8px 8px 0px 0px;\n  background: #ffffff;\n"], ["\n  position: fixed;\n  bottom: 0;\n  width: 370px;\n  padding: 32px 16px;\n  border-radius: 8px 8px 0px 0px;\n  background: #ffffff;\n"])));
function Modal(_a) {
    var modalOpen = _a.modalOpen, closeModal = _a.closeModal, children = _a.children;
    if (!modalOpen) {
        return null;
    }
    return ReactDOM.createPortal(_jsxs(ModalContainer, { children: [_jsx(ModalBackDrop, { onClick: closeModal }), _jsx(ModalContent, { children: children })] }), document.body);
}
export default Modal;
var templateObject_1, templateObject_2, templateObject_3;
