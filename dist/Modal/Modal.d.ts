import { ReactNode } from 'react';
interface ModalProps {
    modalOpen: boolean;
    closeModal?: () => void;
    children: ReactNode;
}
declare function Modal({ modalOpen, closeModal, children }: ModalProps): JSX.Element;
export default Modal;
